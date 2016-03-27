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
    var RegisterPage;
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
            RegisterPage = (function () {
                function RegisterPage(authorizationService) {
                    this.authorizationService = authorizationService;
                    this.registerForm = new common_1.ControlGroup({
                        userName: new common_1.Control("", common_1.Validators.required),
                        password: new common_1.Control("", common_1.Validators.required),
                        name: new common_1.Control("", common_1.Validators.required)
                    });
                }
                RegisterPage.prototype.onRegisterUser = function () {
                    if (this.registerForm.valid) {
                        this.authorizationService.registerUser(this.registerForm.value.userName, this.registerForm.value.password, this.registerForm.value.name).subscribe(function (response) { return console.log(response); });
                    }
                };
                RegisterPage = __decorate([
                    core_1.Component({
                        selector: 'register-page',
                        directives: [common_1.FORM_DIRECTIVES, router_1.RouterLink],
                        providers: [authorization_service_1.AuthorizationService],
                        template: "\n        <div class=\"authentification-box\">\n            <form class=\"form-auth\" [ngFormModel]=\"registerForm\">\n                <input type=\"text\" placeholder=\"Name\" ngControl=\"name\"/>\n                <input type=\"text\" placeholder=\"Username\" ngControl=\"userName\"/>\n                <input type=\"password\" placeholder=\"Password\" ngControl=\"password\"/>\n                <div>\n                    <button (click)=\"onRegisterUser()\"><span>Register</span></button>\n                    <span>Already registered? <a [routerLink]=\"['LoginPage']\">login</a></span>\n                </div>\n            </form>\n        </div>\n       \n    "
                    }), 
                    __metadata('design:paramtypes', [authorization_service_1.AuthorizationService])
                ], RegisterPage);
                return RegisterPage;
            }());
            exports_1("RegisterPage", RegisterPage);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9yZWdpc3Rlci5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUtJLHNCQUFtQixvQkFBMEM7b0JBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7b0JBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQkFBWSxDQUFDO3dCQUNqQyxRQUFRLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUMsUUFBUSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQzlDLElBQUksRUFBRSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUM3QyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxxQ0FBYyxHQUFkO29CQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7b0JBQy9GLENBQUM7Z0JBQ0wsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxtQkFBVSxDQUFDO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQzt3QkFDakMsUUFBUSxFQUFFLHlwQkFhVDtxQkFDSixDQUFDOztnQ0FBQTtnQkFxQkYsbUJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVDQW9CQyxDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9yZWdpc3Rlci5wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcclxuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiXHJcbmltcG9ydCB7QXV0aG9yaXphdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLnNlcnZpY2VcIlxyXG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZWdpc3Rlci1wYWdlJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIFJvdXRlckxpbmtdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXV0aG9yaXphdGlvblNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aGVudGlmaWNhdGlvbi1ib3hcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWF1dGhcIiBbbmdGb3JtTW9kZWxdPVwicmVnaXN0ZXJGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBuZ0NvbnRyb2w9XCJuYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIG5nQ29udHJvbD1cInVzZXJOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25SZWdpc3RlclVzZXIoKVwiPjxzcGFuPlJlZ2lzdGVyPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFscmVhZHkgcmVnaXN0ZXJlZD8gPGEgW3JvdXRlckxpbmtdPVwiWydMb2dpblBhZ2UnXVwiPmxvZ2luPC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIGBcclxufSlcclxuZXhwb3J0IC8qKlxyXG4gKiBSZWdpc3RlclBhZ2VcclxuICovXHJcbmNsYXNzIFJlZ2lzdGVyUGFnZSB7XHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhvcml6YXRpb25TZXJ2aWNlOiBBdXRob3JpemF0aW9uU2VydmljZSkgeyAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSBuZXcgQ29udHJvbEdyb3VwKHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgIG5hbWU6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblJlZ2lzdGVyVXNlcigpIHtcclxuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyRm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhvcml6YXRpb25TZXJ2aWNlLnJlZ2lzdGVyVXNlcihcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5uYW1lKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
