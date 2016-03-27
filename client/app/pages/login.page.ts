import {Component} from "angular2/core"
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from "angular2/common"
import {AuthorizationService} from "../services/authorization.service"
import {RouterLink} from 'angular2/router'

@Component({
    selector: 'login-page',
    directives: [FORM_DIRECTIVES, RouterLink],
    providers: [AuthorizationService],
    template: `
        <div class="authentification-box">
            <form class="form-auth" [ngFormModel]="loginForm">
                <input type="text" placeholder="Username" ngControl="username"/>
                <input type="password" placeholder="Password" ngControl="password"/>
                <div>
                    <button (click)="onLogin()"><span>Login</span></button>
                    <span>Do not have an account? <a [routerLink]="['RegisterPage']">register</a></span>
                </div>
                <div class="error-message">
                    {{errorMessage}}
                </div>
            </form>
        </div>
    `
})
export /**
 * LoginPage
 */
class LoginPage {
    private loginForm: ControlGroup;
    private errorMessage: string;
    
    constructor(public authorizationService: AuthorizationService) {            
        this.loginForm = new ControlGroup({
            username: new Control("", Validators.required),
            password: new Control("", Validators.required)
        });
    }
   
    onLogin() {
        if(this.loginForm.valid) {
            this.authorizationService.login(
                this.loginForm.value.username,
                this.loginForm.value.password).subscribe( 
                    response => {
                        if(response.json()['authToken'] && !response.json()['errorMessage']) {
                            this.authorizationService.storeSession(response.json()['authToken']);
                        }
                        else {
                            this.errorMessage = response.json()['errorMessage'];
                        }
                    }
               );
        }
    }
}