import Command from '../app/Command';
import { Message } from 'discord.js';

export default class Empty extends Command {
    constructor() {
        super("ChangeMe")
    }

    /**
     * 
     * @param {Message} message 
     * @returns {Boolean} bool
     */
    isMatch(message){
        return false;
    }

    /**
     * 
     * @param {Message} message 
     */
    action(message){

    }



    parse(token){
        super.parse(token)
    }
};
