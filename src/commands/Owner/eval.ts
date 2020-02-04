import { Command, version } from 'discord-akairo';
import { MessageEmbed, Message } from 'discord.js';
import { inspect } from "util";

export default class EvalCommand extends Command {
    public constructor() {
        super('eval', {
            aliases: ['eval', "e", "evaluate"],
            category: 'Owner',
            description: {
                content: "Evaluates a code",
                examples: [":?eval <code>"],
                usages: "<code>"
            },
            clientPermissions: [],
            userPermissions: [],
            ratelimit: 3,
            ownerOnly: true,
            args: [{
                id: 'code',
                match: 'content',
            }]
        });
    }

    public exec(message, {code}) {
        if(message.author.id == '473276250815856650' || message.author.id == '540219416726601739'){
            let inputembederr = new MessageEmbed()
            .setColor("RED")
            .setDescription(`Error: No code provided...`)
              try {
                  let evaluated = inspect(eval(code), {depth: 1});
                    if(message.content.includes('token')){
                    evaluated = 'Are u kidding me??? I dont have permissions from the owner to send my token'; 
            }
                  if (!code) {
                      return message.channel.send(inputembederr);
                  } else {
                      let hrStart = process.hrtime()
                      let hrDiff;
                      hrDiff = process.hrtime(hrStart);
                          let inputembed = new MessageEmbed()
            .setColor("GREEN")
            .addField(`:inbox_tray: Input:`, `\`\`\`js\n${code}\`\`\``, true)
            .addField(`:outbox_tray: Output:`, `\`\`\`javascript\n${evaluated}\n\`\`\``, true)
            // .addField(`Type Of:`, `\`\`\`ini\n${typeof evaluated}\n\`\`\``)
            .setFooter(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms`)
                      return message.util.send(inputembed)
                  }
                  
              } catch (e) {
                  return message.channel.send(`Error while evaluating: \`${e.message}\``);
              }
      
            } else {
              return message.reply("you are not the bot owner!").then(msg => msg.delete(5000))
            }
    }
}