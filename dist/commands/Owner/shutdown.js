"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ShutDownCommand extends discord_akairo_1.Command {
    constructor() {
        super('shutdown', {
            aliases: ['shutdown', "exit"],
            category: 'Owner',
            description: {
                content: "Shutdowns the bot",
                examples: [":?shutdown"],
                usages: ""
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
    exec(message, args) {
        if (message.author.id == '473276250815856650' || message.author.id == '540219416726601739') {
            let inputembederr = new discord_js_1.MessageEmbed()
                .setColor("RED")
                .setDescription(`Error: No code provided...`);
            try {
                message.util.send(new discord_js_1.MessageEmbed()
                    .setColor("DARK_BLUE")
                    .setDescription(`Client is shutting down`));
                process.exit();
            }
            catch (e) {
                return message.channel.send(`Error while shutting down: \`${e.message}\``);
            }
        }
        else {
            return message.reply("you are not the bot owner!").then(msg => msg.delete(5000));
        }
    }
}
exports.default = ShutDownCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvT3duZXIvc2h1dGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLGVBQWdCLFNBQVEsd0JBQU87SUFDaEQ7UUFDSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUM3QixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN4QixNQUFNLEVBQUUsRUFBRTthQUNiO1lBQ0QsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixlQUFlLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsS0FBSyxFQUFFLFNBQVM7aUJBQ25CLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFhO1FBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7WUFDeEYsSUFBSSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNmLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ2pELElBQUk7Z0JBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBWSxFQUFFO3FCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO3FCQUNyQixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFBO2dCQUMvQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7YUFFakI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUM5RTtTQUVKO2FBQU07WUFDSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDbkY7SUFDTCxDQUFDO0NBQ0o7QUF4Q0Qsa0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkLCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHV0RG93bkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc2h1dGRvd24nLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnc2h1dGRvd24nLCBcImV4aXRcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnT3duZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTaHV0ZG93bnMgdGhlIGJvdFwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcIjo/c2h1dGRvd25cIl0sXHJcbiAgICAgICAgICAgICAgICB1c2FnZXM6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpZW50UGVybWlzc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIG93bmVyT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJnczogW3tcclxuICAgICAgICAgICAgICAgIGlkOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogJ2NvbnRlbnQnLFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2UsIGFyZ3M6IE1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5hdXRob3IuaWQgPT0gJzQ3MzI3NjI1MDgxNTg1NjY1MCcgfHwgbWVzc2FnZS5hdXRob3IuaWQgPT0gJzU0MDIxOTQxNjcyNjYwMTczOScpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0ZW1iZWRlcnIgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJFRFwiKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBFcnJvcjogTm8gY29kZSBwcm92aWRlZC4uLmApXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnV0aWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJEQVJLX0JMVUVcIilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYENsaWVudCBpcyBzaHV0dGluZyBkb3duYCkpXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGBFcnJvciB3aGlsZSBzaHV0dGluZyBkb3duOiBcXGAke2UubWVzc2FnZX1cXGBgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBseShcInlvdSBhcmUgbm90IHRoZSBib3Qgb3duZXIhXCIpLnRoZW4obXNnID0+IG1zZy5kZWxldGUoNTAwMCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19