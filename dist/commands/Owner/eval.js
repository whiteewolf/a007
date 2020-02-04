"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const util_1 = require("util");
class EvalCommand extends discord_akairo_1.Command {
    constructor() {
        super('eval', {
            aliases: ['eval', "e", "evaluate"],
            category: 'Owner',
            description: {
                content: "Evaluates a code",
                examples: [":?eval <code>"],
                usages: "<code>"
            },
            clientPermissions: [],
            userPermissions: [],
            ratelimit: 3,
            ownerOnly: true,
            args: [{
                    id: 'code',
                    match: 'content',
                }]
        });
    }
    exec(message, { code }) {
        if (message.author.id == '473276250815856650' || message.author.id == '540219416726601739') {
            let inputembederr = new discord_js_1.MessageEmbed()
                .setColor("RED")
                .setDescription(`Error: No code provided...`);
            try {
                let evaluated = util_1.inspect(eval(code), { depth: 1 });
                if (message.content.includes('token')) {
                    evaluated = 'Are u kidding me??? I dont have permissions from the owner to send my token';
                }
                if (!code) {
                    return message.channel.send(inputembederr);
                }
                else {
                    let hrStart = process.hrtime();
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);
                    let inputembed = new discord_js_1.MessageEmbed()
                        .setColor("GREEN")
                        .addField(`:inbox_tray: Input:`, `\`\`\`js\n${code}\`\`\``, true)
                        .addField(`:outbox_tray: Output:`, `\`\`\`javascript\n${evaluated}\n\`\`\``, true)
                        // .addField(`Type Of:`, `\`\`\`ini\n${typeof evaluated}\n\`\`\``)
                        .setFooter(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms`);
                    return message.util.send(inputembed);
                }
            }
            catch (e) {
                return message.channel.send(`Error while evaluating: \`${e.message}\``);
            }
        }
        else {
            return message.reply("you are not the bot owner!").then(msg => msg.delete(5000));
        }
    }
}
exports.default = EvalCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9Pd25lci9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtEO0FBQ2xELDJDQUFtRDtBQUNuRCwrQkFBK0I7QUFFL0IsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRO2FBQ25CO1lBQ0QsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixlQUFlLEVBQUUsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLENBQUM7b0JBQ0gsRUFBRSxFQUFFLE1BQU07b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ25CLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBQztRQUN2QixJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLG9CQUFvQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLG9CQUFvQixFQUFDO1lBQ3RGLElBQUksYUFBYSxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDckMsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFDZixjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtZQUMzQyxJQUFJO2dCQUNBLElBQUksU0FBUyxHQUFHLGNBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQztvQkFDckMsU0FBUyxHQUFHLDZFQUE2RSxDQUFDO2lCQUNqRztnQkFDSyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNQLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzlDO3FCQUFNO29CQUNILElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtvQkFDOUIsSUFBSSxNQUFNLENBQUM7b0JBQ1gsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdCLElBQUksVUFBVSxHQUFHLElBQUkseUJBQVksRUFBRTt5QkFDaEQsUUFBUSxDQUFDLE9BQU8sQ0FBQzt5QkFDakIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsSUFBSSxRQUFRLEVBQUUsSUFBSSxDQUFDO3lCQUNoRSxRQUFRLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLFNBQVMsVUFBVSxFQUFFLElBQUksQ0FBQzt3QkFDbEYsa0VBQWtFO3lCQUNqRSxTQUFTLENBQUMsZUFBZSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUE7b0JBQ2hGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQ3ZDO2FBRUo7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUMzRTtTQUVGO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDakY7SUFDVCxDQUFDO0NBQ0o7QUF0REQsOEJBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCwgdmVyc2lvbiB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZUVtYmVkLCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZhbENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZXZhbCcsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogWydldmFsJywgXCJlXCIsIFwiZXZhbHVhdGVcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnT3duZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJFdmFsdWF0ZXMgYSBjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1wiOj9ldmFsIDxjb2RlPlwiXSxcclxuICAgICAgICAgICAgICAgIHVzYWdlczogXCI8Y29kZT5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGllbnRQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBhcmdzOiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb2RlJyxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiAnY29udGVudCcsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZSwge2NvZGV9KSB7XHJcbiAgICAgICAgaWYobWVzc2FnZS5hdXRob3IuaWQgPT0gJzQ3MzI3NjI1MDgxNTg1NjY1MCcgfHwgbWVzc2FnZS5hdXRob3IuaWQgPT0gJzU0MDIxOTQxNjcyNjYwMTczOScpe1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRlbWJlZGVyciA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSRURcIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBFcnJvcjogTm8gY29kZSBwcm92aWRlZC4uLmApXHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGV2YWx1YXRlZCA9IGluc3BlY3QoZXZhbChjb2RlKSwge2RlcHRoOiAxfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5jb250ZW50LmluY2x1ZGVzKCd0b2tlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBldmFsdWF0ZWQgPSAnQXJlIHUga2lkZGluZyBtZT8/PyBJIGRvbnQgaGF2ZSBwZXJtaXNzaW9ucyBmcm9tIHRoZSBvd25lciB0byBzZW5kIG15IHRva2VuJzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKCFjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoaW5wdXRlbWJlZGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgaHJTdGFydCA9IHByb2Nlc3MuaHJ0aW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBockRpZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBockRpZmYgPSBwcm9jZXNzLmhydGltZShoclN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJHUkVFTlwiKVxyXG4gICAgICAgICAgICAuYWRkRmllbGQoYDppbmJveF90cmF5OiBJbnB1dDpgLCBgXFxgXFxgXFxganNcXG4ke2NvZGV9XFxgXFxgXFxgYCwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFkZEZpZWxkKGA6b3V0Ym94X3RyYXk6IE91dHB1dDpgLCBgXFxgXFxgXFxgamF2YXNjcmlwdFxcbiR7ZXZhbHVhdGVkfVxcblxcYFxcYFxcYGAsIHRydWUpXHJcbiAgICAgICAgICAgIC8vIC5hZGRGaWVsZChgVHlwZSBPZjpgLCBgXFxgXFxgXFxgaW5pXFxuJHt0eXBlb2YgZXZhbHVhdGVkfVxcblxcYFxcYFxcYGApXHJcbiAgICAgICAgICAgIC5zZXRGb290ZXIoYEV4ZWN1dGVkIGluICR7aHJEaWZmWzBdID4gMCA/IGAke2hyRGlmZlswXX1zIGAgOiAnJ30ke2hyRGlmZlsxXSAvIDEwMDAwMDB9bXNgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGlucHV0ZW1iZWQpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoYEVycm9yIHdoaWxlIGV2YWx1YXRpbmc6IFxcYCR7ZS5tZXNzYWdlfVxcYGApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UucmVwbHkoXCJ5b3UgYXJlIG5vdCB0aGUgYm90IG93bmVyIVwiKS50aGVuKG1zZyA9PiBtc2cuZGVsZXRlKDUwMDApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=