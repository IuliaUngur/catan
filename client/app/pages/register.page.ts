import {Component} from "angular2/core"
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from "angular2/common"
import {AuthorizationService} from "../services/authorization.service"
import {RouterLink} from 'angular2/router'
import {Response} from 'angular2/http'

@Component({
    selector: 'register-page',
    directives: [FORM_DIRECTIVES, RouterLink],
    providers: [AuthorizationService],
    template: `
        <div class="authentification-box">
            <form class="form-auth" [ngFormModel]="registerForm">
                <input type="text" placeholder="Name" ngControl="name"/>
                <input type="text" placeholder="Username" ngControl="userName"/>
                <input type="password" placeholder="Password" ngControl="password"/>
                <div>
                    <button (click)="onRegisterUser()"><span>Register</span></button>
                    <span>Already registered? <a [routerLink]="['LoginPage']">login</a></span>
                </div>
            </form>
        </div>
       
    `
})
export /**
 * RegisterPage
 */
class RegisterPage {
    private registerForm: ControlGroup;
    constructor(public authorizationService: AuthorizationService) {           
        this.registerForm = new ControlGroup({
            userName: new Control("", Validators.required),
            password: new Control("", Validators.required),
            name: new Control("", Validators.required)
        });
    }
    onRegisterUser() {
        if(this.registerForm.valid) {
            this.authorizationService.registerUser(
                this.registerForm.value.userName,
                this.registerForm.value.password,
                this.registerForm.value.name).subscribe((response: Response) => console.log(response));
        }
    }
}