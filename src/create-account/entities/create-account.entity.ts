import { randomUUID } from 'crypto';

export class CreateAccountEntity {
  private _id: string;
  private _email: string;
  private _password: string;

  constructor(email: string, password: string) {
    this._id = randomUUID();
    this._email = email;
    this._password = password;
  }

  public get id(): string {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public setEmail(value: string) {
    this._email = value;
  }

  public setPassword(value: string) {
    this._password = value;
  }
}
