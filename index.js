// import schedule from 'node-schedule'
// import axios from 'axios'

// import { Webhook } from 'discord-webhook-node';
// const hook = new Webhook("https://discord.com/api/webhooks/1117244669148024953/kYof2ZGML7JOG3qqw0z-1sLJOeN3sgElCOZ1wWvBSIdyT11dTqF-xB88w1n6ykhu14DW");

// const API = "RGAPI-9235e795-5cdc-4331-8434-dca998ab6c34"

// //Actualizador de rango
// schedule.scheduleJob('* * */12 * * *', () => {
//     var date = new Date();
//     date = date.getUTCFullYear() + '-' +
//         ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
//         ('00' + date.getUTCDate()).slice(-2) + ' ';

//     axios.get("https://bellumserver.netlify.app/.netlify/functions/api/cuentas").then(function (response1) {
//         if (response1.status == 200) {
//             let contador = 0
//             for (let cuenta in response1.data) {
//                 contador++
//                 axios.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + response1.data[cuenta]["id_riot"] + "?api_key=" + API).then(function (response2) {
//                     if (response2.data[0]["queueType"] == "RANKED_SOLO_5x5") {
//                         axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[0]["tier"], rango: response2.data[0]["rank"], lps: response2.data[0]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } })
//                     } else if (response2.data[1]["queueType"] == "RANKED_SOLO_5x5") {
//                         axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[1]["tier"], rango: response2.data[1]["rank"], lps: response2.data[1]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } })
//                     } else if (response2.data[2]["queueType"] == "RANKED_SOLO_5x5") {
//                         axios.post("https://bellumserver.netlify.app/.netlify/functions/api/actualizarrango", { idCuenta: response1.data[cuenta]["id_cuenta"], division: response2.data[2]["tier"], rango: response2.data[2]["rank"], lps: response2.data[2]["leaguePoints"], fecha: date }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } })
//                     }
//                 })
//             }
//             hook.send("Actualizados rangos de " + contador + " invocadores")
//         } else {
//             hook.send("Fallo en la conexión. <@286402429258301440>")
//         }
//     })
// })

// //Actualizador de nombres
// schedule.scheduleJob('*/2 * * * * *', () => {
//     console.log("heys")
// })