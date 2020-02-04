"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class RestartCommand extends discord_akairo_1.Command {
    constructor() {
        super('restart', {
            aliases: ['restart', "rs"],
            category: 'Owner',
            description: {
                content: "Restarts the bot",
                examples: [":?restart"],
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
                    .setDescription(`Client is restarting...`));
                this.client.destroy();
                this.client.login(this.client.token);
                let newe = new discord_js_1.MessageEmbed()
                    .setDescription("Restarted!")
                    .setColor("GREEN");
                message.util.send(newe);
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
exports.default = RestartCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdGFydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9Pd25lci9yZXN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUduRCxNQUFxQixjQUFlLFNBQVEsd0JBQU87SUFDL0M7UUFDSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztZQUMxQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN2QixNQUFNLEVBQUUsRUFBRTthQUNiO1lBQ0QsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixlQUFlLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsS0FBSyxFQUFFLFNBQVM7aUJBQ25CLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFhO1FBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7WUFDeEYsSUFBSSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNmLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ2pELElBQUk7Z0JBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBWSxFQUFFO3FCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO3FCQUNyQixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFBO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLHlCQUFZLEVBQUU7cUJBQ3hCLGNBQWMsQ0FBQyxZQUFZLENBQUM7cUJBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFFMUI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUM5RTtTQUVKO2FBQU07WUFDSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDbkY7SUFDTCxDQUFDO0NBQ0o7QUE3Q0QsaUNBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkLCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCB7IHRva2VuIH0gZnJvbSBcIi4uLy4uL0NvbmZpZ1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0YXJ0Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdyZXN0YXJ0Jywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3Jlc3RhcnQnLCBcInJzXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ093bmVyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVzdGFydHMgdGhlIGJvdFwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcIjo/cmVzdGFydFwiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGllbnRQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZSwgYXJnczogTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmF1dGhvci5pZCA9PSAnNDczMjc2MjUwODE1ODU2NjUwJyB8fCBtZXNzYWdlLmF1dGhvci5pZCA9PSAnNTQwMjE5NDE2NzI2NjAxNzM5Jykge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRlbWJlZGVyciA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgLnNldENvbG9yKFwiUkVEXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYEVycm9yOiBObyBjb2RlIHByb3ZpZGVkLi4uYClcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudXRpbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIkRBUktfQkxVRVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgQ2xpZW50IGlzIHJlc3RhcnRpbmcuLi5gKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQubG9naW4odGhpcy5jbGllbnQudG9rZW4pXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3ZSA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIlJlc3RhcnRlZCFcIilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCJHUkVFTlwiKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS51dGlsLnNlbmQobmV3ZSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChgRXJyb3Igd2hpbGUgc2h1dHRpbmcgZG93bjogXFxgJHtlLm1lc3NhZ2V9XFxgYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UucmVwbHkoXCJ5b3UgYXJlIG5vdCB0aGUgYm90IG93bmVyIVwiKS50aGVuKG1zZyA9PiBtc2cuZGVsZXRlKDUwMDApKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==