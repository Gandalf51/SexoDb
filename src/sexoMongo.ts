import mongoose, { ConnectOptions, Document, Model } from 'mongoose';

interface DatabaseDocument extends Document {
    key: string;
    value: any;
}

export class sexoMongo<T extends DatabaseDocument> {
    private model: Model<T>;
    private connected: boolean = false;

    constructor(modelName: string, schemaOptions?: mongoose.SchemaOptions) {
        const schema = new mongoose.Schema(
            {
                key: {
                    type: String,
                    required: true,
                    unique: true,
                },
                value: {
                    type: mongoose.Schema.Types.Mixed,
                    required: true,
                },
            },
            schemaOptions ?? {}
        );

        this.model = mongoose.model<T>(modelName, schema);
    }

    public async connect(uri: string, options?: ConnectOptions): Promise<void> {
        if (this.connected) {
            return;
        }
        try {
            await mongoose.connect(uri, {
                ...options,
                connectTimeoutMS: 5000, // 5 segundos de tempo limite para conexão
            });
            this.connected = true;
        } catch (error) {
            throw new Error(`Failed to connect to database: ${error}`);
        }
    }

    public async cumAdd(key: string, value: T['value']): Promise<void> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const document = new this.model({ key, value });
            await document.save();
        } catch (error) {
            throw new Error(`Failed to add document: ${error}`);
        }
    }

    public async pussyGet(key: string): Promise<T['value']> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const document = await this.model.findOne({ key });
            if (!document) {
                throw new Error(`Failed to find document with key: ${key}`);
            }
            return document.value;
        } catch (error) {
            throw new Error(`Failed to get document: ${error}`);
        }
    }

    public async assDelete(key: string): Promise<void> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const result = await this.model.deleteOne({ key });
            if (result.deletedCount === 0) {
                throw new Error(`Failed to remove document with key: ${key}`);
            }
        } catch (error) {
            console.error(`Failed to remove document: ${error}`);
            throw error;
        }
    }

    public async blowjobSubtract(key: string, value: number): Promise<void> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const document = await this.model.findOne({ key });
            if (!document) {
                throw new Error(`Failed to find document with key: ${key}`);
            }
            const newValue = document.value - value;
            document.set({ value: newValue });
            await document.save();
        } catch (error) {
            throw new Error(`Failed to subtract from document: ${error}`);
        }
    }

    public async lustAll(): Promise<T[]> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const documents = await this.model.find({});
            return documents;
        } catch (error) {
            throw new Error(`Failed to get all documents: ${error}`);
        }
    }

    public async boobsSet(key: string, value: T['value']): Promise<void> {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        try {
            const document = await this.model.findOne({ key });
            if (!document) {
                throw new Error(`Failed to find document with key: ${key}`);
            }
            document.set({ value });
            await document.save();
        } catch (error) {
            throw new Error(`Failed to set document: ${error}`);
        }
    }
}
