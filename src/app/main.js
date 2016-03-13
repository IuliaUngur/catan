System.register(['angular2/platform/browser', './my.app', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, my_app_1, router_1;
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
            }],
        execute: function() {
            browser_1.bootstrap(my_app_1.MyApp, [router_1.ROUTER_BINDINGS]);
        }
    }
});
//# sourceMappingURL=main.js.map