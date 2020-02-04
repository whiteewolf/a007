"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class BlacklistedCommand extends discord_akairo_1.Command {
    constructor() {
        super('blacklisted', {
            aliases: ['blacklisted'],
            category: 'Owner',
            description: {
                content: "Gets all blacklisted users",
                examples: [":?blacklisted"],
                usages: ""
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
                }
            ],
        });
    }
    exec(message, { user }) {
        let list = this.client.settings.get("global", "user.blacklisted", []);
        let embed = new discord_js_1.MessageEmbed()
            .setColor("DARK_BLUE");
        list.forEach(list => {
            embed.addField(`User ID's`, list.user.id);
        });
    }
}
exports.default = BlacklistedCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhY2tsaXN0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvT3duZXIvYmxhY2tsaXN0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsMkNBQTBDO0FBRTFDLE1BQXFCLGtCQUFtQixTQUFRLHdCQUFPO0lBQ25EO1FBQ0ksS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDeEIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSw0QkFBNEI7Z0JBQ3JDLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDM0IsTUFBTSxFQUFFLEVBQUU7YUFDYjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzNELElBQUksQ0FBQyxJQUFJOzRCQUFFLE9BQU8sSUFBSSxDQUFDO3dCQUN2QixPQUFPLElBQUksQ0FBQztvQkFDaEIsQ0FBQztpQkFLSjthQUNBO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFrQjtRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBcENELHFDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIFVzZXIgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFja2xpc3RlZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignYmxhY2tsaXN0ZWQnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnYmxhY2tsaXN0ZWQnXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdPd25lcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkdldHMgYWxsIGJsYWNrbGlzdGVkIHVzZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiOj9ibGFja2xpc3RlZFwiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIG93bmVyT25seTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFyZ3M6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3VzZXInLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogKF8sIHN0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmNsaWVudC51c2Vycy5mZXRjaChzdHIpLmNhdGNoKCgpID0+IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzdGFydDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IGAke21lc3NhZ2UuYXV0aG9yfSBQbGVhc2Ugc3BlY2lmeSBhIFVzZXIgSURgLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHJ5OiAobWVzc2FnZTogTWVzc2FnZSkgPT4gYCR7bWVzc2FnZS5hdXRob3J9IFBsZWFzZSBzcGVjaWZ5IGEgKipWQUxJRCoqIFVzZXIgSURgXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7IHVzZXIgfTogeyB1c2VyOiBVc2VyIH0pOiBhbnkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5jbGllbnQuc2V0dGluZ3MuZ2V0KFwiZ2xvYmFsXCIsIFwidXNlci5ibGFja2xpc3RlZFwiLCBbXSk7XHJcbiAgICAgICAgbGV0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihcIkRBUktfQkxVRVwiKVxyXG4gICAgICAgIGxpc3QuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoYFVzZXIgSUQnc2AsIGxpc3QudXNlci5pZClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==