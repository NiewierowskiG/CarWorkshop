import { CarBrand } from "./CarBrand";

export class CarModel{
  constructor(
    private _modelName: string,
    private _brandName: CarBrand,
    private _prodYearStart: number,
    private _prodYearEnd: number
  ) {
  }
  public get modelName(): string {
    return this._modelName;
  }

  public get prodYearEnd(): number {
    return this._prodYearEnd;
  }

  public get prodYearStart(): number {
    return this._prodYearStart;
  }

  public get brandName(): CarBrand {
    return this._brandName;
  }


}
