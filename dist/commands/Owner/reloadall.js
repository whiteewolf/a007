"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ReloadAllCommand extends discord_akairo_1.Command {
    constructor() {
        super('reloadall', {
            aliases: ['reloadall', "rall"],
            category: 'Owner',
            description: {
                content: "Reloads all commands",
                examples: [":?reloadall"],
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
    exec(message, { code }) {
        if (message.author.id == '473276250815856650' || message.author.id == '540219416726601739') {
            let inputembederr = new discord_js_1.MessageEmbed()
                .setColor("RED")
                .setDescription(`Error: No code provided...`);
            try {
                this.client.commandHandler.reloadAll();
                message.util.send(new discord_js_1.MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`Successfully reloaded all commands...`));
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
exports.default = ReloadAllCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL093bmVyL3JlbG9hZGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRDtBQUNsRCwyQ0FBbUQ7QUFFbkQsTUFBcUIsZ0JBQWlCLFNBQVEsd0JBQU87SUFDakQ7UUFDSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUM5QixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN6QixNQUFNLEVBQUUsUUFBUTthQUNuQjtZQUNELGlCQUFpQixFQUFFLEVBQUU7WUFDckIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxDQUFDO29CQUNILEVBQUUsRUFBRSxNQUFNO29CQUNWLEtBQUssRUFBRSxTQUFTO2lCQUNuQixDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUU7UUFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxvQkFBb0IsRUFBRTtZQUN4RixJQUFJLGFBQWEsR0FBRyxJQUFJLHlCQUFZLEVBQUU7aUJBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQ2YsY0FBYyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFDakQsSUFBSTtnQkFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBWSxFQUFFO3FCQUMvQixRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUNqQixjQUFjLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO2FBRWhFO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7YUFDMUU7U0FFSjthQUFNO1lBQ0gsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQ25GO0lBQ0wsQ0FBQztDQUNKO0FBeENELG1DQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQsIHZlcnNpb24gfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsb2FkQWxsQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdyZWxvYWRhbGwnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsncmVsb2FkYWxsJywgXCJyYWxsXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ093bmVyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVsb2FkcyBhbGwgY29tbWFuZHNcIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXCI6P3JlbG9hZGFsbFwiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCI8Y29kZT5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGllbnRQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb2RlJyxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZSwgeyBjb2RlIH0pIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5hdXRob3IuaWQgPT0gJzQ3MzI3NjI1MDgxNTg1NjY1MCcgfHwgbWVzc2FnZS5hdXRob3IuaWQgPT0gJzU0MDIxOTQxNjcyNjYwMTczOScpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0ZW1iZWRlcnIgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJFRFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBFcnJvcjogTm8gY29kZSBwcm92aWRlZC4uLmApXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5jb21tYW5kSGFuZGxlci5yZWxvYWRBbGwoKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS51dGlsLnNlbmQobmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldENvbG9yKFwiR1JFRU5cIilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFN1Y2Nlc3NmdWxseSByZWxvYWRlZCBhbGwgY29tbWFuZHMuLi5gKSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChgRXJyb3Igd2hpbGUgcmVsb2FkaW5nOiBcXGAke2UubWVzc2FnZX1cXGBgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBseShcInlvdSBhcmUgbm90IHRoZSBib3Qgb3duZXIhXCIpLnRoZW4obXNnID0+IG1zZy5kZWxldGUoNTAwMCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19