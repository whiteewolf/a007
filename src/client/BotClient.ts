import { CommandHandler, ListenerHandler, AkairoClient } from "discord-akairo";
import { Message } from "discord.js";
import { join } from "path";
import { ownersid, defprefix, databaseName } from "../Config";
import { Connection } from "typeorm";
import Database from "../structures/Database";
import SettingsProvider from "../structures/SettingsProvider"
import { Settings } from "../models/Settings";
import { Server } from "http";

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
        config: BotOptions;
        settings: SettingsProvider;
        db: Connection;
    }
}

interface BotOptions {
    token?: string;
    owners?: string | string[];
}

export default class BotClient extends AkairoClient {
    public db!: Connection;
    public settings!: SettingsProvider;

    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "..", "commands"),
        prefix: (msg: Message) => msg.guild ? this.settings.get(msg.guild.id, "config.prefix", defprefix) : defprefix,
        ignorePermissions: ownersid,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        defaultCooldown: 1e4,
        argumentDefaults: {
            prompt: {
                modifyStart: (_, str): string => `${str}\n\nType \`cancel\` to cancel the command...`,
                modifyRetry: (_, str): string => `${str}\n\nType \`cancel\` to cancel the command...`,
                timeout: "You took too long, the command has been canceled...",
                ended: "You exceeded the maximum amount of tries, the command has been canceled...",
                retries: 4,
                time: 3e4
            },
            otherwise: ""
        }
    });
    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "..", "listeners")
    });
    public constructor(config: BotOptions) {
        super({
            ownerID: ownersid,
            disabledEvents: ["TYPING_START"],
            shardCount: 1,
            disableEveryone: true
        });
        this.config = config;
    }
    private async _init(): Promise<void> {
        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            prrocess: process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();

        this.db = Database.get(databaseName);
        await this.db.connect();
        await this.db.synchronize();

        this.settings = new SettingsProvider(this.db.getRepository(Settings))
        await this.settings.init();
    }

    public async start(): Promise<string> {
        await this._init();
        return this.login(this.config.token);
    }
}