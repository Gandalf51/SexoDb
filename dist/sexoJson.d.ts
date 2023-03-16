export declare class sexoJson {
    private arq;
    /**
   * @name SexoDB
   * @description SexoDB constructor
   *
   * @param file string
   */
    constructor(arq: string);
    private content;
    private writeToFile;
    /**
   * @name cumAdd
   * @description Add an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    cumAdd(path: string, value?: number): Promise<void>;
    /**
   * @name blowjobSubtract
   * @description Subtract an value from key
   *
   * @param key string
   * @param value number | bigint
   */
    blowjobSubtract(path: string, value?: number): Promise<void>;
    /**
   * @name lustAll
   * @description List all of an type
   *
   * @param tipe
   */
    lustAll(): Record<string, unknown>;
    /**
   * @name boobsSet
   * @description Set an value of an key
   *
   * @param key string
   * @param value number | bigint
   */
    boobsSet(path: string, value: unknown): Promise<void>;
    /**
   * @name assDelete
   * @description Delete an key
   *
   * @param key string
   */
    assDelete(path: string): Promise<void>;
    /**
   * @name pussyGet
   * @description Get value from an key
   *
   * @param key string
   */
    pussyGet<T = unknown>(path: string): Promise<T>;
}
