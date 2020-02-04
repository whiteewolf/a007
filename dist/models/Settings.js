"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Settings = class Settings {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Settings.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ type: "text", default: "{}" }),
    __metadata("design:type", String)
], Settings.prototype, "settings", void 0);
Settings = __decorate([
    typeorm_1.Entity("settings")
], Settings);
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL1NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBSXhELElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7Q0FNcEIsQ0FBQTtBQUpHO0lBREMsdUJBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzt1Q0FDaEM7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQ3ZCO0FBTFIsUUFBUTtJQUZwQixnQkFBTSxDQUFDLFVBQVUsQ0FBQztHQUVOLFFBQVEsQ0FNcEI7QUFOWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5Q29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbkBFbnRpdHkoXCJzZXR0aW5nc1wiKVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcclxuICAgIEBQcmltYXJ5Q29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjIgfSlcclxuICAgIGd1aWxkITogc3RyaW5nO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInRleHRcIiwgZGVmYXVsdDogXCJ7fVwiIH0pXHJcbiAgICBzZXR0aW5nczogc3RyaW5nO1xyXG59XHJcbiJdfQ==