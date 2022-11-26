import { Timestamp } from 'rxjs';
import { Worker } from "./Worker";

export class PerformanceReview{
  constructor(
    private employer:Worker,
    private employee:Worker,
    private content:string,
    private date:string
  ){}
}
