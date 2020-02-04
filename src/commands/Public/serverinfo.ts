import { Command } from "discord-akairo";
import { MessageEmbed, Message } from "discord.js";

export default class ServerinfoCommand extends Command {
    public constructor() {
        super("serverinfo", {
            aliases: ["serverinfo", "si"],
            category: "Public",
            description: {
                content: "Shows your server info",
                examples: ["serverinfo"],
                usages: "serverinfo"
            },
            ratelimit: 2
        });
    }
    public exec(message: Message) {
        let serverBanner = new MessageEmbed()
            .setColor("DARK_BLUE")
            .setImage(message.guild.bannerURL())
        let siembed = new MessageEmbed()
            .setColor("DARK_BLUE")
            .setThumbnail(message.guild.iconURL())
            // .setImage(message.guild.bannerURL({ size: 2048 }))
            .addField(`Server Name:`, message.guild.name, true)
            .addField(`Server ID:`, message.guild.id, true)
            .addField(`Server Created:`, message.guild.createdAt.toLocaleString('en-GB'), true)
            .addField(`Server AFK Channel`, message.guild.afkChannel ? message.guild.afkChannel : "Not Set", true)
            .addField(`Server Owner:`, message.guild.owner, true)
            .addField(`Server Boosts:`, message.guild.premiumSubscriptionCount, true)
            .addField("Server Total / Humans / Bots:", `${message.guild.members.size.toLocaleString()} / ${message.guild.members.filter(member => !member.user.bot).size.toLocaleString()} /  ${message.guild.members.filter(member => member.user.bot).size.toLocaleString()}`)
            .addField(`Server Channels: Text / Voice:`, `${message.guild.channels.filter(f => f.type == 'text').size} / ${message.guild.channels.filter(f => f.type == 'voice').size}`)
            .addField("Server Region:", `${message.guild.region}`, true)
            .addField(`Server Tier:`, message.guild.premiumTier, true)
            .addField(`Server Partnered:`, `${message.guild.partnered ? "Yes" : "No"}`, true)
            .addField(`Server Vanity URL:`, `${message.guild.vanityURLCode ? message.guild.vanityURLCode : "None"}`, true)
            .addField(`Server Roles:`, message.guild.roles.map(e => e).filter(f => f.name !== '@everyone').join(", "))
            .addField(`Server Features:`, `\`\`\`${message.guild.features[0] ? message.guild.features.join(", ") : "No Features Achieved!"}\`\`\``)
            .setFooter(`To view server banner type \`:?serverbanner\``)
        message.util.send(siembed)
    }
}