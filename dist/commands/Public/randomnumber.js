"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class RNCommand extends discord_akairo_1.Command {
    constructor() {
        super("randomnumber", {
            aliases: ["randomnumber", "rnumber", "rnun"],
            category: "Public",
            description: {
                content: "Generates a random number from 1 - 100",
                examples: ["randomnumber"],
                usages: "randomnumber"
            },
            ratelimit: 3
        });
    }
    exec(message) {
        let number = Math.ceil(Math.random() * 100);
        let num = new discord_js_1.MessageEmbed()
            .setColor("DARK_BLUE")
            .setDescription(`Random picked number is\n\`\`\`${number}\`\`\``);
        message.util.send(num);
    }
}
exports.default = RNCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tbnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1B1YmxpYy9yYW5kb21udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBR25ELE1BQXFCLFNBQVUsU0FBUSx3QkFBTztJQUMxQztRQUNJLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7WUFDNUMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSx3Q0FBd0M7Z0JBQ2pELFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDMUIsTUFBTSxFQUFFLGNBQWM7YUFDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzNCLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDckIsY0FBYyxDQUFDLGtDQUFrQyxNQUFNLFFBQVEsQ0FBQyxDQUFBO1FBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7Q0FDSjtBQXBCRCw0QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBtYXRoIGZyb20gXCJtYXRoanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUk5Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyYW5kb21udW1iZXJcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJyYW5kb21udW1iZXJcIiwgXCJybnVtYmVyXCIsIFwicm51blwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUHVibGljXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSAxIC0gMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wicmFuZG9tbnVtYmVyXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2VzOiBcInJhbmRvbW51bWJlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogM1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgbGV0IG51bSA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIkRBUktfQkxVRVwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihgUmFuZG9tIHBpY2tlZCBudW1iZXIgaXNcXG5cXGBcXGBcXGAke251bWJlcn1cXGBcXGBcXGBgKVxyXG4gICAgICAgIG1lc3NhZ2UudXRpbC5zZW5kKG51bSlcclxuICAgIH1cclxufSJdfQ==