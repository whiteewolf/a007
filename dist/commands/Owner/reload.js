"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ReloadCommand extends discord_akairo_1.Command {
    constructor() {
        super('reload', {
            aliases: ['reload', "rcmd"],
            category: 'Owner',
            description: {
                content: "Reloads a command",
                examples: [":?reload"],
                usages: "<cmd>"
            },
            clientPermissions: [],
            userPermissions: [],
            ratelimit: 3,
            ownerOnly: true,
            args: [{
                    id: 'content',
                    match: 'content',
                }]
        });
    }
    exec(message, { command }) {
        if (message.author.id == '473276250815856650' || message.author.id == '540219416726601739') {
            let inputembederr = new discord_js_1.MessageEmbed()
                .setColor("RED")
                .setDescription(`Error: No code provided...`);
            try {
                let cmd = discord_akairo_1.Command;
                this.client.commandHandler.reload(command);
                message.util.send(new discord_js_1.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`Successfully reloaded \`${command}\`...`));
            }
            catch (e) {
                return message.channel.send(`Error while reloading: \`${e.message}\``);
            }
        }
        else {
            return message.reply("you are not the bot owner!").then(msg => msg.delete(5000));
        }
    }
}
exports.default = ReloadCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL093bmVyL3JlbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFHbkQsTUFBcUIsYUFBYyxTQUFRLHdCQUFPO0lBQzlDO1FBQ0ksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7WUFDM0IsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsTUFBTSxFQUFFLE9BQU87YUFDbEI7WUFDRCxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsQ0FBQztvQkFDSCxFQUFFLEVBQUUsU0FBUztvQkFDYixLQUFLLEVBQUUsU0FBUztpQkFDbkIsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFO1FBQzVCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7WUFDeEYsSUFBSSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNmLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ2pELElBQUk7Z0JBQ0EsSUFBSSxHQUFHLEdBQUcsd0JBQU8sQ0FBQTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFZLEVBQUU7cUJBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ2pCLGNBQWMsQ0FBQywyQkFBMkIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFBO2FBRWxFO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7YUFDMUU7U0FFSjthQUFNO1lBQ0gsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQ25GO0lBQ0wsQ0FBQztDQUNKO0FBekNELGdDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbG9hZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncmVsb2FkJywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3JlbG9hZCcsIFwicmNtZFwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdPd25lcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlbG9hZHMgYSBjb21tYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiOj9yZWxvYWRcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2FnZXM6IFwiPGNtZD5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGllbnRQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZSwgeyBjb21tYW5kIH0pIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5hdXRob3IuaWQgPT0gJzQ3MzI3NjI1MDgxNTg1NjY1MCcgfHwgbWVzc2FnZS5hdXRob3IuaWQgPT0gJzU0MDIxOTQxNjcyNjYwMTczOScpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0ZW1iZWRlcnIgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJFRFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBFcnJvcjogTm8gY29kZSBwcm92aWRlZC4uLmApXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY21kID0gQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuY29tbWFuZEhhbmRsZXIucmVsb2FkKGNvbW1hbmQpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnV0aWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJHUkVFTlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgU3VjY2Vzc2Z1bGx5IHJlbG9hZGVkIFxcYCR7Y29tbWFuZH1cXGAuLi5gKSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChgRXJyb3Igd2hpbGUgcmVsb2FkaW5nOiBcXGAke2UubWVzc2FnZX1cXGBgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBseShcInlvdSBhcmUgbm90IHRoZSBib3Qgb3duZXIhXCIpLnRoZW4obXNnID0+IG1zZy5kZWxldGUoNTAwMCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19