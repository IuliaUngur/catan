import {Component} from "angular2/core"

@Component({
    selector: 'register-page',
    template: `
        
        <div class="authentification-box">
            <form class="form-auth">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button><span>Register</span></button>
            </form>
        </div>
       
    `
})
export /**
 * RegisterPage
 */
class RegisterPage {
    constructor() {
        
    }
}