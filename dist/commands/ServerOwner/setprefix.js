"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class SetPrefixCommand extends discord_akairo_1.Command {
    constructor() {
        super('setprefix', {
            aliases: ['setprefix', "sprefix"],
            category: 'Server Owner',
            description: {
                content: "Sets the bot prefix in the current guild",
                examples: [":?prefix !"],
                usages: "<prefix>"
            },
            userPermissions: ["MANAGE_GUILD"],
            ratelimit: 3,
            ownerOnly: false,
            args: [{
                    id: 'prefix',
                    type: "string",
                    prompt: {
                        start: (message) => `${message.author} Please specify a prefix`
                    }
                }
            ],
        });
    }
    exec(message, { prefix }) {
        this.client.settings.set(message.guild, "config.prefix", prefix);
        message.util.send(`Successfully updated the server prefix to: \`${prefix}\`!`);
    }
}
exports.default = SetPrefixCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0cHJlZml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1NlcnZlck93bmVyL3NldHByZWZpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNqRDtRQUNJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsMENBQTBDO2dCQUNuRCxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3hCLE1BQU0sRUFBRSxVQUFVO2FBQ3JCO1lBQ0QsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLE9BQWdCLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sMEJBQTBCO3FCQUNuRjtpQkFDSjthQUNBO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFzQjtRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0RBQWdELE1BQU0sS0FBSyxDQUFDLENBQUE7SUFDbEYsQ0FBQztDQUNKO0FBNUJELG1DQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldFByZWZpeENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc2V0cHJlZml4Jywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3NldHByZWZpeCcsIFwic3ByZWZpeFwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdTZXJ2ZXIgT3duZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTZXRzIHRoZSBib3QgcHJlZml4IGluIHRoZSBjdXJyZW50IGd1aWxkXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiOj9wcmVmaXggIVwiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCI8cHJlZml4PlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW1wiTUFOQUdFX0dVSUxEXCJdLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIG93bmVyT25seTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFyZ3M6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3ByZWZpeCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nID0+IGAke21lc3NhZ2UuYXV0aG9yfSBQbGVhc2Ugc3BlY2lmeSBhIHByZWZpeGBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgcHJlZml4IH06IHsgcHJlZml4OiBzdHJpbmcgfSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5jbGllbnQuc2V0dGluZ3Muc2V0KG1lc3NhZ2UuZ3VpbGQsIFwiY29uZmlnLnByZWZpeFwiLCBwcmVmaXgpXHJcbiAgICAgICAgbWVzc2FnZS51dGlsLnNlbmQoYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIHRoZSBzZXJ2ZXIgcHJlZml4IHRvOiBcXGAke3ByZWZpeH1cXGAhYClcclxuICAgIH1cclxufSJdfQ==