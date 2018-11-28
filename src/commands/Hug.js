import Command from '../app/Command';
import { Message } from 'discord.js';

export default class Hug extends Command {
    constructor() {
        super("hug")
    }

    /**
     * 
     * @param {Message} message 
     * @returns {Boolean} bool
     */
    isMatch(message){
        if(this.getMemberFirst() == null){
            let embed = this.creatEmbed()
            .setImage("https://media.giphy.com/media/3LGQOIQfV9xzJXwXZi/giphy.gif")
            .setColor("#778ca3")
            .setDescription( + "se fait un câlin seul(e)");
            message.channel.send(embed)
            return false;        
        } else return true;
    }

    /**
     * 
     * @param {Message} message 
     */
    action(message){
        let member = this.getMemberFirst()
        let msg = [" fait un câlin à ", " tombe dans les bras de ", " prend dans ses bras ", " se colle à ", " se jette sur "]
        let msgr = Math.floor(Math.random() * msg.length)
        var images = []
        images.push("https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif", "https://media1.tenor.com/images/87feeff9cc8cf5c207081d136bc20522/tenor.gif?itemid=12879962")
        images.push("https://media.giphy.com/media/2A8wpqmaiM3bBWgNq8/giphy.gif")
        images.push("https://media.giphy.com/media/xUmU6i3QSuAoaXuqHV/giphy.gif")
        images.push("https://media.giphy.com/media/Qf6lspOy5FTGRiPFd2/giphy.gif")
        images.push("https://media.giphy.com/media/u47DKkWjepxPOIjcrY/giphy.gif")
        images.push("https://media.giphy.com/media/TDuWdoURycd9KUTIqZ/giphy.gif")
        images.push("https://media.giphy.com/media/3kHz1pSYGjPurmnCcs/giphy.gif")
        images.push("https://media.giphy.com/media/lpVUezAPBtmb8AEvr6/giphy.gif")
        images.push("https://media.giphy.com/media/w85PPjj9TqyM0lDl53/giphy.gif")
        images.push("https://media.giphy.com/media/4VU9CtgtcW0PlgF8ID/giphy.gif")
        images.push("https://media.giphy.com/media/2cehTEZeWHJGt1joxm/giphy.gif")
        images.push("https://media.giphy.com/media/2fNJEZjWL7vpzKyyqS/giphy.gif")
        images.push("https://media.giphy.com/media/25IjD0lzTF2Gr4QLDe/giphy.gif")
        images.push("https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif", "https://media1.tenor.com/images/a8c546a034a97b22509723dcd2b50fd2/tenor.gif?itemid=5659915")
        images.push("https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif?itemid=7324587", "https://media1.tenor.com/images/1f7b0ceb53e128a6d9f4d39cef074d93/tenor.gif?itemid=11098325", "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589", "https://media1.tenor.com/images/09005550fb8642d13e544d2045a409c5/tenor.gif?itemid=7883854", "https://media1.tenor.com/images/cd0d06e057bf6a01cd5f9bb5d7971b08/tenor.gif?itemid=5662307")
        var imager = Math.floor(Math.random() * images.length)
        let embed = this.creatEmbed()
        .setImage(images[imager])
        .setColor("#eb3b5a")
        .setDescription(this.getAuthor().toString() + msg[msgr] + member.toString())
        .setTitle(images[imager])
        message.channel.send(embed);
    }



    parse(token){
        super.parse(token)
    }
};
