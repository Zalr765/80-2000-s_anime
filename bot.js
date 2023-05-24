const TelegramApi = require('node-telegram-bot-api')


const ttoken = '5814757867:AAG1OCCXqJ3HXalkb4sJlnOIknG2VTRJtG0';
const bot = new TelegramApi(ttoken,{polling: true});
var YandexDisk = require('yandex-disk').YandexDisk;
var disk = new YandexDisk('y0_AgAAAAAXU80zAAj0IAAAAADYD5k6hYxMRMxcTVGFJHMMY6RqneTjk2s');
var vid1 = disk.exists('https://cloud-api.yandex.net/v1/disk/resources?path=app:/' ,cc => {console.log("2")})

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text === '/start'){
       bot.sendMessage(chatId, "Добро пожаловать в бота с аниме периода восьмедесятых по нулевые")
    }
})