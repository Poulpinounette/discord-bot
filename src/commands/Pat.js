import Command from '../app/Command';
import { Message } from 'discord.js';

export default class Empty extends Command {
    constructor() {
        super("pat")
    }

    /**
     * 
     * @param {Message} message 
     * @returns {Boolean} bool
     */
    isMatch(message){
        if(this.getMemberFirst() == null){
            message.reply("Tu dois m'entionner quelqu'un pour faire cette commande").catch(console.error)            
            return false;
        } else {
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {Message} message 
     */
    action(message){
        var membre = this.getMemberFirst()
        var msg = ["fait un patpat à "]
        var images = []
        images.push("https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif", "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif", "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif", "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif")
        images.push("https://media1.tenor.com/images/60991d021f0f2d4f065ac9b4f00948dc/tenor.gif?itemid=11728232", "https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495", "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932", "https://media.tenor.com/images/848178182a43658d02500825bf8f41d7/tenor.gif")
        var ale = Math.floor(Math.random() * images.length)
        var embed = this.creatEmbed()
            .setImage( images[ale] )
            .setColor("#eb3b5a")
            .setDescription(message.member.toString() + msg[0] + membre.toString())
            .setTitle(images[ale])
        message.channel.send(embed)
    }



    parse(token){
        super.parse(token)
    }
};
