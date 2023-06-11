import { schedule } from "@netlify/functions";
import { Webhook } from 'discord-webhook-node';
import XMLHttpRequest from 'xhr2'
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

console.log("init")
export const handler = schedule("*/1 * * * *", async (event) => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': "Probando",
        'username': 'AI',
    }));
    console.log("hola")
    return {
        statusCode: 200,
        body: "Hello"
    }
})