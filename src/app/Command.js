import * as discord from 'discord.js';
import App from './App';


export default class Command {
    constructor(name){
        this.name = name;
        this.app = App;
        this.message = null;
        this.client = null;
        this.label = null;
        this.app.addCommand(this)
    }

    parse(token){
        if(this.label == null || this.client == null){
            this.client = token["c"]
            this.label = token["l"]
        }

        this.message = token["m"]
        if(this.message.content.startsWith(this.label+ this.name)){
            if(this.isMatch(this.message)){
                this.action(this.message)
            }
        }
    }

    /**
     * 
     * @param {discord.Message} message 
     * @return {Boolean} bool
     */
    isMatch(message){

    }

    /**
     * 
     * @param {discord.Message} message 
     */
    action(message){

    }

    /**
     * @return {String} message without the label and commandName
     */
    getMessageOut(){
        return this.message.content.replace(this.label + this.name, "");
    }

    /**
     * @return {discord.Message} 
     */
    getMessage(){
        return this.message;
    }

    /**
     * @return {discord.Channel}
     */
    getChannel(){
        return this.message.channel;
    }

    /**
     * @return {discord.User} author
     */
    getAuthor(){
        return this.message.author;
    }

    /**
     * @return {discord.User} client
     */
    getClien(){
        return this.client
    }

    /**
     * @return {discord.GuildMember} member
     */
    getMemberFirst(){
        let member = this.message.mentions.members.first()
        if(typeof member == "undefined"){
            return null;
        }
        return member;
    }

    /**
     * @return {discord.RichEmbed} embed
     */
    creatEmbed(){
        return new discord.RichEmbed()
    }

};
