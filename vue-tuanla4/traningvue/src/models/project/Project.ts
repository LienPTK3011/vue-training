export class Project {
  public id: string = "";
  public code = "";
  public name = "";
  public description = "";
  public user_id = "";
  public startDate = "";
  public endDate = "";

  constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}
