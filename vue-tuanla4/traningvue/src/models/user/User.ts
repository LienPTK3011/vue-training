export class User {
    public id: string = '';
    public user_name = '';
    public full_name = '';
    public email = '';
    public sex = '';
    public work_id = '';
    public pass = '';
    public online = '';
    
    constructor(init?: Partial<User>) {
    Object.assign(this, init);
    }
    }