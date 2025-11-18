# To-do List

A REST API built with Express.js, TypeScript, Prisma, and SQLite.

## Tech Stack

### Backend
- **[Express.js](https://expressjs.com/)** `5.1.0` - Minimalist web framework for Node.js
- **[TypeScript](https://www.typescriptlang.org/)** `5.9.3` - Typed superset of JavaScript
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment

### Authentication
- **[Passport](https://www.passportjs.org/)** `0.7.0` – Authentication middleware for Node.js
- **[passport-jwt](http://www.passportjs.org/packages/passport-jwt/)** `4.0.1` – JWT strategy for Passport
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)** `9.0.2` – JWT implementation for Node.js
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** `5.1.1` – Password hashing

### Database
- **[Prisma](https://www.prisma.io/)** `6.19.0` - Modern ORM for Node.js
- **[SQLite](https://www.sqlite.org/)** `5.1.7` - Lightweight relational database

### Utilities
- **[class-validator](https://github.com/typestack/class-validator)** `0.14.2` - Data validation with decorators
- **[class-transformer](https://github.com/typestack/class-transformer)** `0.5.1` - Object transformation with decorators
- **[dotenv](https://github.com/motdotla/dotenv)** `17.2.3` - Environment variables management

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
├── index.ts               # Entry point
├── config/                 # Configurations (DB, Prisma, Passport)
├── modules/               # Modules (auth, etc.)
│   └── auth/              # Authentication logic (service, routes)
├── routes/                # Route definitions
├── services/              # App logic
└── common/                # Shared utilities
```

## Features

- ✅ Strong typing with TypeScript
- ✅ DTO validation with decorators
- ✅ ORM with Prisma for database management
- ✅ Authentication with Passport and JWT
- ✅ Secure password hashing with bcrypt
- ✅ Organized and scalable modules
- ✅ Environment variables with dotenv
- ✅ Automatic migrations with Prisma

## Authentication

- User registration and login with email and password
- JWT token generation for secure sessions
- Protected routes using Passport and JWT strategy
