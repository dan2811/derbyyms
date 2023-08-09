# Development

• Spin up locally by running `yarn start`
• `yarn seed` can be used to populate the DB with some sample data
• You will only be able to login with google if you have been added to the list of authorised testers.
• When a schema change is made, you must run `yarn` to generate a new prisma client and `npx prisma db push` to push the schema change to the planet scale DB.

## Technologies used
- NextJS - JS framework
- TRPC - typesafe API
- Prisma - ORM
- Planetscale - Serverless DB
- Axiom - Logs
- Upstash - Rate limiting
- Vercel - Deployment


### TODO
• Implement other auth providers
• Send emails on taster form submission
• Make customer facing pages - once complete we could deploy to prod and get the domain switched over then commence admin console dev using CI/CD.
• Show link to admin console if user's role is not set to Pupil
• Create admin console

## Feature ideas

- Playable keyboard
- Happy birthday emails from the student's teachers