import { JsonPipe } from '@angular/common';
import { Person } from './Person';
import { Position } from './Position';
export class Worker extends Person {
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this._salary = value;
  }
  public get position(): Position {
    return this._position;
  }
  public set position(value: Position) {
    this._position = value;
  }
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

   override toJSON() {
    return {
      name:this.name,
      surname:this.surname,
      telNr:this.telNr,
      email:this.email,
      position: this.position,
      salary: this.salary,
      person: {
        name:this.name,
        surname:this.surname,
        telNr:this.telNr,
        email:this.email,
      }
    };
  }
}

