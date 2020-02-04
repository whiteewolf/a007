"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BotClient_1 = __importDefault(require("./client/BotClient"));
const Config_1 = require("./Config");
const client = new BotClient_1.default({ token: Config_1.token });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRUFBMkM7QUFDM0MscUNBQWlDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3RDbGllbnQgZnJvbSBcIi4vY2xpZW50L0JvdENsaWVudFwiO1xyXG5pbXBvcnQgeyB0b2tlbiB9IGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuIH0pO1xyXG5jbGllbnQuc3RhcnQoKTsiXX0=