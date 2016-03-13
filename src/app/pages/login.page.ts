import {Component} from "angular2/core"

@Component({
    selector: 'login-page',
    template: `
        <div class="authentification-box">
            <form class="form-auth">
                <input type="email" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button><span>Login</span></button>
            </form>
        </div>
    `
})
export /**
 * LoginPage
 */
class LoginPage {
    constructor() {
        
    }
}