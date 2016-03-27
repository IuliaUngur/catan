System.register(['angular2/core', 'angular2/router', './pages/login.page', './pages/register.page', './pages/lobby.page', './pages/game.page'], function(exports_1, context_1) {
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
    var core_1, router_1, login_page_1, register_page_1, lobby_page_1, game_page_1;
    var MyApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_page_1_1) {
                login_page_1 = login_page_1_1;
            },
            function (register_page_1_1) {
                register_page_1 = register_page_1_1;
            },
            function (lobby_page_1_1) {
                lobby_page_1 = lobby_page_1_1;
            },
            function (game_page_1_1) {
                game_page_1 = game_page_1_1;
            }],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                }
                MyApp = __decorate([
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/login-page', component: login_page_1.LoginPage, name: 'LoginPage', useAsDefault: true }),
                        new router_1.Route({ path: '/register-page', component: register_page_1.RegisterPage, name: 'RegisterPage' }),
                        new router_1.Route({ path: '/lobby-page', component: lobby_page_1.LobbyPage, name: 'LobbyPage' }),
                        new router_1.Route({ path: '/game-page', component: game_page_1.GamePage, name: 'GamePage' })
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.RouterLink, router_1.RouterOutlet],
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            }());
            exports_1("MyApp", MyApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teS5hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBQXFCLENBQUM7Z0JBYnRCO29CQUFDLG9CQUFXLENBQUM7d0JBQ1QsSUFBSSxjQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxzQkFBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUM5RixJQUFJLGNBQUssQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUM7d0JBQ25GLElBQUksY0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsc0JBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7d0JBQ3pFLElBQUksY0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsb0JBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7cUJBQ3hFLENBQUM7b0JBQ0QsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsbUJBQVUsRUFBRSxxQkFBWSxDQUFDO3dCQUN0QyxRQUFRLEVBQUUsMkNBRVg7cUJBQ0YsQ0FBQzs7eUJBQUE7Z0JBQ21CLFlBQUM7WUFBRCxDQUFyQixBQUFzQixJQUFBO1lBQXRCLHlCQUFzQixDQUFBIiwiZmlsZSI6ImFwcC9teS5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlLCBSb3V0ZXJMaW5rLCBSb3V0ZXIsIFJvdXRlck91dGxldH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSAnLi9wYWdlcy9sb2dpbi5wYWdlJ1xyXG5pbXBvcnQge1JlZ2lzdGVyUGFnZX0gZnJvbSAnLi9wYWdlcy9yZWdpc3Rlci5wYWdlJ1xyXG5pbXBvcnQge0xvYmJ5UGFnZX0gZnJvbSAnLi9wYWdlcy9sb2JieS5wYWdlJ1xyXG5pbXBvcnQge0dhbWVQYWdlfSBmcm9tICcuL3BhZ2VzL2dhbWUucGFnZSdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICBuZXcgUm91dGUoe3BhdGg6ICcvbG9naW4tcGFnZScsIGNvbXBvbmVudDogTG9naW5QYWdlLCBuYW1lOiAnTG9naW5QYWdlJywgdXNlQXNEZWZhdWx0OiB0cnVlIH0pLFxyXG4gICAgbmV3IFJvdXRlKHtwYXRoOiAnL3JlZ2lzdGVyLXBhZ2UnLCBjb21wb25lbnQ6IFJlZ2lzdGVyUGFnZSwgbmFtZTogJ1JlZ2lzdGVyUGFnZScgfSksXHJcbiAgICBuZXcgUm91dGUoe3BhdGg6ICcvbG9iYnktcGFnZScsIGNvbXBvbmVudDogTG9iYnlQYWdlLCBuYW1lOiAnTG9iYnlQYWdlJ30pLFxyXG4gICAgbmV3IFJvdXRlKHtwYXRoOicvZ2FtZS1wYWdlJywgY29tcG9uZW50OiBHYW1lUGFnZSwgbmFtZTogJ0dhbWVQYWdlJ30pXHJcbl0pXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmssIFJvdXRlck91dGxldF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE15QXBwIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
