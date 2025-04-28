// import { Env, Hono } from 'hono';
// import { hc } from 'hono/client';
// import { createMiddleware } from 'hono/factory';
// import { YDurableObjectsAppType } from 'y-durableobjects';

// export const websocket = new Hono<Env>();

// type Input = {
//   outputFormat: 'ws';
// };

// export const upgrade = <E extends Env, P extends string>() =>
//   createMiddleware<E, P, Input>(async (c, next) => {
//     if (c.req.header('Upgrade') !== 'websocket') {
//       return c.body('Expected websocket', {
//         status: 426,
//         statusText: 'Upgrade Required',
//       });
//     }
//     return next();
//   });

// websocket.get('/:id', upgrade(), async (c) => {
//   const roomId = c.req.param('id');

//   const id = c.env.Y_DURABLE_OBJECTS.idFromName(roomId);
//   const stub = c.env.Y_DURABLE_OBJECTS.get(id);

//   const url = new URL('/', c.req.url);
//   const client = hc<YDurableObjectsAppType>(url.toString(), {
//     fetch: stub.fetch.bind(stub),
//   });

//   const res = await client.rooms[':roomId'].$get(
//     { param: { roomId: c.req.param('id') } },
//     { init: { headers: c.req.raw.headers } }
//   );

//   return new Response(null, {
//     webSocket: res.webSocket,
//     status: res.status,
//     statusText: res.statusText,
//   });
// });
