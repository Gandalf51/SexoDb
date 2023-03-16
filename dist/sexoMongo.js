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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexoMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class sexoMongo {
    constructor(modelName, schemaOptions) {
        this.connected = false;
        const schema = new mongoose_1.default.Schema({
            key: {
                type: String,
                required: true,
                unique: true,
            },
            value: {
                type: mongoose_1.default.Schema.Types.Mixed,
                required: true,
            },
        }, schemaOptions !== null && schemaOptions !== void 0 ? schemaOptions : {});
        this.model = mongoose_1.default.model(modelName, schema);
    }
    connect(uri, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connected) {
                return;
            }
            try {
                yield mongoose_1.default.connect(uri, Object.assign(Object.assign({}, options), { connectTimeoutMS: 5000 }));
                this.connected = true;
            }
            catch (error) {
                throw new Error(`Failed to connect to database: ${error}`);
            }
        });
    }
    cumAdd(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const document = new this.model({ key, value });
                yield document.save();
            }
            catch (error) {
                throw new Error(`Failed to add document: ${error}`);
            }
        });
    }
    pussyGet(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const document = yield this.model.findOne({ key });
                if (!document) {
                    throw new Error(`Failed to find document with key: ${key}`);
                }
                return document.value;
            }
            catch (error) {
                throw new Error(`Failed to get document: ${error}`);
            }
        });
    }
    assDelete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const result = yield this.model.deleteOne({ key });
                if (result.deletedCount === 0) {
                    throw new Error(`Failed to remove document with key: ${key}`);
                }
            }
            catch (error) {
                console.error(`Failed to remove document: ${error}`);
                throw error;
            }
        });
    }
    blowjobSubtract(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const document = yield this.model.findOne({ key });
                if (!document) {
                    throw new Error(`Failed to find document with key: ${key}`);
                }
                const newValue = document.value - value;
                document.set({ value: newValue });
                yield document.save();
            }
            catch (error) {
                throw new Error(`Failed to subtract from document: ${error}`);
            }
        });
    }
    lustAll() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const documents = yield this.model.find({});
                return documents;
            }
            catch (error) {
                throw new Error(`Failed to get all documents: ${error}`);
            }
        });
    }
    boobsSet(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error('Not connected to database');
            }
            try {
                const document = yield this.model.findOne({ key });
                if (!document) {
                    throw new Error(`Failed to find document with key: ${key}`);
                }
                document.set({ value });
                yield document.save();
            }
            catch (error) {
                throw new Error(`Failed to set document: ${error}`);
            }
        });
    }
}
exports.sexoMongo = sexoMongo;
