# btst-be-backend

This project is a take home assignment for BTST Backend Developer Intern position.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## Setup

### Prerequisites

    - Node.js
    - npm
    - PostgreSQL

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:shasherazi/btst-be-backend.git
    cd btst-be-backend
   ```
2. Install NPM packages
   ```sh
    npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables
   ```sh
    PORT=3000
    DATABASE_URL="postgresql://postgres:password@localhost:5432/btst_be_backend"
   ```
4. Create a database and run migrations
   ```sh
    npx prisma db push
   ```
5. Seed the database
   ```sh
    npx prisma db seed
   ```
6. Run the server
   ```sh
    npm run dev
   ```

## Usage

### API Endpoints

#### /users

    - GET /users - Get all users
    - POST /users - Create a new user
    - GET /users/:id - Get a user by id
    - PUT /users/:id - Update a user by id
    - DELETE /users/:id - Delete a user by id

#### /users/:id/tasks

    - GET /users/:id/tasks - Get all tasks of a user
    - POST /users/:id/tasks - Create a new task for a user
    - GET /users/:id/tasks/:taskId - Get a task by id
    - PUT /users/:id/tasks/:taskId - Update a task by id
    - DELETE /users/:id/tasks/:taskId - Delete a task by id

## Why Prisma?

Prisma is a modern database toolkit that makes it easier for developers to build applications with databases. It replaces traditional ORMs and makes database access easy with an auto-generated and type-safe query builder that's tailored to your database schema. Prisma is open-source and can be used in any Node.js, Java, or TypeScript application.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
