class NewAnime{
    constructor(bot, chat_id, name, description, photo){
        this.name = name;
        this.description = description
        this.photo = photo
        this.chat_id = chat_id
        this.bot = bot
    }
    sendAnime(){
        bot.sendPhoto(chat_id,
            
            photo,
            {caption: `*Название* : ${this.name} \n  ${this.description}`, parse_mode: 'Markdown'}
            )
    }
}


module.exports = NewAnime;
