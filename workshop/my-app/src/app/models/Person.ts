export abstract class Person{

  constructor(
    protected _name: string,
    protected _surname: string,
    protected _telNr: string,
    protected _email: string
  ) {}
  toJSON() {
    return {
      name:this.name,
      surname:this.surname,
      telNr:this.telNr,
      email:this.email,
    };
  }
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
