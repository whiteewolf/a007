import { Command } from 'discord-akairo';
import { Message, User } from 'discord.js';
import { MessageEmbed } from 'discord.js';

export default class BlacklistedCommand extends Command {
    public constructor() {
        super('blacklisted', {
            aliases: ['blacklisted'],
            category: 'Owner',
            description: {
                content: "Gets all blacklisted users",
                examples: [":?blacklisted"],
                usages: ""
            },
            ratelimit: 3,
            ownerOnly: false,
            args: [{
                id: 'user',
                type: (_, str) => {
                    const user = this.client.users.fetch(str).catch(() => null)
                    if (!user) return null;
                    return user;
                },
                // prompt: {
                //     start: (message: Message) => `${message.author} Please specify a User ID`,
                //     retry: (message: Message) => `${message.author} Please specify a **VALID** User ID`
                // }
            }
            ],
        });
    }

    public exec(message: Message, { user }: { user: User }): any {
        let list = this.client.settings.get("global", "user.blacklisted", []);
        let embed = new MessageEmbed()
            .setColor("DARK_BLUE")
        list.forEach(list => {
            embed.addField(`User ID's`, list.user.id)
        });
    }
}