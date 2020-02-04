import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { MessageEmbed } from "discord.js";

export default class PingCommand extends Command {
    public constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public",
            description: {
                content: "Checks the ping of the latency to the API",
                examples: ["ping"],
                usages: "ping"
            },
            ratelimit: 3
        });
    }
    public exec(message: Message) {

        message.channel.send("Pinging...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
            let response = choices[Math.floor(Math.random() * choices.length)]
            let pingembed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response)
                .addField(`Bot Latency:`, `\`${ping}\`ms`, true)
                .addField(`API Latency:`, `\`${Math.round(this.client.ws.ping)}\`ms`, true)
                .addField(`Timestamp:`, `\`${message.createdAt.toLocaleString('en-GB')}\``, true)
            m.edit(pingembed)
        });
    }
}