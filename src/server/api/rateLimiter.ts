import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { TRPCError } from "@trpc/server";

const redis = Redis.fromEnv();

// This config should be the only adjustment needed to adjust the rate limit for the entire API.
const rateLimits = {
    public: {
        maxRequests: 35,
        window: "10s",
    },
    authed: {
        maxRequests: 50,
        window: "10s",
    },
    admin: {
        maxRequests: 75,
        window: "10s",
    },
} as const;

const ratelimit = {
    public: new Ratelimit({
        redis,
        analytics: true,
        prefix: "ratelimit:public",
        limiter: Ratelimit.slidingWindow(rateLimits.public.maxRequests, rateLimits.public.window),
    }),
    authed: new Ratelimit({
        redis,
        analytics: true,
        prefix: "ratelimit:authed",
        limiter: Ratelimit.slidingWindow(rateLimits.authed.maxRequests, rateLimits.authed.window),
    }),
    admin: new Ratelimit({
        redis,
        analytics: true,
        prefix: "ratelimit:admin",
        limiter: Ratelimit.slidingWindow(rateLimits.admin.maxRequests, rateLimits.admin.window),
    }),
};

export const publicRateLimit = async (ip: string) => {
    // should probably decline the request here if someone is trying to hide their IP?
    if (!ip) return console.log("No IP address provided. Could not rate limit.");
    const { success, remaining } = await ratelimit.public.limit(ip);
    approachingRateLimit(remaining, "public", ip);
    if (!success) {
        console.warn(JSON.stringify({ message: "RATE_LIMIT_EXCEEDED", ip }));
        throw new TRPCError({ code: "TOO_MANY_REQUESTS", message: "Too many requests." });
    };
};

export const authedRateLimit = async (userId: string | undefined) => {
    // we should never see this line in the logs, but just in case...
    if (!userId) return console.log("No user ID provided. Could not rate limit.");

    const { success, remaining } = await ratelimit.authed.limit(userId);
    approachingRateLimit(remaining, "authed", userId);

    if (!success) {
        console.warn(JSON.stringify({ message: "RATE_LIMIT_EXCEEDED", userId }));
        throw new TRPCError({ code: "TOO_MANY_REQUESTS", message: "Too many requests." });
    };
};

export const adminRateLimit = async (userId: string) => {
    const { success, remaining } = await ratelimit.admin.limit(userId);
    approachingRateLimit(remaining, "admin", userId);

    if (!success) {
        console.warn(JSON.stringify({ message: "RATE_LIMIT_EXCEEDED", userId }));
        throw new TRPCError({ code: "TOO_MANY_REQUESTS", message: "Too many requests." });
    };
};


const approachingRateLimit = (remaining: number, type: keyof typeof rateLimits, ipOrUserId: string) => {
    if (remaining < 7) {
        console.log("Someone is approaching the rate limit. Investigate the ip/user ID and determine if they are abusing the API. If not we may need to increase the rate limit.");
        console.warn(JSON.stringify({ message: "APPROACHING_RATE_LIMIT", type, remaining, ipOrUserId }));
    }
};