import { Command, version } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';
import ms from "ms"

export default class BotInfoCommand extends Command {
    public constructor() {
        super('botinfo', {
            aliases: ['botinfo', "bi", 'stats'],
            category: 'Public',
            description: {
                content: "Shows the bot info",
                examples: ["stats", "bi"],
                usages: "botinfo"
            },
            ratelimit: 3,
            cooldown: 2000,
            args: [{
                id: 'command',
                type: 'commandAlias',
                match: 'content'
            }]
        });
    }

    public exec(message: Message) {
        function duration(ms) {
            const times = {
              day: Math.floor((ms / (1000 * 60 * 60 * 24))),
              hour: Math.floor((ms / (1000 * 60 * 60)) % 24),
              minute: Math.floor((ms / (1000 * 60)) % 60),
              second: Math.floor((ms / 1000) % 60),
              week: Math.floor((ms / (1000 * 60 * 60 * 24 * 7)))
            };
          
            let string = '';
          
              for ( const [key, value] of Object.entries(times) ) {
                if(value > 0) string += `${value} ${key}${value > 1 ? 's' : ''} `
              }
                return `\`${string}\``
          }
        let biembed = new MessageEmbed()
            .setColor("DARK_RED")
            .setThumbnail(this.client.user.displayAvatarURL())
            .addField(`Bot Name`, this.client.user.username, true)
            .addField(`Bot Discriminator`, this.client.user.discriminator, true)
            .addField(`Bot was born at`, this.client.user.createdAt.toLocaleString(), true)
            .addField(`Servers`, this.client.guilds.size, true)
            .addField(`Users`, this.client.users.size, true)
            .addField(`Channels`, this.client.channels.size, true)
            .addField(`Emojis`, this.client.emojis.size, true)
            .addField(`Prefix`, `:?`, true)
            .addField(`Owners`, `${["473276250815856650", "540219416726601739"].map(u => this.client.users.get(u).tag).join("\n")}`, true)
           .addField(`Uptime`, duration(this.client.uptime), true)
            // .addBlankField(true)
            // .addBlankField(true)
            // .addBlankField(true)
            .addField(`NodeJS`, process.version, true)
            .addField(`Discord-Akairo`, version, true)
            .addField(`Discord.JS`, `v12.0.0-dev`, true)
        message.util.send(biembed)
    }
}