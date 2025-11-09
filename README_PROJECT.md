# ATC Next Gen - Online Shop Management System (Backend)

This repository contains the backend for the Online Shop Management System used by ATC Next Gen Co., Ltd.

Key features implemented:
- Express.js API
- Sequelize ORM (SQLite by default, can use Postgres via DATABASE_URL)
- JWT authentication with bcrypt password hashing
- Role-based access control (user/admin)
- Basic products and orders endpoints
- Security: Helmet, CORS configurability, rate limiting

Getting started
1. Copy `.env.example` to `.env` and fill sensitive values (JWT_SECRET, optional DATABASE_URL).
2. Install dependencies:

```bash
npm install
```

3. Start in development (with nodemon):

```bash
npm run dev
```

Production:

```bash
npm start
```

Database
- By default the project uses SQLite (file stored under `data/database.sqlite`).
- To use Postgres or another DB supported by Sequelize, set `DATABASE_URL` in your `.env`.

Environment variables
- `PORT` - port to run server (default 3000)
- `DATABASE_URL` - (optional) connection string for Postgres
- `JWT_SECRET` - set a strong secret
- `JWT_EXPIRY` - token expiry (e.g. `2h`)
- `SALT_ROUNDS` - bcrypt rounds (default 12)
- `CORS_ORIGINS` - comma separated allowed origins or `*`
- `AUTH_RATE_LIMIT` - requests per window for auth endpoints (default 20)

Security notes
- Keep `JWT_SECRET` private. Consider using a secrets manager in production.
- Use HTTPS in production and set `trust proxy` when behind a load balancer.

Next steps / improvements
- Add refresh token rotation and revocation
- Add more input validation and tests
- Add CI/CD pipeline and Dockerfile for deployment

License: MIT
