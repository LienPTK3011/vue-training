export class Work {
  public id: string = "";
  public name_work = "";
  public description = "";

  constructor(init?: Partial<Work>) {
    Object.assign(this, init);
  }
}
