System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GameModel;
    return {
        setters:[],
        execute: function() {
            GameModel = (function () {
                function GameModel(gameName, owner) {
                    this.gameName = gameName;
                    this.owner = owner;
                }
                return GameModel;
            }());
            exports_1("GameModel", GameModel);
        }
    }
});
//# sourceMappingURL=game.model.js.map