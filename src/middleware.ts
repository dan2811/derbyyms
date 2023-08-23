import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {

            console.log("req + token --->>>> ", req, token);

            const sessionCookie = req.cookies.get("next-auth.session-token");
            if (!sessionCookie) return false;

            // Check if the middleware is processing the
            // route which requires a specific role
            const path = req.nextUrl.pathname;
            if (path.startsWith("/admin")) {
                if (token?.role === "admin") return true;
                return false;
            }

            // By default return true only if the token is not null
            // (this forces the users to be signed in to access the page)
            return req !== null;
        }
    }
});

// Define paths for which the middleware will run
export const config = {
    matcher: [
        "/profile/:path*",
        "/admin/:path*"
    ]
};