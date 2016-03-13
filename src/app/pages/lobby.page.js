System.register(["angular2/core", "./../models/game.model", "./../models/user.profile.model"], function(exports_1, context_1) {
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
    var core_1, game_model_1, user_profile_model_1;
    var LobbyPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_model_1_1) {
                game_model_1 = game_model_1_1;
            },
            function (user_profile_model_1_1) {
                user_profile_model_1 = user_profile_model_1_1;
            }],
        execute: function() {
            LobbyPage = (function () {
                function LobbyPage() {
                    this.gameList = [new game_model_1.GameModel("gameName1", new user_profile_model_1.UserProfileModel("userName1", "urlPic")),
                        new game_model_1.GameModel("gameName2", new user_profile_model_1.UserProfileModel("userName2", "urlPic"))];
                }
                LobbyPage.prototype.selectRow = function (row) {
                    if (this.selectedGame == row)
                        this.selectedGame = null;
                    else
                        this.selectedGame = row;
                };
                LobbyPage = __decorate([
                    core_1.Component({
                        selector: 'lobby-page',
                        template: "\n        <div class=\"lobby\">\n            <div class=\"horizontal-button-wrapper\">\n                <button [disabled]=\"!selectedGame\">Join Game</button>\n                <button>Create Game</button>\n            </div> \n            <div class=\"game-table-wrapper\">\n                <table>\n                    <thead> \n                        <th>Game Name</th>\n                        <th>Owner</th>\n                        <th>Slots</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#row of gameList\" (click)=\"selectRow(row)\" [ngClass]=\"{selected: row==selectedGame}\">\n                            <td>{{row.gameName}}</td>\n                            <td>{{row.owner.userName}}</td>\n                            <td>1/4</td>\n                        </tr>\n                    </tbody>         \n                </table>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LobbyPage);
                return LobbyPage;
            }());
            exports_1("LobbyPage", LobbyPage);
        }
    }
});
//# sourceMappingURL=lobby.page.js.map