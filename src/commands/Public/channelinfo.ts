import { Command } from "discord-akairo";
import { MessageEmbed, Message } from "discord.js";

export default class ChannelInfoCommand extends Command {
    public constructor() {
        super("channelinfo", {
            aliases: ["channelinfo", "chi"],
            category: "Public",
            description: {
                content: "Shows the channel info",
                examples: [":?channelinfo #general"],
                usages: "<channel name | id>"
            },
            args: [{ 
                id: 'one', type: 'string', match: 'content', default: null, 
                    prompt: {
                        start: `Please mention a channel`,
                        retry: `Please mention a channel`,    
                    } 
            }],
            ratelimit: 3
        });
    }
    public async exec(message, args : Message) {
        let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.channel;

        // define the channel types
        let types = { 
          dm: 'Direct Messages', 
          text: 'Text Channel', 
          voice: 'Voice Channel', 
          category: 'Category', 
          news: 'News Channel',
          store: 'Store Channel',
          unknown: 'Unknown'
        };
        
        // make an embed
        let embed = new MessageEmbed()
          .setColor('DARK_BLUE')
          .setAuthor(`Channel Info | ${channel.name}`, message.guild.iconURL())
          .addField('Channel Name', `\`${channel.name}\``, true)
          .addField('Channel ID', `\`${channel.id}\``, true)
          .addField('Channel Type', `\`${types[channel.type]}\``, true)
          .addField('Channel Created At', `\`${new Date(channel.createdAt).toLocaleString('en-GB')}\``)
          .setFooter(`</> Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
        
        // send the embed
        message.channel.send({ embed });
    }
}