import { schedule } from "@netlify/functions";
import axios from 'axios'

import { Webhook } from 'discord-webhook-node';
const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

const API = "RGAPI-9c89909e-770b-4acf-aaa6-9eb07f095247"


const handler = async function (event, context) {
    var date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + '';
    try {
        await axios.get("https://bellumserver.netlify.app/.netlify/functions/api/cuentas").then(async function (response1) {
            if (response1.status == 200) {
                let contador = 0
                for (let cuenta in response1.data) {
                    contador++
                    console.log(response1.data[cuenta])
                    await axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + response1.data[cuenta]["id_riot"] + "?api_key=" + API).then(async function (response2) {
                        console.log(response2.data)
                        if (response2.data[0]["queueType"] == "RANKED_SOLO_5x5") {
                            await axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[0]["tier"], rango: response2.data[0]["rank"], lps: response2.data[0]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                                console.log("bien añadido")
                            }).catch(function (e) {
                                console.log(e)
                            })
                        } else if (response2.data[1]["queueType"] == "RANKED_SOLO_5x5") {
                            console.log({ idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[0]["tier"], rango: response2.data[0]["rank"], lps: response2.data[0]["leaguePoints"], fecha: date })
                            await axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[1]["tier"], rango: response2.data[1]["rank"], lps: response2.data[1]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                                console.log("bien añadido")
                            }).catch(function (e) {
                                console.log(e)
                            })
                        } else if (response2.data[2]["queueType"] == "RANKED_SOLO_5x5") {
                            await axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[2]["tier"], rango: response2.data[2]["rank"], lps: response2.data[2]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                                console.log("bien añadido")
                            }).catch(function (e) {
                                console.log(e)
                            })
                        }
                    })
                }
            } else {
                hook.send("Fallo en la conexión. <@286402429258301440>")
            }
        })
    } catch (e) {
        hook.send("Fallo en la función. <@286402429258301440>")
        console.log(e)
    }

    try {
        await axios.delete("https://bellumserver.netlify.app/.netlify/functions/api/fixrango")
    } catch (e) {
        hook.send("Fallo en la función 2. <@286402429258301440>")
    }
};

exports.handler = schedule("5 */12 * * *", handler);