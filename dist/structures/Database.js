"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Settings_1 = require("../models/Settings");
const Config_1 = require("../Config");
const connectionManager = new typeorm_1.ConnectionManager();
connectionManager.create({
    name: Config_1.databaseName,
    type: "sqlite",
    database: "./db.sqlite",
    entities: [
        Settings_1.Settings
    ]
});
exports.default = connectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RydWN0dXJlcy9EYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUEyQztBQUMzQyxpREFBNkM7QUFDN0Msc0NBQXdDO0FBRXhDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFBO0FBQ2pELGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUNyQixJQUFJLEVBQUUscUJBQVk7SUFDbEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUU7UUFDTixtQkFBUTtLQUNYO0NBQ0osQ0FBQyxDQUFBO0FBRUYsa0JBQWUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uTWFuYWdlciB9IGZyb20gXCJ0eXBlb3JtXCJcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vbW9kZWxzL1NldHRpbmdzXCJcclxuaW1wb3J0IHsgZGF0YWJhc2VOYW1lIH0gZnJvbSBcIi4uL0NvbmZpZ1wiXHJcblxyXG5jb25zdCBjb25uZWN0aW9uTWFuYWdlciA9IG5ldyBDb25uZWN0aW9uTWFuYWdlcigpXHJcbmNvbm5lY3Rpb25NYW5hZ2VyLmNyZWF0ZSh7XHJcbiAgICBuYW1lOiBkYXRhYmFzZU5hbWUsXHJcbiAgICB0eXBlOiBcInNxbGl0ZVwiLFxyXG4gICAgZGF0YWJhc2U6IFwiLi9kYi5zcWxpdGVcIixcclxuICAgIGVudGl0aWVzOiBbXHJcbiAgICAgICAgU2V0dGluZ3NcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb25NYW5hZ2VyOyJdfQ==