"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public",
            description: {
                content: "Checks the ping of the latency to the API",
                examples: ["ping"],
                usages: "ping"
            },
            ratelimit: 3
        });
    }
    exec(message) {
        message.channel.send("Pinging...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"];
            let response = choices[Math.floor(Math.random() * choices.length)];
            let pingembed = new discord_js_1.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response)
                .addField(`Bot Latency:`, `\`${ping}\`ms`, true)
                .addField(`API Latency:`, `\`${Math.round(this.client.ws.ping)}\`ms`, true)
                .addField(`Timestamp:`, `\`${message.createdAt.toLocaleString('en-GB')}\``, true);
            m.edit(pingembed);
        });
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QywyQ0FBMEM7QUFFMUMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsTUFBTTthQUNqQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFnQjtRQUV4QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQTtZQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDLENBQUE7WUFDekYsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ2xFLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDN0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksTUFBTSxFQUFFLElBQUksQ0FBQztpQkFDL0MsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7aUJBQzFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3JGLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUE1QkQsOEJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJwaW5nXCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wicGluZ1wiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkNoZWNrcyB0aGUgcGluZyBvZiB0aGUgbGF0ZW5jeSB0byB0aGUgQVBJXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wicGluZ1wiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCJwaW5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKSB7XHJcblxyXG4gICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiUGluZ2luZy4uLlwiKS50aGVuKG0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGluZyA9IG0uY3JlYXRlZFRpbWVzdGFtcCAtIG1lc3NhZ2UuY3JlYXRlZFRpbWVzdGFtcFxyXG4gICAgICAgICAgICBsZXQgY2hvaWNlcyA9IFtcIklzIHRoaXMgcmVhbGx5IG15IHBpbmdcIiwgXCJJcyBpdCBva2F5PyBJIGNhbnQgbG9va1wiLCBcIkkgaG9wZSBpdCBpc250IGJhZFwiXVxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBjaG9pY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNob2ljZXMubGVuZ3RoKV1cclxuICAgICAgICAgICAgbGV0IHBpbmdlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAgICAgLnNldENvbG9yKCdSQU5ET00nKVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZpZWxkKGBCb3QgTGF0ZW5jeTpgLCBgXFxgJHtwaW5nfVxcYG1zYCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5hZGRGaWVsZChgQVBJIExhdGVuY3k6YCwgYFxcYCR7TWF0aC5yb3VuZCh0aGlzLmNsaWVudC53cy5waW5nKX1cXGBtc2AsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRmllbGQoYFRpbWVzdGFtcDpgLCBgXFxgJHttZXNzYWdlLmNyZWF0ZWRBdC50b0xvY2FsZVN0cmluZygnZW4tR0InKX1cXGBgLCB0cnVlKVxyXG4gICAgICAgICAgICBtLmVkaXQocGluZ2VtYmVkKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19