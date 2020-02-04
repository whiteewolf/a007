"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const Config_1 = require("../Config");
const Database_1 = __importDefault(require("../structures/Database"));
const SettingsProvider_1 = __importDefault(require("../structures/SettingsProvider"));
const Settings_1 = require("../models/Settings");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: Config_1.ownersid,
            disabledEvents: ["TYPING_START"],
            shardCount: 1,
            disableEveryone: true
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: (msg) => msg.guild ? this.settings.get(msg.guild.id, "config.prefix", Config_1.defprefix) : Config_1.defprefix,
            ignorePermissions: Config_1.ownersid,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 1e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has been canceled...",
                    ended: "You exceeded the maximum amount of tries, the command has been canceled...",
                    retries: 4,
                    time: 3e4
                },
                otherwise: ""
            }
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            prrocess: process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = Database_1.default.get(Config_1.databaseName);
        await this.db.connect();
        await this.db.synchronize();
        this.settings = new SettingsProvider_1.default(this.db.getRepository(Settings_1.Settings));
        await this.settings.init();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUE4RDtBQUU5RCxzRUFBOEM7QUFDOUMsc0ZBQTZEO0FBQzdELGlEQUE4QztBQWtCOUMsTUFBcUIsU0FBVSxTQUFRLDZCQUFZO0lBMkIvQyxZQUFtQixNQUFrQjtRQUNqQyxLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsaUJBQVE7WUFDakIsY0FBYyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDO1lBQ2IsZUFBZSxFQUFFLElBQUk7U0FDeEIsQ0FBQyxDQUFDO1FBN0JBLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxrQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFTO1lBQzdHLGlCQUFpQixFQUFFLGlCQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3JGLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3JGLE9BQU8sRUFBRSxxREFBcUQ7b0JBQzlELEtBQUssRUFBRSw0RUFBNEU7b0JBQ25GLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO1FBQ0ksb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNoRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQVFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxLQUFLLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxFQUFFLEdBQUcsa0JBQVEsQ0FBQyxHQUFHLENBQUMscUJBQVksQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDBCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUExREQsNEJBMERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciwgQWthaXJvQ2xpZW50IH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgb3duZXJzaWQsIGRlZnByZWZpeCwgZGF0YWJhc2VOYW1lIH0gZnJvbSBcIi4uL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi9zdHJ1Y3R1cmVzL0RhdGFiYXNlXCI7XHJcbmltcG9ydCBTZXR0aW5nc1Byb3ZpZGVyIGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1NldHRpbmdzUHJvdmlkZXJcIlxyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi9tb2RlbHMvU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiZGlzY29yZC1ha2Fpcm9cIiB7XHJcbiAgICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XHJcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICAgICAgY29uZmlnOiBCb3RPcHRpb25zO1xyXG4gICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1Byb3ZpZGVyO1xyXG4gICAgICAgIGRiOiBDb25uZWN0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gICAgcHVibGljIGRiITogQ29ubmVjdGlvbjtcclxuICAgIHB1YmxpYyBzZXR0aW5ncyE6IFNldHRpbmdzUHJvdmlkZXI7XHJcblxyXG4gICAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XHJcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgICAgIHByZWZpeDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLmd1aWxkID8gdGhpcy5zZXR0aW5ncy5nZXQobXNnLmd1aWxkLmlkLCBcImNvbmZpZy5wcmVmaXhcIiwgZGVmcHJlZml4KSA6IGRlZnByZWZpeCxcclxuICAgICAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzaWQsXHJcbiAgICAgICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWw6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgICAgIGRlZmF1bHRDb29sZG93bjogMWU0LFxyXG4gICAgICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZnlTdGFydDogKF8sIHN0cik6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXywgc3RyKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogXCJZb3UgdG9vayB0b28gbG9uZywgdGhlIGNvbW1hbmQgaGFzIGJlZW4gY2FuY2VsZWQuLi5cIixcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgdHJpZXMsIHRoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGVkLi4uXCIsXHJcbiAgICAgICAgICAgICAgICByZXRyaWVzOiA0LFxyXG4gICAgICAgICAgICAgICAgdGltZTogM2U0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG90aGVyd2lzZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBCb3RPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBvd25lcklEOiBvd25lcnNpZCxcclxuICAgICAgICAgICAgZGlzYWJsZWRFdmVudHM6IFtcIlRZUElOR19TVEFSVFwiXSxcclxuICAgICAgICAgICAgc2hhcmRDb3VudDogMSxcclxuICAgICAgICAgICAgZGlzYWJsZUV2ZXJ5b25lOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgICAgICAgIHBycm9jZXNzOiBwcm9jZXNzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2UuZ2V0KGRhdGFiYXNlTmFtZSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5jb25uZWN0KCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5zeW5jaHJvbml6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzUHJvdmlkZXIodGhpcy5kYi5nZXRSZXBvc2l0b3J5KFNldHRpbmdzKSlcclxuICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gICAgfVxyXG59Il19