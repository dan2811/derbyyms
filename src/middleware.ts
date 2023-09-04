import { withAuth } from "next-auth/middleware";
import { Role } from "./types";


export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {

            console.log("Middleware triggered");
            console.debug("TOKEN: ", JSON.stringify(token));

            // Check if the middleware is processing the
            // route which requires a specific role
            const path = req.nextUrl.pathname;
            console.log("User visiting path: ", path);
            if (path.startsWith("/admin")) {
                if (token?.role === Role.admin || token?.role === Role.superAdmin || token?.role === Role.teacher) {
                    console.log("ADMIN ACCESS GRANTED TO: ", JSON.stringify(token));
                    return true;
                }
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