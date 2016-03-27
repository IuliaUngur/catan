System.register(['angular2/platform/browser', './my.app', 'angular2/router', 'angular2/http', './angular2-localstorage/LocalStorageEmitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, my_app_1, router_1, http_1, LocalStorageEmitter_1;
    var appPromise;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (my_app_1_1) {
                my_app_1 = my_app_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            }],
        execute: function() {
            // @Injectable()
            // export class DefaultRequestOptions extends BaseRequestOptions{
            //     headers:Headers = new Headers({
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     });
            // }
            appPromise = browser_1.bootstrap(my_app_1.MyApp, [
                router_1.ROUTER_BINDINGS,
                http_1.HTTP_PROVIDERS
            ]);
            LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFhSSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUGQsZ0JBQWdCO1lBQ2hCLGlFQUFpRTtZQUNqRSxzQ0FBc0M7WUFDdEMsOERBQThEO1lBQzlELFVBQVU7WUFDVixJQUFJO1lBRUEsVUFBVSxHQUFHLG1CQUFTLENBQUMsY0FBSyxFQUFFO2dCQUNoQix3QkFBZTtnQkFDZixxQkFBYzthQUNiLENBQUMsQ0FBQztZQUlyQiw0Q0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xyXG5pbXBvcnQge015QXBwfSBmcm9tICcuL215LmFwcCdcclxuaW1wb3J0IHtST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cCwgWEhSQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuaW1wb3J0IHtJbmplY3RhYmxlLCBwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5cclxuLy8gQEluamVjdGFibGUoKVxyXG4vLyBleHBvcnQgY2xhc3MgRGVmYXVsdFJlcXVlc3RPcHRpb25zIGV4dGVuZHMgQmFzZVJlcXVlc3RPcHRpb25ze1xyXG4vLyAgICAgaGVhZGVyczpIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuXHJcbnZhciBhcHBQcm9taXNlID0gYm9vdHN0cmFwKE15QXBwLCBbXHJcbiAgICAgICAgICAgICAgICAgIFJPVVRFUl9CSU5ESU5HUywgXHJcbiAgICAgICAgICAgICAgICAgIEhUVFBfUFJPVklERVJTXHJcbiAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuLy8gUmVnaXN0ZXIgbG9jYWwgc3RvcmFnZVxyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVN1YnNjcmliZXJ9IGZyb20gJy4vYW5ndWxhcjItbG9jYWxzdG9yYWdlL0xvY2FsU3RvcmFnZUVtaXR0ZXInO1xyXG5Mb2NhbFN0b3JhZ2VTdWJzY3JpYmVyKGFwcFByb21pc2UpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
