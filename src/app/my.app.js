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
                        new router_1.Route({ path: '/login-page', component: login_page_1.LoginPage, name: 'LoginPage' }),
                        new router_1.Route({ path: '/register-page', component: register_page_1.RegisterPage, name: 'RegisterPage' }),
                        new router_1.Route({ path: '/lobby-page', component: lobby_page_1.LobbyPage, name: 'LobbyPage' }),
                        new router_1.Route({ path: '/game-page', component: game_page_1.GamePage, name: 'GamePage' })
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.RouterLink, router_1.RouterOutlet],
                        template: "\n    <nav class=\"page-link-button-wrapper\">\n        <a [routerLink]=\"['LoginPage']\" class=\"page-link-button\">Login</a>\n        <a [routerLink]=\"['RegisterPage']\" class=\"page-link-button\">Register</a>\n        <a [routerLink]=\"['LobbyPage']\" class=\"page-link-button\">Lobby</a>\n        <a [routerLink]=\"['GamePage']\" class=\"page-link-button\">Game</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            }());
            exports_1("MyApp", MyApp);
        }
    }
});
//# sourceMappingURL=my.app.js.map