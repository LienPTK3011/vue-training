export class ProjectRequest {
  public id?: number;
  public name?: string;
  public pm?: string;
  public teamSize?: number;
  public customer?: string;
  constructor(init?: Partial<ProjectRequest>) {
    Object.assign(this, init);
  }
}
