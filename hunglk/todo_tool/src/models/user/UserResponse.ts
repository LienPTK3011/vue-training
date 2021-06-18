export class UserResponse {
  public id?: number;
  public projectId?: number;
  public userName?: string;
  public fullName?: string;
  public age?: number;
  public gender?: string;
  public address?: string;
  public email?: string;
  public phoneNumber?: number;
  public password?: string;
  public experience?: number;
  constructor(init?: Partial<UserResponse>) {
    Object.assign(this, init);
  }
}
