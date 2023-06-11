import { schedule } from "@netlify/functions";
import { Webhook } from 'discord-webhook-node';
import axios from 'axios'
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

console.log("init")
export const handler = schedule("*/1 * * * *", async (event) => {
    let embeds = [
        {
            title: "Webhook Example",
        },
    ];

    let data = JSON.stringify({ embeds });

    var config = {
        method: "POST",
        url: "https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW", // https://discord.com/webhook/url/here
        headers: { "Content-Type": "application/json" },
        data: data,
    };

    axios(config)
        .then((response) => {
            console.log("Webhook delivered successfully");
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

    console.log("hola")
    return {
        statusCode: 200,
        body: "Hello"
    }
})