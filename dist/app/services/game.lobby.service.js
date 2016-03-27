System.register(["angular2/core", "angular2/router", "./authorized.application.service"], function(exports_1, context_1) {
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
    var core_1, router_1, authorized_application_service_1;
    var GameLobbyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authorized_application_service_1_1) {
                authorized_application_service_1 = authorized_application_service_1_1;
            }],
        execute: function() {
            GameLobbyService = (function (_super) {
                __extends(GameLobbyService, _super);
                function GameLobbyService(_router) {
                    _super.call(this, "game-lobby");
                    this._router = _router;
                    this._lobbyGames = [];
                    // this._updateLobbyGames();
                }
                GameLobbyService.prototype.getLobbyGames = function () {
                    return this._lobbyGames;
                };
                GameLobbyService.prototype._updateLobbyGames = function () {
                    this.get('', {}).subscribe(function (response) { console.log(response); });
                };
                GameLobbyService.authToken = "";
                GameLobbyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], GameLobbyService);
                return GameLobbyService;
            }(authorized_application_service_1.AuthorizedApplicationService));
            exports_1("GameLobbyService", GameLobbyService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9nYW1lLmxvYmJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUcrQixvQ0FBNEI7Z0JBSXZELDBCQUFvQixPQUFlO29CQUMvQixrQkFBTSxZQUFZLENBQUMsQ0FBQztvQkFESixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUgzQixnQkFBVyxHQUFzQixFQUFFLENBQUM7b0JBTXhDLDRCQUE0QjtnQkFDaEMsQ0FBQztnQkFFTSx3Q0FBYSxHQUFwQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQztnQkFFTyw0Q0FBaUIsR0FBekI7b0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtnQkFDbkUsQ0FBQztnQkFkYywwQkFBUyxHQUFVLEVBQUUsQ0FBQztnQkFOekM7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBc0JiLHVCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsQ0FsQjhCLDZEQUE0QixHQWtCMUQ7WUFyQkQsK0NBcUJDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2dhbWUubG9iYnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIlxyXG5pbXBvcnQge0FwcGxpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXBwbGljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJhbmd1bGFyMi9odHRwXCJcclxuaW1wb3J0IHtBdXRob3JpemVkQXBwbGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hdXRob3JpemVkLmFwcGxpY2F0aW9uLnNlcnZpY2VcIlxyXG5pbXBvcnQge0dhbWVNb2RlbH0gZnJvbSBcIi4vLi4vbW9kZWxzL2dhbWUubW9kZWxcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgLyoqXHJcbiAqIEdhbWVMb2JieVNlcnZpY2VcclxuICovXHJcbmNsYXNzIEdhbWVMb2JieVNlcnZpY2UgZXh0ZW5kcyBBdXRob3JpemVkQXBwbGljYXRpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2xvYmJ5R2FtZXMgOiBBcnJheTxHYW1lTW9kZWw+ID0gW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBhdXRoVG9rZW46c3RyaW5nID0gXCJcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcihcImdhbWUtbG9iYnlcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5fdXBkYXRlTG9iYnlHYW1lcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0TG9iYnlHYW1lcygpOiBBcnJheTxHYW1lTW9kZWw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9iYnlHYW1lcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTG9iYnlHYW1lcygpIHtcclxuICAgICAgICB0aGlzLmdldCgnJywge30pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7Y29uc29sZS5sb2cocmVzcG9uc2UpfSlcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
