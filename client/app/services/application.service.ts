import {HTTP_PROVIDERS, Http, RequestOptionsArgs, Headers, RequestOptions} from "angular2/http"
import {Injector} from "angular2/core"

export /**
 * ApplicationService
 */
class ApplicationService {
    private _http: Http;
    private _serviceBaseRouteName: string;
    
    constructor(serviceBaseRouteName: string) {
        let injector = Injector.resolveAndCreate([HTTP_PROVIDERS]);
        this._http = injector.get(Http);
        this._serviceBaseRouteName = '/api/' + serviceBaseRouteName + '/';
    }
    
    protected get(route: string, obj : any) {
        return this._http.get(this._serviceBaseRouteName + route, obj);
    }
    
    protected post(route: string, obj : any) {
        let body = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._serviceBaseRouteName + route, JSON.stringify(obj), options);
    }
    
    protected delete(route: string, obj : any) {
        return this._http.delete(this._serviceBaseRouteName + route, obj);
    }
    
    protected put(route: string, obj : any) {
        return this._http.put(this._serviceBaseRouteName + route, obj);
    }
    
    protected patch(route: string, obj : any) {
        return this._http.patch(this._serviceBaseRouteName + route, obj);
    }
    
    protected request(route: string, obj : any) {
        return this._http.request(this._serviceBaseRouteName + route, obj);
    }    
    
    protected head(route: string, obj : any) {
        return this._http.head(this._serviceBaseRouteName + route, obj);
    }    
}