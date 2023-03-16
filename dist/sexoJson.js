"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexoJson = void 0;
const node_fs_1 = require("node:fs");
class sexoJson {
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
    writeToFile() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, node_fs_1.writeFileSync)(this.arq, JSON.stringify(this.content, null, 2));
        });
    }
    /**
   * @name cumAdd
   * @description Add an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    cumAdd(path, value) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                throw new Error("The key path is mandatory.");
            }
            if (typeof value !== "number") {
                value = 1;
            }
            this.content[path] = ((_a = this.content[path]) !== null && _a !== void 0 ? _a : 0) + value;
            yield this.writeToFile();
        });
    }
    /**
   * @name blowjobSubtract
   * @description Subtract an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    blowjobSubtract(path, value) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                throw new Error("The key path is mandatory.");
            }
            if (typeof value !== "number") {
                value = 1;
            }
            this.content[path] = ((_a = this.content[path]) !== null && _a !== void 0 ? _a : 0) - value;
            yield this.writeToFile();
        });
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
    boobsSet(path, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                throw new Error("The key path is mandatory.");
            }
            this.content[path] = value;
            yield this.writeToFile();
        });
    }
    /**
   * @name assDelete
   * @description Delete an key
   *
   * @param key string
   */
    assDelete(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                throw new Error("The key path is mandatory.");
            }
            delete this.content[path];
            yield this.writeToFile();
        });
    }
    /**
   * @name pussyGet
   * @description Get value from an key
   *
   * @param key string
   */
    pussyGet(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!path) {
                throw new Error("The key path is mandatory.");
            }
            return this.content[path];
        });
    }
}
exports.sexoJson = sexoJson;
