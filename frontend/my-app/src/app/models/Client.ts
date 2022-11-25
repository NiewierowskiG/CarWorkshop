import { Person } from './Person';

export class Client extends Person{
  constructor(
    fName: string,
    lName: string,
    telNr: string,
    email: string,
    private _nip: number
  ) {
    super(fName,lName,telNr,email);
  }
  public get nip(): number {
    return this._nip;
  }
}
