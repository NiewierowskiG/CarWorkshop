import { Person } from './Person';

export class Client extends Person {
  constructor(
    name: string,
    surname: string,
    telNr: string,
    email: string,
    private _nip: number
  ) {
    super(name, surname, telNr, email);
  }
  public get nip(): number {
    return this._nip;
  }

}
