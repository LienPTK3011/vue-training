export class ProjectResponse {
  public id?: number;
  public name?: string;
  public pm?: string;
  public teamSize?: number;
  public customer?: string;
  constructor(init?: Partial<ProjectResponse>) {
    Object.assign(this, init);
  }
}
