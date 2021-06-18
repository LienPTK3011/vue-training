export class UserRequest {
  public id?: number;
  public projectId?: number;
  public userName?: string;
  public fullName?: string;
  public age?: number;
  public gender?: string;
  public address?: string;
  public email?: string;
  public phoneNumber?: number;
  public experience?: number;
  constructor(init?: Partial<UserRequest>) {
    Object.assign(this, init);
  }
}
