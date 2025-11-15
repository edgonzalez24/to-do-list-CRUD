# To-do List

A REST API built with Express.js, TypeScript, Prisma, and SQLite.

## Tech Stack

### Backend
- **[Express.js](https://expressjs.com/)** `5.1.0` - Minimalist web framework for Node.js
- **[TypeScript](https://www.typescriptlang.org/)** `5.9.3` - Typed superset of JavaScript
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment

### Database
- **[Prisma](https://www.prisma.io/)** `6.19.0` - Modern ORM for Node.js
- **[SQLite](https://www.sqlite.org/)** `5.1.7` - Lightweight relational database

### Utilities
- **[class-validator](https://github.com/typestack/class-validator)** `0.14.2` - Data validation with decorators
- **[class-transformer](https://github.com/typestack/class-transformer)** `0.5.1` - Object transformation with decorators
- **[reflect-metadata](https://github.com/rbuckton/reflect-metadata)** `0.2.2` - Metadata support for decorators
- **[dotenv](https://github.com/motdotla/dotenv)** `17.2.3` - Environment variables management
- **[TypeORM](https://typeorm.io/)** `0.3.27` - Alternative ORM for TypeScript

### Development Tools
- **[tsx](https://github.com/esbuild-kit/tsx)** `4.20.6` - TypeScript executor with hot reload
- **[@types/node](https://www.npmjs.com/package/@types/node)** `24.10.1` - Type definitions for Node.js
- **[@types/express](https://www.npmjs.com/package/@types/express)** `5.0.5` - Type definitions for Express

## Available Scripts

```bash
# Development with hot reload
npm run dev

# Compile TypeScript
npm run tsc

# Build and run in production
npm start
```

## Project Structure

```
src/
├── app.ts                 # Express main configuration
├── index.ts              # Entry point
├── config/               # Configurations (DB, Prisma)
├── modules/              # Modules (auth, etc.)
├── routes/               # Route definitions
├── services/             # Business logic
└── common/               # Shared utilities
```

## Features

- ✅ Strong typing with TypeScript
- ✅ DTO validation with decorators
- ✅ ORM with Prisma for database management
- ✅ Organized and scalable modules
- ✅ Environment variables with dotenv
- ✅ Automatic migrations with Prisma