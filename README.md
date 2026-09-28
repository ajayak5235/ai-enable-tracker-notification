# AI Enable Tracker Notification API

## Project structure

```text
src/
	config/       Environment and application configuration
	controllers/  HTTP request handlers
	errors/       Application-specific errors
	middleware/   Express middleware and error handling
	models/       Data models
	routes/       API route definitions
	services/     Business logic and integrations
	types/        Shared TypeScript types
	utils/        Reusable helpers
	validation/   Request validation schemas
	app.ts        Express application setup
	server.ts     Process entry point and graceful shutdown
```

Keep HTTP concerns in routes/controllers, and put business logic in services. The TypeScript build writes production JavaScript to `dist/`.

## Run

```sh
npm install
npm run build
npm start
```

The service listens on port `3000` by default. Configure `PORT` and `NODE_ENV` in a local `.env` file. `GET /health` returns the service health status; API routes are mounted under `/api`.