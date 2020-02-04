"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class HelpCommand extends discord_akairo_1.Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands'],
            category: 'Public',
            description: {
                content: "Shows the commands",
                examples: ["h", "cmds"],
                usages: "help"
            },
            ratelimit: 3,
            cooldown: 4000,
            args: [{
                    id: 'command',
                    type: 'commandAlias',
                    match: 'content'
                }]
        });
    }
    exec(message, { command }) {
        if (!command) {
            const embed = new discord_js_1.MessageEmbed();
            this.handler.categories.forEach((cm, category) => {
                const directories = cm.filter(cmd => cmd.category === cm).size;
                let mappedOut = cm.map(x => `\`${x}\``).join(', ');
                // q   if (category === 'Owner' || category === 'Owner' && !this.client.ownerID.includes(message.author.id)) mappedOut = '`No commands available...`'               
                embed.addField(`**${category} Commands** | ${directories}`, mappedOut)
                    .setColor("DARK_BLUE")
                    // .setTitle(`Total Commands: ${this.client.}`)
                    .setAuthor(`Help Menu | ${message.guild.name}`, message.guild.iconURL());
            });
            return message.util.send({ embed });
        }
        else if (command) {
            const cmd = command;
            const embed = new discord_js_1.MessageEmbed()
                .setColor("DARK_BLUE")
                .setAuthor(`Help: ${cmd.aliases[0]} | ${message.guild.name}`, message.guild.iconURL())
                .setDescription(`
                    **Command Name**: \`${cmd.aliases[0]}\`
                    **Command Aliases**: ${`${cmd.aliases.map(x => `\`${x}\``).join(', ') || 'No Aliases'}`}
                    **Command Ratelimit**: \`${cmd.ratelimit}\`
                    **Command Description**: ${cmd.description.content ? cmd.description.content : 'No Description Provided...'}
                    ==============================================
                    **User Permissions:**: ${cmd.userPermissions ? cmd.userPermissions : 'None'}
                    **Bot Permissions:**: ${cmd.clientPermissions ? cmd.clientPermissions : 'None'}
                    **Owner Only:** ${cmd.ownerOnly ? "Yes" : "No"}
                    **Command Examples:**:\n\`\`\`${cmd.description.examples.join('\n') || cmd.aliases[0]}\`\`\`
                `)
                .setFooter(`Syntax: [required] : <optional>`);
            return message.util.send({ embed });
        }
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvaGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFFbkQsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFDN0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxDQUFDO29CQUNILEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxjQUFjO29CQUNwQixLQUFLLEVBQUUsU0FBUztpQkFDbkIsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRTtRQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUU3QyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQy9ELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNsRCxvS0FBb0s7Z0JBQ3BLLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLGlCQUFpQixXQUFXLEVBQUUsRUFBRSxTQUFTLENBQUM7cUJBQ2pFLFFBQVEsQ0FBQyxXQUFXLENBQUM7b0JBQ3RCLCtDQUErQztxQkFDOUMsU0FBUyxDQUFDLGVBQWUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7WUFFaEYsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUV2QzthQUFNLElBQUksT0FBTyxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7aUJBQzNCLFFBQVEsQ0FBQyxXQUFXLENBQUM7aUJBQ3JCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNyRixjQUFjLENBQUM7MENBQ1UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7MkNBQ2IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxFQUFFOytDQUM1RCxHQUFHLENBQUMsU0FBUzsrQ0FDYixHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDRCQUE0Qjs7NkNBRWxGLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU07NENBQ25ELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNO3NDQUM1RCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7b0RBQ2QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN4RixDQUFDO2lCQUNELFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1lBQ2pELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUNKO0FBekRELDhCQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignaGVscCcsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogWydoZWxwJywgJ2NvbW1hbmRzJ10sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnUHVibGljJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2hvd3MgdGhlIGNvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiaFwiLCBcImNtZHNcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2FnZXM6IFwiaGVscFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgY29vbGRvd246IDQwMDAsXHJcbiAgICAgICAgICAgIGFyZ3M6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbW1hbmRBbGlhcycsXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogJ2NvbnRlbnQnXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBjb21tYW5kIH0pIHtcclxuICAgICAgICBpZiAoIWNvbW1hbmQpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYXRlZ29yaWVzLmZvckVhY2goKGNtLCBjYXRlZ29yeSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gY20uZmlsdGVyKGNtZCA9PiBjbWQuY2F0ZWdvcnkgPT09IGNtKS5zaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcHBlZE91dCA9IGNtLm1hcCh4ID0+IGBcXGAke3h9XFxgYCkuam9pbignLCAnKVxyXG4gICAgICAgICAgICAgICAgLy8gcSAgIGlmIChjYXRlZ29yeSA9PT0gJ093bmVyJyB8fCBjYXRlZ29yeSA9PT0gJ093bmVyJyAmJiAhdGhpcy5jbGllbnQub3duZXJJRC5pbmNsdWRlcyhtZXNzYWdlLmF1dGhvci5pZCkpIG1hcHBlZE91dCA9ICdgTm8gY29tbWFuZHMgYXZhaWxhYmxlLi4uYCcgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVtYmVkLmFkZEZpZWxkKGAqKiR7Y2F0ZWdvcnl9IENvbW1hbmRzKiogfCAke2RpcmVjdG9yaWVzfWAsIG1hcHBlZE91dClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJEQVJLX0JMVUVcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0VGl0bGUoYFRvdGFsIENvbW1hbmRzOiAke3RoaXMuY2xpZW50Ln1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRBdXRob3IoYEhlbHAgTWVudSB8ICR7bWVzc2FnZS5ndWlsZC5uYW1lfWAsIG1lc3NhZ2UuZ3VpbGQuaWNvblVSTCgpKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoeyBlbWJlZCB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNtZCA9IGNvbW1hbmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJEQVJLX0JMVUVcIilcclxuICAgICAgICAgICAgICAgIC5zZXRBdXRob3IoYEhlbHA6ICR7Y21kLmFsaWFzZXNbMF19IHwgJHttZXNzYWdlLmd1aWxkLm5hbWV9YCwgbWVzc2FnZS5ndWlsZC5pY29uVVJMKCkpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFxyXG4gICAgICAgICAgICAgICAgICAgICoqQ29tbWFuZCBOYW1lKio6IFxcYCR7Y21kLmFsaWFzZXNbMF19XFxgXHJcbiAgICAgICAgICAgICAgICAgICAgKipDb21tYW5kIEFsaWFzZXMqKjogJHtgJHtjbWQuYWxpYXNlcy5tYXAoeCA9PiBgXFxgJHt4fVxcYGApLmpvaW4oJywgJykgfHwgJ05vIEFsaWFzZXMnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgKipDb21tYW5kIFJhdGVsaW1pdCoqOiBcXGAke2NtZC5yYXRlbGltaXR9XFxgXHJcbiAgICAgICAgICAgICAgICAgICAgKipDb21tYW5kIERlc2NyaXB0aW9uKio6ICR7Y21kLmRlc2NyaXB0aW9uLmNvbnRlbnQgPyBjbWQuZGVzY3JpcHRpb24uY29udGVudCA6ICdObyBEZXNjcmlwdGlvbiBQcm92aWRlZC4uLid9XHJcbiAgICAgICAgICAgICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICoqVXNlciBQZXJtaXNzaW9uczoqKjogJHtjbWQudXNlclBlcm1pc3Npb25zID8gY21kLnVzZXJQZXJtaXNzaW9ucyA6ICdOb25lJ31cclxuICAgICAgICAgICAgICAgICAgICAqKkJvdCBQZXJtaXNzaW9uczoqKjogJHtjbWQuY2xpZW50UGVybWlzc2lvbnMgPyBjbWQuY2xpZW50UGVybWlzc2lvbnMgOiAnTm9uZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgKipPd25lciBPbmx5OioqICR7Y21kLm93bmVyT25seSA/IFwiWWVzXCIgOiBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgKipDb21tYW5kIEV4YW1wbGVzOioqOlxcblxcYFxcYFxcYCR7Y21kLmRlc2NyaXB0aW9uLmV4YW1wbGVzLmpvaW4oJ1xcbicpIHx8IGNtZC5hbGlhc2VzWzBdfVxcYFxcYFxcYFxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgIC5zZXRGb290ZXIoYFN5bnRheDogW3JlcXVpcmVkXSA6IDxvcHRpb25hbD5gKVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoeyBlbWJlZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=