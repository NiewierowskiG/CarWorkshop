import { Car } from './Car';
export class SubstituteCar{
  constructor(
    private car:Car,
    private price:number,
    private isRented : boolean
  ){}
}
