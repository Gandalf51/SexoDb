import mongoose, { ConnectOptions, Document } from 'mongoose';
interface DatabaseDocument extends Document {
    key: string;
    value: any;
}
export declare class sexoMongo<T extends DatabaseDocument> {
    private model;
    private connected;
    constructor(modelName: string, schemaOptions?: mongoose.SchemaOptions);
    connect(uri: string, options?: ConnectOptions): Promise<void>;
    cumAdd(key: string, value: T['value']): Promise<void>;
    pussyGet(key: string): Promise<T['value']>;
    assDelete(key: string): Promise<void>;
    blowjobSubtract(key: string, value: number): Promise<void>;
    lustAll(): Promise<T[]>;
    boobsSet(key: string, value: T['value']): Promise<void>;
}
export {};
