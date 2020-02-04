"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const figlet_1 = __importDefault(require("figlet"));
class AsciiArtCommand extends discord_akairo_1.Command {
    constructor() {
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
    exec(message, { text }) {
        try {
            if (!text)
                return message.reply('Please specify texts for the ascii conversion');
            figlet_1.default.text(text, {
                font: "ANSI Shadow",
                horizontalLayout: "default",
                verticalLayout: "default"
            }, function (err, data) {
                if (err) {
                    console.log("Somthing Went Wrong...");
                    console.dir(err);
                    return;
                }
                message.channel.send(data, {
                    code: "md"
                });
            });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = AsciiArtCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljL2FzY2lpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBQXlDO0FBRXpDLG9EQUEyQjtBQUUzQixNQUFxQixlQUFnQixTQUFRLHdCQUFPO0lBQ2hEO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7WUFDN0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDM0IsTUFBTSxFQUFFLFFBQVE7YUFDbkI7WUFDRCxJQUFJLEVBQUUsQ0FBQztvQkFDSCxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRO29CQUN6QixNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLDBCQUEwQjtxQkFDcEM7aUJBQ0osQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFvQjtRQUNwRCxJQUFJO1lBQ0EsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDakYsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNkLElBQUksRUFBRSxhQUFhO2dCQUNuQixnQkFBZ0IsRUFBRSxTQUFTO2dCQUMzQixjQUFjLEVBQUUsU0FBUzthQUM1QixFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7Z0JBQ2xCLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDaEIsT0FBTztpQkFDVjtnQkFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0o7QUF4Q0Qsa0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IGZpZ2xldCBmcm9tIFwiZmlnbGV0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzY2lpQXJ0Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiYXNjaWlcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJhc2NpaVwiLCBcImFzYy1hcnRcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJEaXNwbGF5cyBhIHRleHQgaW50byBhc2NpaS1hcnRcIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXCI6P2FzY2lpIEhlbGxvXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2VzOiBcIjx0ZXh0PlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFyZ3M6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ29uZScsIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGBQbGVhc2UgcHJvdmlkZSBzb21lIHRleHRgLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IHRleHQgfTogeyB0ZXh0OiBzdHJpbmcgfSk6IGFueSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0KSByZXR1cm4gbWVzc2FnZS5yZXBseSgnUGxlYXNlIHNwZWNpZnkgdGV4dHMgZm9yIHRoZSBhc2NpaSBjb252ZXJzaW9uJyk7XHJcbiAgICAgICAgICAgIGZpZ2xldC50ZXh0KHRleHQsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IFwiQU5TSSBTaGFkb3dcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxMYXlvdXQ6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxMYXlvdXQ6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNvbXRoaW5nIFdlbnQgV3JvbmcuLi5cIilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQoZGF0YSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFwibWRcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19