"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class ServerBannerCommand extends discord_akairo_1.Command {
    constructor() {
        super("serverbanner", {
            aliases: ["serverbanner", "sb"],
            category: "Public",
            description: {
                content: "Shows your server banner",
                examples: ["serverbanner"],
                usages: "serverbanner"
            },
            ratelimit: 2
        });
    }
    exec(message) {
        let siembed = new discord_js_1.MessageEmbed()
            .setColor("DARK_BLUE")
            .setImage(message.guild.bannerURL({ size: 2048 }));
        message.util.send(siembed);
    }
}
exports.default = ServerBannerCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1B1YmxpYy9zZXJ2ZXJiYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLG1CQUFvQixTQUFRLHdCQUFPO0lBQ3BEO1FBQ0ksS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDO1lBQy9CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzFCLE1BQU0sRUFBRSxjQUFjO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUNKO0FBbkJELHNDQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkLCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlckJhbm5lckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInNlcnZlcmJhbm5lclwiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcInNlcnZlcmJhbm5lclwiLCBcInNiXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2hvd3MgeW91ciBzZXJ2ZXIgYmFubmVyXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wic2VydmVyYmFubmVyXCJdLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2VzOiBcInNlcnZlcmJhbm5lclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBzaWVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihcIkRBUktfQkxVRVwiKVxyXG4gICAgICAgICAgICAuc2V0SW1hZ2UobWVzc2FnZS5ndWlsZC5iYW5uZXJVUkwoeyBzaXplOiAyMDQ4IH0pKVxyXG4gICAgICAgIG1lc3NhZ2UudXRpbC5zZW5kKHNpZW1iZWQpXHJcbiAgICB9XHJcbn0iXX0=