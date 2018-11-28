import Command from '../app/Command';
import { Message } from 'discord.js';

export default class Empty extends Command {
    constructor() {
        super("bn")
    }

    /**
     * 
     * @param {Message} message 
     * @returns {Boolean} bool
     */
    isMatch(message){
        return true;
    }

    /**
     * 
     * @param {Message} message 
     */
    action(message){
        var msg = [" part se coucher il(elle) vous dit bonne nuit ", " est parti(e) pour une bonne nuit de someil ", " est parti(e) pour une bonne nuit de someil "]
        msg.push(" est parti(e) pour une bonne nuit de someil ")
        msg.push(" est déjà parti compter les moutons ")
        msg.push(" chuuut ne le(la) révéiller pas demain il(elle) a une grosse journée de travail ")
        msg.push(" vous souhaite une bonne nuit ")
        msg.push(" est parti(e) au fond de ses drap ")
        msg.push(" s'endort debout il est temps pour lui(elle) d'aller se coucher ")
        var aleatoire = Math.floor(Math.random() * msg.length)
        var images = []
        images.push("https://media.giphy.com/media/40a35B9FrdgIWZuMzm/giphy.gif", "https://media.giphy.com/media/2Y7m0VNRsvcMItVzty/giphy.gif", "https://media.giphy.com/media/4072gdroNKzVN21Xgv/giphy.gif", "https://media.giphy.com/media/fjxOIPP3JwnBneiReU/giphy.gif", "https://media.giphy.com/media/lIUaE4biLYxtiNobRl/giphy.gif")
        images.push("https://cdn.discordapp.com/attachments/423134940876636180/512413101728202762/Sleep.gif", "https://media.giphy.com/media/Y4qzbSTwprWVRIyZoc/giphy.gif", "https://media.giphy.com/media/21QJ47gUcwxqbUK6k6/giphy.gif", "https://media.giphy.com/media/1IdgpWwMFqedPlBlUE/giphy.gif", "https://media.giphy.com/media/9G1oDle3Dab84wZ9q6/giphy.gif")
        images.push("https://media.giphy.com/media/1j8nQsJmeXv18mJHbZ/giphy.gif", "https://media.giphy.com/media/7OXm7uDojGavUSB0hQ/giphy.gif", "https://media.giphy.com/media/3WuYqchrvNUSqqbFWq/giphy.gif", "https://media.giphy.com/media/5kF1QQNZ8NXwFV96Ba/giphy.gif", "https://media.giphy.com/media/ZgRy29G28vLOUvBfWk/giphy.gif")
        var ale = Math.floor(Math.random() * images.length)
        var embed = this.creatEmbed()
            .setImage( images[ale] )
            .setColor("#8e44ad")
            .setDescription(message.member.toString() + msg[aleatoire] ) 
        message.channel.send(embed)
    }



    parse(token){
        super.parse(token)
    }
};
