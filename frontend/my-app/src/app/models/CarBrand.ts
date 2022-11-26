export class CarBrand{
  constructor(
    private _name: string
  ) {}
  public get name(): string {
    return this._name;
  }

  toJSON() {
    return {
      name: this.name,
    };
  }
}
