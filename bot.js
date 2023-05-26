const TelegramApi = require('node-telegram-bot-api')


const token = '5814757867:AAG1OCCXqJ3HXalkb4sJlnOIknG2VTRJtG0';
const bot = new TelegramApi(token,{polling: true});

bot.on('message',  msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text === '/start'){
      bot.sendVideo(chatId, 'BAACAgIAAxkBAAN2Y_56d4Su65NP3SNsSsBMbXxVCfgAAl4jAAIHsvhLSyGOHckmDQQuBA', {caption: "Sent by: "} ) 
    }
})