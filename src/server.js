// server.js

import { Server } from 'boardgame.io/server';
import path from 'path';
import serve from 'koa-static';
import { TicTacToe } from './game';

const server = Server({ games: [TicTacToe] });
const PORT = process.env.PORT || 8000;

// Build path relative to the server.js file
const frontEndAppBuildPath = path.resolve(__dirname, '../build');
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) => await serve(frontEndAppBuildPath)(
      Object.assign(ctx, { path: 'index.html' }),
      next
    )
  );
  console.log(`Running server on ${PORT}`)
});

// import { Server } from 'boardgame.io/server';
// import path from 'path';
// import Koa from 'koa';
// import serve from 'koa-static';
// import mount from 'koa-mount';
// import { TicTacToe } from './game';
// import fs from 'fs';

// // const server =  Server({ games: [TicTacToe] });
// // const PORT = process.env.PORT || 8000;

// // Build path relative to the server.js file
// // const frontEndAppBuildPath = path.resolve(__dirname, '../build');

// // Serve the build directory
// // const static_pages = new Koa();
// // static_pages.use(serve(frontEndAppBuildPath));
// // server.app.use(mount('/', static_pages));
// // server.run(PORT, () => {
// //   server.app.use(
// //     async (ctx, next) => await serve(frontEndAppBuildPath)(
// //       Object.assign(ctx, { path: 'index.html' }),
// //       next
// //     )
// //   )
// // });

// const PORT = process.env.PORT || 8000;
// const server = Server({
//   games: [TicTacToe],
//   // https: {
//   //   cert: fs.readFileSync('src/cert.pem'),
//   //   key: fs.readFileSync('src/key.pem'),
//   // }
// });
// server.run(PORT, () => {
//   console.log(`Serving at: http://localhost:${PORT}/`);
// });