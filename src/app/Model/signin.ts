export class SignIn {
    private email:string;
    private password:string;
    constructor(Email:string,Password:string){
        this.email=Email;
        this.password=Password;
    }
    getEmail(): string{
        return this.email;
    }
    getPassword():string{
        return this.password;
    }
    }