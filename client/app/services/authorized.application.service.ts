import {ApplicationService} from "./application.service"
import {AuthorizationService} from "./authorization.service"

export /**
 * AuthorizedApplicationService
 */
class AuthorizedApplicationService extends ApplicationService {
    
    constructor(serviceBaseRouteName: string) {
        super(serviceBaseRouteName);
        
        if(AuthorizationService.authToken === undefined || 
           AuthorizationService.authToken === null || 
           AuthorizationService.authToken === "" ) {
           console.log("Authorization failed, authToken not found!");
        }
    }
    
    protected get(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.get(route, obj);
    }
    
    protected post(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.post(route, obj);
    }
    
    protected delete(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.delete(route, obj);
    }
    
    protected put(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.put(route, obj);
    }
    
    protected patch(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.patch(route, obj);
    }
    
    protected request(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.request(route, obj);
    }    
    
    protected head(route: string, obj : any) {
        obj['authToken'] = AuthorizationService.authToken; 
        return this.head(route, obj);
    }    
}