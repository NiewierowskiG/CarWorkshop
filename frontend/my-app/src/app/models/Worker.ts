import { Person } from './Person';
import { Position } from './Position';
export class Worker extends Person {
  constructor(
    private _position: Position,
    private _salary: number,
    name: string,
    surname: string,
    telNr: string,
    email: string
  ) {
    super(name, surname, telNr, email);
  }
  public get salary(): number {
    return this._salary;
  }
  public get position(): Position {
    return this._position;
  }
}

