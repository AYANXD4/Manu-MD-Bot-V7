//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    JACK-XD  BOT                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : JACK-XD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@PAKCYBERTEAM99
//  * @description : JACK-XD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @PKJACK
//WhatsApp: +3584573989422
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG : process.env.ALIVE_IMG || "https://whatsapp.com/channel/0029VadP2Cu59PwbTfRnE11i",
ALIVE_MSG : process.env.ALIVE_MSG || "JACK XD 24/7",
MENU_IMG : process.env.MENU_IMG || "https://whatsapp.com/channel/0029VadP2Cu59PwbTfRnE11i",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
MENU: process.env.MENU || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING : process.env.AUTO_TYPING || "true",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true",
DELCHAT : process.env.DELCHAT || "pm",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
