import { app } from './app.js';
import { env } from './env/index.js';

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running !");
  });
