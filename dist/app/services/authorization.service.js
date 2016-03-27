System.register(["angular2/core", "./application.service", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, application_service_1, router_1;
    var AuthorizationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (application_service_1_1) {
                application_service_1 = application_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthorizationService = (function (_super) {
                __extends(AuthorizationService, _super);
                function AuthorizationService(_router) {
                    _super.call(this, "authorization");
                    this._router = _router;
                    if (AuthorizationService.authToken !== "")
                        _router.navigate(['LobbyPage']);
                }
                AuthorizationService.prototype.registerUser = function (userName, password, name) {
                    return this.post('registerUser', { userName: userName, password: password, name: name });
                };
                AuthorizationService.prototype.login = function (userName, password) {
                    return this.post('login', { userName: userName, password: password });
                };
                AuthorizationService.prototype.logout = function () {
                    var _this = this;
                    this.post('logout', { authToken: AuthorizationService.authToken }).subscribe(function (response) {
                        if (response.json()['success']) {
                            AuthorizationService.authToken = "";
                            _this._router.navigate(['LoginPage']);
                        }
                    });
                };
                AuthorizationService.prototype.storeSession = function (authToken) {
                    AuthorizationService.authToken = authToken;
                    this._router.navigate(['LobbyPage']);
                };
                AuthorizationService.authToken = "";
                AuthorizationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AuthorizationService);
                return AuthorizationService;
            }(application_service_1.ApplicationService));
            exports_1("AuthorizationService", AuthorizationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdtQyx3Q0FBa0I7Z0JBR2pELDhCQUFvQixPQUFlO29CQUMvQixrQkFBTSxlQUFlLENBQUMsQ0FBQztvQkFEUCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUcvQixFQUFFLENBQUEsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDO3dCQUNyQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFTSwyQ0FBWSxHQUFuQixVQUFvQixRQUFnQixFQUFFLFFBQWdCLEVBQUUsSUFBWTtvQkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUVNLG9DQUFLLEdBQVosVUFBYSxRQUFnQixFQUFFLFFBQWdCO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO2dCQUVNLHFDQUFNLEdBQWI7b0JBQUEsaUJBU0M7b0JBUkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3RFLFVBQUMsUUFBa0I7d0JBQ2YsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsb0JBQW9CLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs0QkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDO29CQUNMLENBQUMsQ0FDSixDQUFDO2dCQUNOLENBQUM7Z0JBRU0sMkNBQVksR0FBbkIsVUFBb0IsU0FBaUI7b0JBQ2pDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkEvQmEsOEJBQVMsR0FBVSxFQUFFLENBQUM7Z0JBTHhDO29CQUFDLGlCQUFVLEVBQUU7O3dDQUFBO2dCQXFDYiwyQkFBQztZQUFELENBcENBLEFBb0NDLENBakNrQyx3Q0FBa0IsR0FpQ3BEO1lBcENELHVEQW9DQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcclxuaW1wb3J0IHtBcHBsaWNhdGlvblNlcnZpY2V9IGZyb20gXCIuL2FwcGxpY2F0aW9uLnNlcnZpY2VcIlxyXG5pbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSBcIi4uL2FuZ3VsYXIyLWxvY2Fsc3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgLyoqXHJcbiAqIEF1dGhvcml6YXRpb25TZXJ2aWNlXHJcbiAqL1xyXG5jbGFzcyBBdXRob3JpemF0aW9uU2VydmljZSBleHRlbmRzIEFwcGxpY2F0aW9uU2VydmljZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGF1dGhUb2tlbjpzdHJpbmcgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHN1cGVyKFwiYXV0aG9yaXphdGlvblwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihBdXRob3JpemF0aW9uU2VydmljZS5hdXRoVG9rZW4gIT09IFwiXCIpXHJcbiAgICAgICAgICAgIF9yb3V0ZXIubmF2aWdhdGUoWydMb2JieVBhZ2UnXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyByZWdpc3RlclVzZXIodXNlck5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgncmVnaXN0ZXJVc2VyJywge3VzZXJOYW1lOiB1c2VyTmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkLCBuYW1lOiBuYW1lfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dpbih1c2VyTmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnbG9naW4nLCB7dXNlck5hbWU6IHVzZXJOYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLnBvc3QoJ2xvZ291dCcsIHthdXRoVG9rZW46IEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbn0pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmpzb24oKVsnc3VjY2VzcyddKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbiA9IFwiXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luUGFnZSddKTsgXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0b3JlU2Vzc2lvbihhdXRoVG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbiA9IGF1dGhUb2tlbjtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2JieVBhZ2UnXSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
