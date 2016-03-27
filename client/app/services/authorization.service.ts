import {Injectable} from "angular2/core"
import {ApplicationService} from "./application.service"
import {LocalStorage} from "../angular2-localstorage/LocalStorage";
import {Router} from "angular2/router";
import {Response} from "angular2/http"

@Injectable()
export /**
 * AuthorizationService
 */
class AuthorizationService extends ApplicationService {
    public static authToken:string = "";
    
    constructor(private _router: Router) {
        super("authorization");
        
        if(AuthorizationService.authToken !== "")
            _router.navigate(['LobbyPage']);
    }
    
    public registerUser(userName: string, password: string, name: string) {
        return this.post('registerUser', {userName: userName, password: password, name: name});
    }
    
    public login(userName: string, password: string) {
        return this.post('login', {userName: userName, password: password});
    }
    
    public logout() {
        this.post('logout', {authToken: AuthorizationService.authToken}).subscribe(
            (response: Response) => { 
                if(response.json()['success']) { 
                    AuthorizationService.authToken = ""; 
                    this._router.navigate(['LoginPage']); 
                } 
            }
        );
    }
    
    public storeSession(authToken: string) {
        AuthorizationService.authToken = authToken;
        this._router.navigate(['LobbyPage']);
    }
}