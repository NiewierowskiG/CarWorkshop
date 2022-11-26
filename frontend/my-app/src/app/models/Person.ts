export class Person{

  constructor(
    private _name: string,
    private _surname: string,
    private _telNr: string,
    private _email: string
  ) {}
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get telNr(): string {
    return this._telNr;
  }
  public set telNr(value: string) {
    this._telNr = value;
  }
  public get surname(): string {
    return this._surname;
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

}
