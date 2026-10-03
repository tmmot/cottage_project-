# Momo & Tom's Cottage

A cozy, interactive digital cottage built for a birthday gift and designed as a long-lived personal web experience.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Auth.js / secure server-side sessions

## Local setup

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

Then open http://localhost:3000

## Project goals

This starter app lays the foundation for:

- a 2.5D cottage scene with interactive objects
- Paiki's onboarding dialogue
- shared state across cottage features
- modular integrations for calendar, music, photos, and notifications
- secure private data handling and extensible architecture

## Current scaffold status

This repository currently includes the working foundation for the interactive cottage experience, including:

- landing page with a cottage scene
- responsive warm pastel aesthetic
- Paiki dialogue flow
- object interaction model
- configuration and database schema foundations

## Future work

Next major phases include:

1. real authentication and protected routes
2. database-backed onboarding and profile state
3. Google Calendar OAuth integration
4. Spotify and Apple Music service abstractions
5. photo storage and projectors
6. whiteboard, bookshelf, fitness, and mailbox data models
7. live updates and notification synchronization
8. deployment and production hardening

## Important note

Third-party music and calendar integrations need real OAuth credentials and developer app registration. The codebase contains the integration architecture and config placeholders, but real access still requires provider account setup.
