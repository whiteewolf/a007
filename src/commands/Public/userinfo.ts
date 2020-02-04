import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class UserInfoCommand extends Command {
    public constructor() {
        super("userinfo", {
            aliases: ["userinfo", "ui"],
            category: "Public",
            description: {
                content: "Checks the ping of the latency to the API",
                examples: ["userinfo", "ui"],
                usages: "userinfo"
            },
            ratelimit: 3
        });
    }
    public exec(message: Message) {
        const status = {
            online: "<:gonline:671751463688601602> Online",
            dnd: "<:gdnd:671751511382032385> Do Not Disturb",
            idle: "<:gidle:671751492557865000> Idle",
            offline: "<:goffline:674039918904999977> Offline"
        }
        console.log(message.author.presence.clientStatus)
        let uiembed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail(message.author.displayAvatarURL())
            .addField(`Username:`, message.author.username, true)
            .addField(`User ID:`, message.author.id, true)
            .addField(`User Discriminator:`, message.author.discriminator, true)
            .addField(`User Created:`, message.author.createdAt.toLocaleString('en-GB'), true)
            .addField(`User Boosted:`, `${message.member.premiumSince ? message.member.premiumSince : "Not Boosted"}`, true)
            .addField(`User Joined`, message.member.joinedAt.toLocaleString('en-GB'), true)
            .addField(`User Bot:`, `${message.author.bot ? "Yes" : "No"}`, true)
            .addField(`User Nickname`, `${message.member.nickname || "None"}`, true)
            // .addField(`User Device(s)`, `${message.author.presence.clientStatus}`, true)
            .addField(`User Status Info:`, `**Status**: ${status[message.author.presence.status]}\n**Activity**: ${message.author.presence.activities.join(",\n") || "None"}`, true)
            .addField(`User Permissions`, `\`\`\`${message.member.permissions.toArray().join(", ")}\`\`\``)
            .addField(`User Roles:`, message.member.roles.map(r => r).filter(f => f.name !== '@everyone').join(", "))
        message.util.send(uiembed);
    }
}