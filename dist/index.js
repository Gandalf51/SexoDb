import { writeFileSync, readFileSync, existsSync } from "node:fs";
export class sexoDB {
    /**
   * @name SexoDB
   * @description SexoDB constructor
   *
   * @param file string
   */
    constructor(arq) {
        Object.defineProperty(this, "arq", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: arq
        });
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (!arq.endsWith(".json")) {
            throw new Error("The file must be a JSON file.");
        }
        if (!existsSync(arq)) {
            writeFileSync(arq, "{}");
        }
        try {
            this.content = JSON.parse(readFileSync(arq).toString());
        }
        catch (error) {
            throw new Error(`Error loading JSON database: ${error}`);
        }
    }
    async writeToFile() {
        writeFileSync(this.arq, JSON.stringify(this.content, null, 2));
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
//# sourceMappingURL=index.js.map