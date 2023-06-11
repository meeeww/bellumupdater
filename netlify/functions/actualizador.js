const { schedule } = require("@netlify/functions");
import { Webhook } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

const handler = async function() {
    hook.send("Test cada hora (sorry for el flood)")

    return {
        statusCode: 200,
    };
};

exports.handler = schedule("@hourly", handler);