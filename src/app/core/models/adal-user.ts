export class AdalUser {
    authenticated: boolean;
    name: string;
    profile: any;

    constructor(authenticated: boolean, user: any) {
        this.authenticated = authenticated;
        if(user) {
            this.name = user.userName;
            this.profile = user.profile;
        } else {
            this.name = '';
            this.profile = {};
        }
    }
}
