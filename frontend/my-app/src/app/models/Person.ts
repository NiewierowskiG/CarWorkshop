export class Person{
  constructor(
    private _fName: string,
    private _lName: string,
    private _telNr: string,
    private _email: string
  ) {}

  public get fName(): string {
    return this._fName;
  }

  public get email(): string {
    return this._email;
  }

  public get telNr(): string {
    return this._telNr;
  }

  public get lName(): string {
    return this._lName;
  }

}
