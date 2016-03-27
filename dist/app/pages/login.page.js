System.register(["angular2/core", "angular2/common", "../services/authorization.service", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, authorization_service_1, router_1;
    var LoginPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginPage = (function () {
                function LoginPage(authorizationService) {
                    this.authorizationService = authorizationService;
                    this.loginForm = new common_1.ControlGroup({
                        username: new common_1.Control("", common_1.Validators.required),
                        password: new common_1.Control("", common_1.Validators.required)
                    });
                }
                LoginPage.prototype.onLogin = function () {
                    var _this = this;
                    if (this.loginForm.valid) {
                        this.authorizationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (response) {
                            if (response.json()['authToken'] && !response.json()['errorMessage']) {
                                _this.authorizationService.storeSession(response.json()['authToken']);
                            }
                            else {
                                _this.errorMessage = response.json()['errorMessage'];
                            }
                        });
                    }
                };
                LoginPage = __decorate([
                    core_1.Component({
                        selector: 'login-page',
                        directives: [common_1.FORM_DIRECTIVES, router_1.RouterLink],
                        providers: [authorization_service_1.AuthorizationService],
                        template: "\n        <div class=\"authentification-box\">\n            <form class=\"form-auth\" [ngFormModel]=\"loginForm\">\n                <input type=\"text\" placeholder=\"Username\" ngControl=\"username\"/>\n                <input type=\"password\" placeholder=\"Password\" ngControl=\"password\"/>\n                <div>\n                    <button (click)=\"onLogin()\"><span>Login</span></button>\n                    <span>Do not have an account? <a [routerLink]=\"['RegisterPage']\">register</a></span>\n                </div>\n                <div class=\"error-message\">\n                    {{errorMessage}}\n                </div>\n            </form>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [authorization_service_1.AuthorizationService])
                ], LoginPage);
                return LoginPage;
            }());
            exports_1("LoginPage", LoginPage);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9sb2dpbi5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQU9JLG1CQUFtQixvQkFBMEM7b0JBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7b0JBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBWSxDQUFDO3dCQUM5QixRQUFRLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ2pELENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDJCQUFPLEdBQVA7b0JBQUEsaUJBZUM7b0JBZEcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxRQUFROzRCQUNKLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2xFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pFLENBQUM7NEJBQ0QsSUFBSSxDQUFDLENBQUM7Z0NBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ3hELENBQUM7d0JBQ0wsQ0FBQyxDQUNMLENBQUM7b0JBQ1QsQ0FBQztnQkFDTCxDQUFDO2dCQWpETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLG1CQUFVLENBQUM7d0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO3dCQUNqQyxRQUFRLEVBQUUsMHFCQWNUO3FCQUNKLENBQUM7OzZCQUFBO2dCQStCRixnQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsaUNBOEJDLENBQUEiLCJmaWxlIjoiYXBwL3BhZ2VzL2xvZ2luLnBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxyXG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFUywgQ29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCJcclxuaW1wb3J0IHtBdXRob3JpemF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhvcml6YXRpb24uc2VydmljZVwiXHJcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvZ2luLXBhZ2UnLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgUm91dGVyTGlua10sXHJcbiAgICBwcm92aWRlcnM6IFtBdXRob3JpemF0aW9uU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRoZW50aWZpY2F0aW9uLWJveFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tYXV0aFwiIFtuZ0Zvcm1Nb2RlbF09XCJsb2dpbkZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBuZ0NvbnRyb2w9XCJ1c2VybmFtZVwiLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgbmdDb250cm9sPVwicGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9naW4oKVwiPjxzcGFuPkxvZ2luPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvIG5vdCBoYXZlIGFuIGFjY291bnQ/IDxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVnaXN0ZXJQYWdlJ11cIj5yZWdpc3RlcjwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tlcnJvck1lc3NhZ2V9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IC8qKlxyXG4gKiBMb2dpblBhZ2VcclxuICovXHJcbmNsYXNzIExvZ2luUGFnZSB7XHJcbiAgICBwcml2YXRlIGxvZ2luRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSkgeyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgb25Mb2dpbigpIHtcclxuICAgICAgICBpZih0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLmxvZ2luKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0udmFsdWUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZCkuc3Vic2NyaWJlKCBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmpzb24oKVsnYXV0aFRva2VuJ10gJiYgIXJlc3BvbnNlLmpzb24oKVsnZXJyb3JNZXNzYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2Uuc3RvcmVTZXNzaW9uKHJlc3BvbnNlLmpzb24oKVsnYXV0aFRva2VuJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5qc29uKClbJ2Vycm9yTWVzc2FnZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
