"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexoDB = void 0;
const node_fs_1 = require("node:fs");
class sexoDB {
    arq;
    /**
   * @name SexoDB
   * @description SexoDB constructor
   *
   * @param file string
   */
    constructor(arq) {
        this.arq = arq;
        if (!arq.endsWith(".json")) {
            throw new Error("The file must be a JSON file.");
        }
        if (!(0, node_fs_1.existsSync)(arq)) {
            (0, node_fs_1.writeFileSync)(arq, "{}");
        }
        try {
            this.content = JSON.parse((0, node_fs_1.readFileSync)(arq).toString());
        }
        catch (error) {
            throw new Error(`Error loading JSON database: ${error}`);
        }
    }
    content;
    async writeToFile() {
        (0, node_fs_1.writeFileSync)(this.arq, JSON.stringify(this.content, null, 2));
    }
    /**
   * @name cumAdd
   * @description Add an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    async cumAdd(path, value) {
        if (!path) {
            throw new Error("The key path is mandatory.");
        }
        if (typeof value !== "number") {
            value = 1;
        }
        this.content[path] = (this.content[path] ?? 0) + value;
        await this.writeToFile();
    }
    /**
   * @name blowjobSubtract
   * @description Subtract an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    async blowjobSubtract(path, value) {
        if (!path) {
            throw new Error("The key path is mandatory.");
        }
        if (typeof value !== "number") {
            value = 1;
        }
        this.content[path] = (this.content[path] ?? 0) - value;
        await this.writeToFile();
    }
    /**
   * @name lustAll
   * @description List all of an type
   *
   * @param tipe
   */
    lustAll() {
        return this.content;
    }
    /**
   * @name boobsSet
   * @description Set an value of an key
   *
   * @param key string
   * @param value number | bigint
   */
    async boobsSet(path, value) {
        if (!path) {
            throw new Error("The key path is mandatory.");
        }
        this.content[path] = value;
        await this.writeToFile();
    }
    /**
   * @name assDelete
   * @description Delete an key
   *
   * @param key string
   */
    async assDelete(path) {
        if (!path) {
            throw new Error("The key path is mandatory.");
        }
        delete this.content[path];
        await this.writeToFile();
    }
    /**
   * @name pussyGet
   * @description Get value from an key
   *
   * @param key string
   */
    async pussyGet(path) {
        if (!path) {
            throw new Error("The key path is mandatory.");
        }
        return this.content[path];
    }
}
exports.sexoDB = sexoDB;
//# sourceMappingURL=index.js.map