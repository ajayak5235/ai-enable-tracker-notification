import { env } from './config/env.js';
import app from './app.js';

const server = app.listen(env.port, () => {
  console.info(`Server listening on port ${env.port} (${env.nodeEnv})`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  console.error('Failed to start server:', error.message);
  process.exitCode = 1;
});

const shutdown = (signal: NodeJS.Signals) => {
  console.info(`${signal} received; shutting down`);
  const forceExit = setTimeout(() => {
    console.error('Graceful shutdown timed out');
    process.exit(1);
  }, 10_000);
  forceExit.unref();

  server.close((error) => {
    clearTimeout(forceExit);
    if (error) {
      console.error('Error during shutdown:', error.message);
      process.exitCode = 1;
    }
  });
};

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));