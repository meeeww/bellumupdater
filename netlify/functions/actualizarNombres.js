import { schedule } from "@netlify/functions";
import axios from 'axios'

import { Webhook } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

const API = "RGAPI-206b6873-5ec5-4360-a116-b1f1f2fd0044"


const handler = async function (event, context) {
    await axios.get("https://bellumserver.netlify.app/.netlify/functions/api/cuentas").then(async function (response1) {
        if (response1.status == 200) {
            let contador = 0
            for (let cuenta in response1.data) {
                contador++
                console.log(response1.data[cuenta])
                await axios.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + response1.data[cuenta]["puuid_riot"] + "?api_key=" + API).then(async function (response2) {
                    if (response1.data[cuenta]["invocador"] != response2.data["name"]) {
                        await axios.put("https://bellumserver.netlify.app/.netlify/functions/api/cambiarnombreinvocador", { idCuenta: response1.data[cuenta]["id_cuenta"], invocador: response2.data["name"] }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } })
                    }
                })
            }
        }
    })
};

exports.handler = schedule("* 1 * *", handler);