"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class BlacklistCommand extends discord_akairo_1.Command {
    constructor() {
        super('blacklist', {
            aliases: ['blacklist'],
            category: 'Owner',
            description: {
                content: "Blacklists a user from the bot",
                examples: [":?blacklist 123456789101"],
                usages: "<User ID>"
            },
            ratelimit: 3,
            ownerOnly: false,
            args: [{
                    id: 'user',
                    type: (_, str) => {
                        const user = this.client.users.fetch(str).catch(() => null);
                        if (!user)
                            return null;
                        return user;
                    },
                    prompt: {
                        start: (message) => `${message.author} Please specify a User ID`,
                        retry: (message) => `${message.author} Please specify a **VALID** User ID`
                    }
                }
            ],
        });
    }
    exec(message, { user }) {
        let list = this.client.settings.get("global", "user.blacklisted", []);
        if (list.includes(user.id)) {
            list.splice(list.indexOf(user.id), 1);
            this.client.settings.set("global", "user.blacklisted", list);
            return message.util.send(`Successfully removed \`${user.tag}\` from the blacklist!`);
        }
        else {
            list.push(user.id);
            this.client.settings.set("global", "user.blacklisted", list);
            return message.util.send(`Successfully blacklisted \`${user.tag}\`!`);
        }
    }
}
exports.default = BlacklistCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhY2tsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL093bmVyL2JsYWNrbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNqRDtRQUNJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLFFBQVEsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN0QyxNQUFNLEVBQUUsV0FBVzthQUN0QjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzNELElBQUksQ0FBQyxJQUFJOzRCQUFFLE9BQU8sSUFBSSxDQUFDO3dCQUN2QixPQUFPLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSwyQkFBMkI7d0JBQ3pFLEtBQUssRUFBRSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0scUNBQXFDO3FCQUN0RjtpQkFDSjthQUNBO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFrQjtRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUVyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksQ0FBQyxHQUFHLHdCQUF3QixDQUFDLENBQUE7U0FDdkY7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDNUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUE7U0FDeEU7SUFDTCxDQUFDO0NBQ0o7QUExQ0QsbUNBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgVXNlciB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tsaXN0Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdibGFja2xpc3QnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnYmxhY2tsaXN0J10sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnT3duZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJCbGFja2xpc3RzIGEgdXNlciBmcm9tIHRoZSBib3RcIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXCI6P2JsYWNrbGlzdCAxMjM0NTY3ODkxMDFcIl0sXHJcbiAgICAgICAgICAgICAgICB1c2FnZXM6IFwiPFVzZXIgSUQ+XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICAgICAgICBvd25lck9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd1c2VyJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IChfLCBzdHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5jbGllbnQudXNlcnMuZmV0Y2goc3RyKS5jYXRjaCgoKSA9PiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBgJHttZXNzYWdlLmF1dGhvcn0gUGxlYXNlIHNwZWNpZnkgYSBVc2VyIElEYCxcclxuICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IGAke21lc3NhZ2UuYXV0aG9yfSBQbGVhc2Ugc3BlY2lmeSBhICoqVkFMSUQqKiBVc2VyIElEYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyB1c2VyIH06IHsgdXNlcjogVXNlciB9KTogYW55IHtcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuY2xpZW50LnNldHRpbmdzLmdldChcImdsb2JhbFwiLCBcInVzZXIuYmxhY2tsaXN0ZWRcIiwgW10pO1xyXG5cclxuICAgICAgICBpZiAobGlzdC5pbmNsdWRlcyh1c2VyLmlkKSkge1xyXG4gICAgICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YodXNlci5pZCksIDEpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5zZXR0aW5ncy5zZXQoXCJnbG9iYWxcIiwgXCJ1c2VyLmJsYWNrbGlzdGVkXCIsIGxpc3QpXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgXFxgJHt1c2VyLnRhZ31cXGAgZnJvbSB0aGUgYmxhY2tsaXN0IWApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHVzZXIuaWQpXHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LnNldHRpbmdzLnNldChcImdsb2JhbFwiLCBcInVzZXIuYmxhY2tsaXN0ZWRcIiwgbGlzdClcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGBTdWNjZXNzZnVsbHkgYmxhY2tsaXN0ZWQgXFxgJHt1c2VyLnRhZ31cXGAhYClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=