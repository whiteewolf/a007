import { Command, version } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';

export default class KickCommand extends Command {
    public constructor() {
        super('kick', {
            aliases: ['kick', "k"],
            category: 'Moderation',
            description: {
                content: "Kicks a user from the server",
                examples: [":?kick @User <reason>"],
                usages: "<@user> <reason>"
            },
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            ratelimit: 3,
            args: [{
                id: 'member',
                type: 'member',
                // match: 'content'
            }]
        });
    }

    public exec(message, args: Message) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.util.send("You do not have permission to perform this command!")

        let banMember = message.mentions.members.first() || message.guild.members.fetch(args[0])
        if (!banMember) return message.util.send("Please provide a user to ban!")

        if (!message.guild.me.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.util.send("I dont have permission to perform this command")

        banMember.send(`Hello, you have been banned from ${message.guild.name}`).then(() =>
            banMember.kick(banMember)).catch(err => console.log(err))

        message.util.send(`**${banMember.user.tag}** has been banned`).then(m => m.delete(5000))

        let embed = new MessageEmbed()
            .setColor("RED")
            // .setTitle(`[ Case ${casing} ]`)
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
            .addField("Moderation:", "Ban", true)
            .addField("Mutee:", banMember.user.username, true)
            .addField("Moderator:", message.author.username, true)
            // .addField("Reason:", reason)
            .addField("Date:", message.createdAt.toLocaleString(), true)
        message.util.send(embed)
    }
}