import { Command } from "discord-akairo";
import { MessageEmbed, Message } from "discord.js";

export default class AvatarCommand extends Command {
    public constructor() {
        super("avatar", {
            aliases: ["avatar", "av", "pfp"],
            category: "Public",
            description: {
                content: "Displays your or someone else's avatar",
                examples: [":?avatar Host"],
                usages: "<text>"
            },
            args: [{
                id: 'member', type: 'string', match: 'content', default: null,
                // prompt: {
                //     start: `Please mention a member`,
                //     retry: `Please mention a member`,
                // }
            }],
            ratelimit: 2
        });
    }
    public async exec(message, args: Message) {
        function resolveMember(member) {
            if (!member) return null;
            return message.guild.members.get(member) || message.guild.members.find(m => {
                let match = member.match(/<@!?(\d{17,19})>/);
                if (match && m.id === match[1]) return true;
                return m.displayName.toLowerCase().includes(member.toLowerCase()) || m.user.username.toLowerCase().includes(member.toLowerCase());
            });
        }
        let member = await message.mentions.users.first()
            || resolveMember(args[0])
            || message.author;
        let pfp = new MessageEmbed()
            // .setAuthor(this.client.user.displayAvatarURL())
            .setImage(member.displayAvatarURL({ size: 2048 }))
        message.util.send(pfp)

    }
}