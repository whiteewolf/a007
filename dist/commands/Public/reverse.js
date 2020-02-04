"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ReverseCommand extends discord_akairo_1.Command {
    constructor() {
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
                        start: (message) => `${message.author} Please specify some text for me to reverse it...`
                    }
                }
            ],
        });
    }
    exec(message, { content }) {
        message.util.send(new discord_js_1.MessageEmbed()
            .setColor("DARK_BLUE")
            .setDescription(content.reverse()));
    }
}
exports.default = ReverseCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvcmV2ZXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QywyQ0FBMEM7QUFFMUMsTUFBcUIsY0FBZSxTQUFRLHdCQUFPO0lBQy9DO1FBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixNQUFNLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsQ0FBQztvQkFDSCxFQUFFLEVBQUUsU0FBUztvQkFDYixJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsT0FBZ0IsRUFBVSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxtREFBbUQ7cUJBQzVHO2lCQUNKO2FBQ0E7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxPQUFPLEVBQXlCO1FBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksRUFBRTthQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ3JCLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7Q0FDSjtBQTVCRCxpQ0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2ZXJzZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncmV2ZXJzZScsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogWydyZXZlcnNlJywgXCJyZXZcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnUHVibGljJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmV2ZXJzZXMgYSB0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiOj9yZXZlcnNlIEhlbGxvXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2VzOiBcIjxzZW50ZW5jZSBvciB3b3JkPlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXJnczogW3tcclxuICAgICAgICAgICAgICAgIGlkOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nID0+IGAke21lc3NhZ2UuYXV0aG9yfSBQbGVhc2Ugc3BlY2lmeSBzb21lIHRleHQgZm9yIG1lIHRvIHJldmVyc2UgaXQuLi5gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IGNvbnRlbnQgfTogeyBjb250ZW50OiBzdHJpbmdbXSB9KTogYW55IHtcclxuICAgICAgICBtZXNzYWdlLnV0aWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldENvbG9yKFwiREFSS19CTFVFXCIpXHJcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihjb250ZW50LnJldmVyc2UoKSkpXHJcbiAgICB9XHJcbn0iXX0=