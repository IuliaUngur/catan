System.register(["angular2/core", "./../models/game.model", "./../models/public.user.profile.model", "./../services/authorization.service", "./../services/game.lobby.service"], function(exports_1, context_1) {
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
    var core_1, game_model_1, public_user_profile_model_1, authorization_service_1, game_lobby_service_1;
    var LobbyPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_model_1_1) {
                game_model_1 = game_model_1_1;
            },
            function (public_user_profile_model_1_1) {
                public_user_profile_model_1 = public_user_profile_model_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            },
            function (game_lobby_service_1_1) {
                game_lobby_service_1 = game_lobby_service_1_1;
            }],
        execute: function() {
            LobbyPage = (function () {
                function LobbyPage(_authService, _gameLobbyService) {
                    this._authService = _authService;
                    this._gameLobbyService = _gameLobbyService;
                    this.gameList = [new game_model_1.GameModel("gameName1", new public_user_profile_model_1.PublicUserProfileModel("userName1", "urlPic")),
                        new game_model_1.GameModel("gameName2", new public_user_profile_model_1.PublicUserProfileModel("userName2", "urlPic"))];
                }
                LobbyPage.prototype.selectRow = function (row) {
                    if (this.selectedGame == row)
                        this.selectedGame = null;
                    else
                        this.selectedGame = row;
                };
                LobbyPage.prototype.onLogout = function () {
                    this._authService.logout();
                };
                LobbyPage = __decorate([
                    core_1.Component({
                        selector: 'lobby-page',
                        providers: [authorization_service_1.AuthorizationService, game_lobby_service_1.GameLobbyService],
                        template: "\n        <div class=\"lobby\">\n            <div class=\"horizontal-button-wrapper\">\n                <button [disabled]=\"!selectedGame\">Join Game</button>\n                <button>Create Game</button>\n                <button (click)=\"onLogout()\">Logout</button>\n            </div> \n            <div class=\"game-table-wrapper\">\n                <table>\n                    <thead> \n                        <th>Game Name</th>\n                        <th>Owner</th>\n                        <th>Slots</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#row of gameList\" (click)=\"selectRow(row)\" [ngClass]=\"{selected: row==selectedGame}\">\n                            <td>{{row.gameName}}</td>\n                            <td>{{row.owner.userName}}</td>\n                            <td>1/4</td>\n                        </tr>\n                    </tbody>         \n                </table>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [authorization_service_1.AuthorizationService, game_lobby_service_1.GameLobbyService])
                ], LobbyPage);
                return LobbyPage;
            }());
            exports_1("LobbyPage", LobbyPage);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9sb2JieS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQWNJLG1CQUFvQixZQUFrQyxFQUFVLGlCQUFtQztvQkFBL0UsaUJBQVksR0FBWixZQUFZLENBQXNCO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7b0JBVjNGLGFBQVEsR0FDWixDQUFDLElBQUksc0JBQVMsQ0FBQyxXQUFXLEVBQ2YsSUFBSSxrREFBc0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQy9DO3dCQUNaLElBQUksc0JBQVMsQ0FBQyxXQUFXLEVBQ2YsSUFBSSxrREFBc0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQ2xELENBQUMsQ0FBQztnQkFNaEIsQ0FBQztnQkFFTSw2QkFBUyxHQUFoQixVQUFpQixHQUFjO29CQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUM7b0JBQzNCLElBQUk7d0JBQ0EsSUFBSSxDQUFDLFlBQVksR0FBQyxHQUFHLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUssNEJBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQXhESjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixTQUFTLEVBQUUsQ0FBQyw0Q0FBb0IsRUFBRSxxQ0FBZ0IsQ0FBQzt3QkFDbkQsUUFBUSxFQUFFLDIrQkF3QlQ7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBNkJGLGdCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCxpQ0E0QkMsQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvbG9iYnkucGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiXHJcbmltcG9ydCB7R2FtZU1vZGVsfSBmcm9tIFwiLi8uLi9tb2RlbHMvZ2FtZS5tb2RlbFwiXHJcbmltcG9ydCB7UHVibGljVXNlclByb2ZpbGVNb2RlbH0gZnJvbSBcIi4vLi4vbW9kZWxzL3B1YmxpYy51c2VyLnByb2ZpbGUubW9kZWxcIlxyXG5pbXBvcnQge0F1dGhvcml6YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLnNlcnZpY2VcIlxyXG5pbXBvcnQge0dhbWVMb2JieVNlcnZpY2V9IGZyb20gXCIuLy4uL3NlcnZpY2VzL2dhbWUubG9iYnkuc2VydmljZVwiXHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvYmJ5LXBhZ2UnLFxyXG4gICAgcHJvdmlkZXJzOiBbQXV0aG9yaXphdGlvblNlcnZpY2UsIEdhbWVMb2JieVNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9iYnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwtYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFzZWxlY3RlZEdhbWVcIj5Kb2luIEdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+Q3JlYXRlIEdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS10YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhbWUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Pd25lcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TbG90czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIGdhbWVMaXN0XCIgKGNsaWNrKT1cInNlbGVjdFJvdyhyb3cpXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiByb3c9PXNlbGVjdGVkR2FtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy5nYW1lTmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3Jvdy5vd25lci51c2VyTmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xLzQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IC8qKlxyXG4gKiBMb2JieVBhZ2VcclxuICovXHJcbmNsYXNzIExvYmJ5UGFnZSB7XHJcbiAgICBwcml2YXRlIGdhbWVMaXN0IDogQXJyYXk8R2FtZU1vZGVsPiA9IFxyXG4gICAgICAgIFtuZXcgR2FtZU1vZGVsKFwiZ2FtZU5hbWUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICBuZXcgUHVibGljVXNlclByb2ZpbGVNb2RlbChcInVzZXJOYW1lMVwiLCBcInVybFBpY1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgIG5ldyBHYW1lTW9kZWwoXCJnYW1lTmFtZTJcIixcclxuICAgICAgICAgICAgICAgICAgIG5ldyBQdWJsaWNVc2VyUHJvZmlsZU1vZGVsKFwidXNlck5hbWUyXCIsIFwidXJsUGljXCIpXHJcbiAgICAgICAgICAgICAgICAgKV07XHJcbiAgICAgICAgXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkR2FtZTogR2FtZU1vZGVsO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aG9yaXphdGlvblNlcnZpY2UsIHByaXZhdGUgX2dhbWVMb2JieVNlcnZpY2U6IEdhbWVMb2JieVNlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNlbGVjdFJvdyhyb3c6IEdhbWVNb2RlbCl7XHJcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEdhbWUgPT0gcm93KVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkR2FtZT1udWxsO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEdhbWU9cm93O1xyXG4gICAgfVxyXG4gICBcclxuICAgcHVibGljIG9uTG9nb3V0KCkge1xyXG4gICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
