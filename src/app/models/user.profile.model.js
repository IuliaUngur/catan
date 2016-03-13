System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserProfileModel;
    return {
        setters:[],
        execute: function() {
            UserProfileModel = (function () {
                function UserProfileModel(userName, profilePic) {
                    this.userName = userName;
                    this.profilePic = profilePic;
                }
                return UserProfileModel;
            }());
            exports_1("UserProfileModel", UserProfileModel);
        }
    }
});
//# sourceMappingURL=user.profile.model.js.map