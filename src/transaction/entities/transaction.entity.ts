import { randomUUID } from 'crypto';

export class TransactionEntity {
  private _id: string;
  private _title: string;
  private _value: string;
  private _type: string;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(title: string, value: string, type?: string) {
    const isValid = this.validateType(type);
    if (!isValid) {
      throw new Error('Invalid type');
    }
    this._id = randomUUID();
    this._title = title;
    this._value = value;
    this._type = type || 'income';
    this._created_at = new Date();
    this._updated_at = new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get value(): string {
    return this._value;
  }

  public get type(): string {
    return this._type;
  }

  public get created_at(): Date {
    return this._created_at;
  }

  public get updated_at(): Date {
    return this._updated_at;
  }

  public setTitle(value: string) {
    this._title = value;
  }

  public setValue(value: string) {
    this._value = value;
  }

  public setType(value: string) {
    this._type = value;
  }

  private validateType(value: string): boolean {
    return ['income', 'outcome'].includes(value);
  }
}
