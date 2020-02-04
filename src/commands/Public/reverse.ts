import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

export default class ReverseCommand extends Command {
    public constructor() {
        super('reverse', {
            aliases: ['reverse', "rev"],
            category: 'Public',
            description: {
                content: "Reverses a text",
                examples: [":?reverse Hello"],
                usages: "<sentence or word>"
            },
            ratelimit: 3,
            ownerOnly: false,
            args: [{
                id: 'content',
                type: "string",
                prompt: {
                    start: (message: Message): string => `${message.author} Please specify some text for me to reverse it...`
                }
            }
            ],
        });
    }

    public exec(message: Message, { content }: { content: string[] }): any {
        message.util.send(new MessageEmbed()
            .setColor("DARK_BLUE")
            .setDescription(content.reverse()))
    }
}