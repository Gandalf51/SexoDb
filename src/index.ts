import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs';
import { add, subtract } from 'mathjs'

export default class sexoDb {
  private file: string;
  private content: Record<string, number | bigint>;
  private key: number | bigint
  private value: number | bigint

  /**
   * @name SexoDB
   * @description SexoDB constructor
   *
   * @param file string
   */
  constructor(file: string) {
    this.file = file
    this.content = {}
    this.key = this.content[0]
    this.value = 0
  }

  /**
   * @name initialize
   * @description Initialize the database
   *
   */
  async initialize() {
    // If the file name don't have JSON, error!
    if (!this.file.endsWith('.json')) throw new Error('The file name, need to the be an JSON!');
    if (!existsSync(this.file)) await writeFile(this.file, '{}');

    try {
      // Read content from file and put it's on an Buffer
      this.content = JSON.parse(await readFile(this.file, { encoding: 'utf-8' }));
    } catch (error: unknown) {
      // If the file has an error, throw this
      throw new Error(`Error when loading SexoDB: ${error}`);
    }
  }

  /**
   * @name cumAdd
   * @description Add an value from key
   *
   * @param key string
   * @param value number | bigint
   */
  async cumAdd(key: string, value: number | bigint) {
    if (!key) throw new SyntaxError('You don\'t provide an key!');
    if (!value) throw new SyntaxError('You don\'t provide an value!');

    if (!this.content[key]) throw new ReferenceError('This key don\' exists!')

    switch (typeof value) {
      case 'number': break;
      case 'bigint': break;
      default: throw new TypeError(`Expected value is 'number' or 'bigint', but received ${typeof value}`);
    }

    this.key = Number(this.content[key]);
    this.value = Number(value);

    this.content[key] = add(this.key, this.value);
    await writeFile(this.file, JSON.stringify(this.content));
  }

  /**
   * @name blowjobSubtract
   * @description Subtract an value from key
   *
   * @param key string
   * @param value number | bigint
   */
  async blowjobSubtract(key: string, value: number | bigint) {
    if (!key) throw new SyntaxError('You don\'t provide an key!');
    if (!value) throw new SyntaxError('You don\'t provide an value!');

    if (!this.content[key]) throw new ReferenceError('This key don\' exists!')

    switch (typeof value) {
      case 'number': break;
      case 'bigint': break;
      default: throw new TypeError(`Expected value is 'number' or 'bigint', but received ${typeof value}`);
    }

    this.key = Number(this.content[key]);
    this.value = Number(value);

    this.content[key] = subtract(this.key, this.value);
    await writeFile (this.file, JSON.stringify(this.content));
  }

  /**
   * @name boobsSet
   * @description Set an value of an key
   *
   * @param key string
   * @param value number | bigint
   */
  async boobsSet(key: string, value: number | bigint) {
    if (!key) throw new SyntaxError('You don\'t provide an key!');
    if (!value) throw new SyntaxError('You don\'t provide an value!');

    switch (typeof value) {
      case 'number': break;
      case 'bigint': break;
      default: throw new TypeError(`Expected value is 'number' or 'bigint', but received ${typeof value}`);
    }

    this.content[key] = Number(value);
    await writeFile(this.file, JSON.stringify(this.content));
  }

  /**
   * @name lustAll
   * @description List all of an type
   *
   * @param tipe
   */

  lustAll(tipe?:
    | 'all'
    | 'values'
    | 'keys'
    | 'object'
  ) {
    switch (tipe) {
      case 'all': return Object.entries(this.content);
      case 'values': return Object.values(this.content);
      case 'keys': return Object.keys(this.content);

      case 'object': return this.content;
      default: return this.content;
    };
  }

  /**
   * @name assDelete
   * @description Delete an key
   *
   * @param key string
   */
  async assDelete(key: string) {
    if (!key) throw new SyntaxError('You don\'t provide an key!');

    delete this.content[key];
    await writeFile(this.file, JSON.stringify(this.content));
  }

  /**
   * @name pussyGet
   * @description Get value from an key
   *
   * @param key string
   */
  pussyGet(key: string) {
    if (!key) throw new SyntaxError('You don\'t provide an key!');
    if (!this.content[key]) throw new ReferenceError('This don\'t exists!');

    return this.content[key];
  }

  // metodo privado NÂO TIRA ESSA PORRA FDP
  private _fds(op: string, mt: unknown) {
    throw new Error(`Opção ${op} falta metodo ${mt}`)
  }
}
