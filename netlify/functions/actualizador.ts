// import { schedule } from "@netlify/functions";

// console.log("init")
// const handler = async function(event, context) {
//     hook.send("Prueba de la conexión. <@286402429258301440>")
//     console.log("hola")
//     return {
//         statusCode: 200,
//         body: "Hello"
//     }
// }

// exports.handler = schedule("* * * */1 *", handler)

// import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
// import { schedule } from "@netlify/functions";

// const myHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
//   console.log("Received event:", event);
//   hook.send("Prueba de la conexión v2. <@286402429258301440>")

//     return {
//         statusCode: 200,
//     };
// };

// const handler = schedule("*/1 * * * *", myHandler)

// export { handler };

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { schedule } from "@netlify/functions";

import { Webhook } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

const myHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  console.log("1 minuto");
  await hook.send("Prueba de la conexión. <@286402429258301440>")

  return {
    statusCode: 200,
  };
};

const handler = schedule("*/1 * * * *", myHandler)

export { handler };