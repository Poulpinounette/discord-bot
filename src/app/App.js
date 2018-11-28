import discord, { Message } from 'discord.js';
import Command from './Command';

class App {
    constructor(label){
        this.label = label;
        this.commands = [];
        this.client = new discord.Client()

        //
        this.client.on("ready", this.ready)
        this.client.on("message", (e) => this.message(e))
        this.client.on("error", console.error)        
    }


    ready(){
        console.log("login !");
    }


    /**
     * @param {Message} message 
     */
    message(message) {
        if(message.content.charAt(0) == this.label){
            
            let json = {l: this.label, m: message, c:this.client}
            this.commands.forEach(c => c.parse(json))
        }
    }

    run(){
        this.client.login(process.env.BOT_TOKEN)
    }

    /**
     * 
     * @param  {...Command} commands 
     */
    addCommand(...commands){
        commands.forEach(e => this.commands.push(e))
    }

};

let app = new App("$");
export default app;