export class CarBrand{
  constructor(
    private _brandName: string
  ) {}
  public get brandName(): string {
    return this._brandName;
  }

}
