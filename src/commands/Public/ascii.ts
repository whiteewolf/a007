import { Command } from "discord-akairo";
import { Message } from "discord.js";
import figlet from "figlet"

export default class AsciiArtCommand extends Command {
    public constructor() {
        super("ascii", {
            aliases: ["ascii", "asc-art"],
            category: "Public",
            description: {
                content: "Displays a text into ascii-art",
                examples: [":?ascii Hello"],
                usages: "<text>"
            },
            args: [{
                id: 'one', type: 'string',
                prompt: {
                    start: `Please provide some text`,
                }
            }],
            ratelimit: 2
        });
    }
    public exec(message: Message, { text }: { text: string }): any {
        try {
            if (!text) return message.reply('Please specify texts for the ascii conversion');
            figlet.text(text, {
                font: "ANSI Shadow",
                horizontalLayout: "default",
                verticalLayout: "default"
            }, function (err, data) {
                if (err) {
                    console.log("Somthing Went Wrong...")
                    console.dir(err)
                    return;
                }
                message.channel.send(data, {
                    code: "md"
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
}