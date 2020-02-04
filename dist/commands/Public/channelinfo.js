"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ChannelInfoCommand extends discord_akairo_1.Command {
    constructor() {
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
    async exec(message, args) {
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
        let embed = new discord_js_1.MessageEmbed()
            .setColor('DARK_BLUE')
            .setAuthor(`Channel Info | ${channel.name}`, message.guild.iconURL())
            .addField('Channel Name', `\`${channel.name}\``, true)
            .addField('Channel ID', `\`${channel.id}\``, true)
            .addField('Channel Type', `\`${types[channel.type]}\``, true)
            .addField('Channel Created At', `\`${new Date(channel.createdAt).toLocaleString('en-GB')}\``)
            .setFooter(`</> Requested by: ${message.author.tag}`, message.author.displayAvatarURL());
        // send the embed
        message.channel.send({ embed });
    }
}
exports.default = ChannelInfoCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbGluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljL2NoYW5uZWxpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixrQkFBbUIsU0FBUSx3QkFBTztJQUNuRDtRQUNJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUMvQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsUUFBUSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxxQkFBcUI7YUFDaEM7WUFDRCxJQUFJLEVBQUUsQ0FBQztvQkFDSCxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSTtvQkFDdEQsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSwwQkFBMEI7d0JBQ2pDLEtBQUssRUFBRSwwQkFBMEI7cUJBQ3BDO2lCQUNSLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFjO1FBQ3JDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRTFHLDJCQUEyQjtRQUMzQixJQUFJLEtBQUssR0FBRztZQUNWLEVBQUUsRUFBRSxpQkFBaUI7WUFDckIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDM0IsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUNyQixTQUFTLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3BFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQ3JELFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQ2pELFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQzVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUM1RixTQUFTLENBQUMscUJBQXFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7UUFFMUYsaUJBQWlCO1FBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUEvQ0QscUNBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlRW1iZWQsIE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEluZm9Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJjaGFubmVsaW5mb1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImNoYW5uZWxpbmZvXCIsIFwiY2hpXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2hvd3MgdGhlIGNoYW5uZWwgaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcIjo/Y2hhbm5lbGluZm8gI2dlbmVyYWxcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2FnZXM6IFwiPGNoYW5uZWwgbmFtZSB8IGlkPlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFyZ3M6IFt7IFxyXG4gICAgICAgICAgICAgICAgaWQ6ICdvbmUnLCB0eXBlOiAnc3RyaW5nJywgbWF0Y2g6ICdjb250ZW50JywgZGVmYXVsdDogbnVsbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBgUGxlYXNlIG1lbnRpb24gYSBjaGFubmVsYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IGBQbGVhc2UgbWVudGlvbiBhIGNoYW5uZWxgLCAgICBcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlLCBhcmdzIDogTWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBjaGFubmVsID0gbWVzc2FnZS5tZW50aW9ucy5jaGFubmVscy5maXJzdCgpIHx8IG1lc3NhZ2UuZ3VpbGQuY2hhbm5lbHMuZ2V0KGFyZ3NbMF0pIHx8IG1lc3NhZ2UuY2hhbm5lbDtcclxuXHJcbiAgICAgICAgLy8gZGVmaW5lIHRoZSBjaGFubmVsIHR5cGVzXHJcbiAgICAgICAgbGV0IHR5cGVzID0geyBcclxuICAgICAgICAgIGRtOiAnRGlyZWN0IE1lc3NhZ2VzJywgXHJcbiAgICAgICAgICB0ZXh0OiAnVGV4dCBDaGFubmVsJywgXHJcbiAgICAgICAgICB2b2ljZTogJ1ZvaWNlIENoYW5uZWwnLCBcclxuICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnknLCBcclxuICAgICAgICAgIG5ld3M6ICdOZXdzIENoYW5uZWwnLFxyXG4gICAgICAgICAgc3RvcmU6ICdTdG9yZSBDaGFubmVsJyxcclxuICAgICAgICAgIHVua25vd246ICdVbmtub3duJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbWFrZSBhbiBlbWJlZFxyXG4gICAgICAgIGxldCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgLnNldENvbG9yKCdEQVJLX0JMVUUnKVxyXG4gICAgICAgICAgLnNldEF1dGhvcihgQ2hhbm5lbCBJbmZvIHwgJHtjaGFubmVsLm5hbWV9YCwgbWVzc2FnZS5ndWlsZC5pY29uVVJMKCkpXHJcbiAgICAgICAgICAuYWRkRmllbGQoJ0NoYW5uZWwgTmFtZScsIGBcXGAke2NoYW5uZWwubmFtZX1cXGBgLCB0cnVlKVxyXG4gICAgICAgICAgLmFkZEZpZWxkKCdDaGFubmVsIElEJywgYFxcYCR7Y2hhbm5lbC5pZH1cXGBgLCB0cnVlKVxyXG4gICAgICAgICAgLmFkZEZpZWxkKCdDaGFubmVsIFR5cGUnLCBgXFxgJHt0eXBlc1tjaGFubmVsLnR5cGVdfVxcYGAsIHRydWUpXHJcbiAgICAgICAgICAuYWRkRmllbGQoJ0NoYW5uZWwgQ3JlYXRlZCBBdCcsIGBcXGAke25ldyBEYXRlKGNoYW5uZWwuY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygnZW4tR0InKX1cXGBgKVxyXG4gICAgICAgICAgLnNldEZvb3RlcihgPC8+IFJlcXVlc3RlZCBieTogJHttZXNzYWdlLmF1dGhvci50YWd9YCwgbWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNlbmQgdGhlIGVtYmVkXHJcbiAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoeyBlbWJlZCB9KTtcclxuICAgIH1cclxufSJdfQ==