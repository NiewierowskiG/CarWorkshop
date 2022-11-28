import { Person } from './Person';

export class Client extends Person {

  public get nip(): number {
    return this._nip;
  }
  public set nip(value: number) {
    this._nip = value;
  }
  constructor(
    name: string,
    surname: string,
    telNr: string,
    email: string,
    private _nip: number
  ) {
    super(name, surname, telNr, email);
  }
  public override toJSON() {
    return {
      name:this.name,
      surname:this.surname,
      telNr:this.telNr,
      email:this.email,
      nip: this.nip,
      person: {
        name:this.name,
        surname:this.surname,
        telNr:this.telNr,
        email:this.email
      }
    };
  }


}
