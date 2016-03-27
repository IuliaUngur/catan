import {bootstrap} from 'angular2/platform/browser'
import {MyApp} from './my.app'
import {ROUTER_BINDINGS} from 'angular2/router'
import {HTTP_PROVIDERS, Http, XHRBackend, BaseRequestOptions, Headers, RequestOptions} from 'angular2/http'
import {Injectable, provide} from 'angular2/core'

// @Injectable()
// export class DefaultRequestOptions extends BaseRequestOptions{
//     headers:Headers = new Headers({
//         'Content-Type': 'application/x-www-form-urlencoded'
//     });
// }

var appPromise = bootstrap(MyApp, [
                  ROUTER_BINDINGS, 
                  HTTP_PROVIDERS
                  ]);

// Register local storage
import {LocalStorageSubscriber} from './angular2-localstorage/LocalStorageEmitter';
LocalStorageSubscriber(appPromise);