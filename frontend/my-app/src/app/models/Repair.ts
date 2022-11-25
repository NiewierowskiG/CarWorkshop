export class Repair{
    constructor(
      public cfname: string,
      public clname: string,
      public wfname: string,
      public wlname: string,
      public carvin: number,
      public carbrand: string,
      public carmodel: string,
      public carcolor: string,
      public price: number,
      public during: boolean,
      public done: boolean
    ) {}
  }
  