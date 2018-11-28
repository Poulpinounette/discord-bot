import Command from '../app/Command';
import { Message } from 'discord.js';

export default class Empty extends Command {
    constructor() {
        super("kiss")
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
        var msg = [" embrasse ", " colle ses lèvres à "]
        var aleatoire = Math.floor(Math.random() * msg.length)
        var images = []
        images.push("https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif")
        images.push("https://media.giphy.com/media/Z2sivLSfN8FH2/giphy.gif")
        images.push("https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif")
        images.push("https://media.giphy.com/media/tZmWHlQT36oZW/giphy.gif")
        images.push("https://media.tenor.com/images/dc16e8164f2686c786a1091df47c9f3c/tenor.gif", "https://media.tenor.com/images/a496f6c08cdf01c97365e917d7a229dc/tenor.gif", "https://media1.tenor.com/images/bbdab4bf04291719f2714e433a0e8158/tenor.gif?itemid=4941205", "https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557")
        images.push("https://media1.tenor.com/images/8c73673bce3a7ee43611dbef708373b7/tenor.gif?itemid=4874602", "https://media.tenor.com/images/2f65e7c8862af5e49fbc7b2a75ea3538/tenor.gif", "https://media1.tenor.com/images/4fa475b07f614bafec7fdcedd3bcb54e/tenor.gif?itemid=12050959", "https://media.tenor.com/images/f5761223e8678320d177078495c9839a/tenor.gif", "https://media1.tenor.com/images/a2332f49f11038faa1a76b049d5d4818/tenor.gif?itemid=5666774", "https://media1.tenor.com/images/38cb1aa7b691941199c00b94f1dcb562/tenor.gif?itemid=12910425", "https://media1.tenor.com/images/cd35415d623fb7e4801ba214ab2d98a6/tenor.gif?itemid=12912330")
        var ale = Math.floor(Math.random() * images.length)
        var embed = this.creatEmbed()
            .setImage( images[ale] )
            .setColor("#eb3b5a")
            .setDescription(message.member.toString() + msg[aleatoire] + membre.toString())
            .setTitle(images[ale])
        message.channel.send(embed)
    }



    parse(token){
        super.parse(token)
    }
};
