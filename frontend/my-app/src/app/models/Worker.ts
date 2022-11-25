import { Person } from './Person';
import { Position } from './Position';
export class Worker extends Person {
    constructor(
      fName: string,
      lName: string,
      telNr: string,
      email: string,
      private _position: Position,
      private _salary: number
    ) {
      super(fName,lName,telNr,email);
    }
    public get salary(): number {
      return this._salary;
    }
    public get position(): Position {
      return this._position;
    }
  }

