const TelegramApi = require('node-telegram-bot-api')
var NewAnime = require('./modules/newAnime')


const token = '5814757867:AAG1OCCXqJ3HXalkb4sJlnOIknG2VTRJtG0';
const bot = new TelegramApi(token,{polling: true});






bot.on('message',  msg => {
    const text = msg.text;
    const chat_id = msg.chat.id;
    if(text === '/start'){
      bot.sendVideo(chat_id, 'BAACAgIAAxkBAAN2Y_56d4Su65NP3SNsSsBMbXxVCfgAAl4jAAIHsvhLSyGOHckmDQQuBA', {caption: "Sent by: "} ) 
    }
    console.log(msg)
    if(text === '/photo'){
      var evangelion = new NewAnime(bot, chat_id, "Evangelion", "2015 год, Токио-3. 15 лет назад произошёл Второй удар, в результате чего Антарктида растаяла", 'AgACAgIAAxkBAAOjZHmnSuTM-tmSbl2qmJATryGI6bQAArzGMRtoqdFLA3HlzZwak2YBAAMCAAN4AAMvBA')
      evangelion.sendAnime()
    }
})