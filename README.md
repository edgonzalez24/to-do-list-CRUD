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

### API Documentation
- **[Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)** `5.0.1` - Swagger UI for Express
- **[swagger-autogen](https://github.com/davibaltar/swagger-autogen)** `2.23.7` - Auto-generate Swagger documentation

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
├── app.ts                      # Express main configuration
├── index.ts                    # Entry point
├── config/                     # Configurations (DB, Prisma, Passport)
│   ├── passport.config.ts      # Passport JWT strategy configuration
│   └── prisma.config.ts        # Prisma client setup
├── middlewares/                # Express middlewares
│   └── auth.middleware.ts      # Authentication middleware
├── modules/                    # Feature modules
│   ├── auth/                   # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.dto.ts
│   │   ├── auth.routes.ts
│   │   ├── auth.service.ts
│   │   └── index.auth.ts
│   └── tasks/                  # Tasks module
│       ├── tasks.controller.ts
│       ├── tasks.dto.ts
│       ├── tasks.routes.ts
│       ├── tasks.service.ts
│       └── index.tasks.ts
├── routes/                     # Route aggregation
├── common/                     # Shared utilities
│   └── validate-dto.common.ts  # DTO validation helpers
└── generated/                  # Generated code (Prisma Client)
```

## Features

- ✅ Strong typing with TypeScript
- ✅ DTO validation with decorators
- ✅ ORM with Prisma for database management
- ✅ Authentication with Passport and JWT
- ✅ Secure password hashing with bcrypt
- ✅ Organized and scalable modular architecture
- ✅ Environment variables with dotenv
- ✅ Automatic migrations with Prisma
- ✅ Task management CRUD operations
- ✅ Protected routes with JWT authentication
- ✅ API documentation with Swagger UI

## Authentication

- User registration and login with email and password
- JWT token generation for secure sessions
- Protected routes using Passport and JWT strategy
- Password security with bcrypt hashing

## Database Schema

### User Model
- `id`: Auto-increment primary key
- `email`: Unique email address
- `password`: Hashed password
- `name`: User's full name
- `tasks`: Relation to Task model

### Task Model
- `id`: Auto-increment primary key
- `title`: Task title
- `description`: Optional task description
- `completed`: Boolean flag (default: false)
- `userId`: Foreign key to User
- `user`: Relation to User model
