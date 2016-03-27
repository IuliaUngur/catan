System.register(["./application.service", "./authorization.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var application_service_1, authorization_service_1;
    var AuthorizedApplicationService;
    return {
        setters:[
            function (application_service_1_1) {
                application_service_1 = application_service_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            }],
        execute: function() {
            AuthorizedApplicationService = (function (_super) {
                __extends(AuthorizedApplicationService, _super);
                function AuthorizedApplicationService(serviceBaseRouteName) {
                    _super.call(this, serviceBaseRouteName);
                    if (authorization_service_1.AuthorizationService.authToken === undefined ||
                        authorization_service_1.AuthorizationService.authToken === null ||
                        authorization_service_1.AuthorizationService.authToken === "") {
                        console.log("Authorization failed, authToken not found!");
                    }
                }
                AuthorizedApplicationService.prototype.get = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.get(route, obj);
                };
                AuthorizedApplicationService.prototype.post = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.post(route, obj);
                };
                AuthorizedApplicationService.prototype.delete = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.delete(route, obj);
                };
                AuthorizedApplicationService.prototype.put = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.put(route, obj);
                };
                AuthorizedApplicationService.prototype.patch = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.patch(route, obj);
                };
                AuthorizedApplicationService.prototype.request = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.request(route, obj);
                };
                AuthorizedApplicationService.prototype.head = function (route, obj) {
                    obj['authToken'] = authorization_service_1.AuthorizationService.authToken;
                    return this.head(route, obj);
                };
                return AuthorizedApplicationService;
            }(application_service_1.ApplicationService));
            exports_1("AuthorizedApplicationService", AuthorizedApplicationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRob3JpemVkLmFwcGxpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUcyQyxnREFBa0I7Z0JBRXpELHNDQUFZLG9CQUE0QjtvQkFDcEMsa0JBQU0sb0JBQW9CLENBQUMsQ0FBQztvQkFFNUIsRUFBRSxDQUFBLENBQUMsNENBQW9CLENBQUMsU0FBUyxLQUFLLFNBQVM7d0JBQzVDLDRDQUFvQixDQUFDLFNBQVMsS0FBSyxJQUFJO3dCQUN2Qyw0Q0FBb0IsQ0FBQyxTQUFTLEtBQUssRUFBRyxDQUFDLENBQUMsQ0FBQzt3QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO29CQUM3RCxDQUFDO2dCQUNMLENBQUM7Z0JBRVMsMENBQUcsR0FBYixVQUFjLEtBQWEsRUFBRSxHQUFTO29CQUNsQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsNENBQW9CLENBQUMsU0FBUyxDQUFDO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRVMsMkNBQUksR0FBZCxVQUFlLEtBQWEsRUFBRSxHQUFTO29CQUNuQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsNENBQW9CLENBQUMsU0FBUyxDQUFDO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRVMsNkNBQU0sR0FBaEIsVUFBaUIsS0FBYSxFQUFFLEdBQVM7b0JBQ3JDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyw0Q0FBb0IsQ0FBQyxTQUFTLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFUywwQ0FBRyxHQUFiLFVBQWMsS0FBYSxFQUFFLEdBQVM7b0JBQ2xDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyw0Q0FBb0IsQ0FBQyxTQUFTLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFUyw0Q0FBSyxHQUFmLFVBQWdCLEtBQWEsRUFBRSxHQUFTO29CQUNwQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsNENBQW9CLENBQUMsU0FBUyxDQUFDO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRVMsOENBQU8sR0FBakIsVUFBa0IsS0FBYSxFQUFFLEdBQVM7b0JBQ3RDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyw0Q0FBb0IsQ0FBQyxTQUFTLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFUywyQ0FBSSxHQUFkLFVBQWUsS0FBYSxFQUFFLEdBQVM7b0JBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyw0Q0FBb0IsQ0FBQyxTQUFTLENBQUM7b0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDTCxtQ0FBQztZQUFELENBakRBLEFBaURDLENBOUMwQyx3Q0FBa0IsR0E4QzVEO1lBakRELHVFQWlEQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRob3JpemVkLmFwcGxpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uU2VydmljZX0gZnJvbSBcIi4vYXBwbGljYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCB7QXV0aG9yaXphdGlvblNlcnZpY2V9IGZyb20gXCIuL2F1dGhvcml6YXRpb24uc2VydmljZVwiXHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIEF1dGhvcml6ZWRBcHBsaWNhdGlvblNlcnZpY2VcclxuICovXHJcbmNsYXNzIEF1dGhvcml6ZWRBcHBsaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBBcHBsaWNhdGlvblNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlQmFzZVJvdXRlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoc2VydmljZUJhc2VSb3V0ZU5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IFxyXG4gICAgICAgICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbiA9PT0gbnVsbCB8fCBcclxuICAgICAgICAgICBBdXRob3JpemF0aW9uU2VydmljZS5hdXRoVG9rZW4gPT09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRob3JpemF0aW9uIGZhaWxlZCwgYXV0aFRva2VuIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgZ2V0KHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIG9ialsnYXV0aFRva2VuJ10gPSBBdXRob3JpemF0aW9uU2VydmljZS5hdXRoVG9rZW47IFxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb3V0ZSwgb2JqKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHBvc3Qocm91dGU6IHN0cmluZywgb2JqIDogYW55KSB7XHJcbiAgICAgICAgb2JqWydhdXRoVG9rZW4nXSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbjsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChyb3V0ZSwgb2JqKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZShyb3V0ZTogc3RyaW5nLCBvYmogOiBhbnkpIHtcclxuICAgICAgICBvYmpbJ2F1dGhUb2tlbiddID0gQXV0aG9yaXphdGlvblNlcnZpY2UuYXV0aFRva2VuOyBcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUocm91dGUsIG9iaik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBwdXQocm91dGU6IHN0cmluZywgb2JqIDogYW55KSB7XHJcbiAgICAgICAgb2JqWydhdXRoVG9rZW4nXSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbjsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KHJvdXRlLCBvYmopO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgcGF0Y2gocm91dGU6IHN0cmluZywgb2JqIDogYW55KSB7XHJcbiAgICAgICAgb2JqWydhdXRoVG9rZW4nXSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlLmF1dGhUb2tlbjsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2gocm91dGUsIG9iaik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCByZXF1ZXN0KHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIG9ialsnYXV0aFRva2VuJ10gPSBBdXRob3JpemF0aW9uU2VydmljZS5hdXRoVG9rZW47IFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qocm91dGUsIG9iaik7XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgaGVhZChyb3V0ZTogc3RyaW5nLCBvYmogOiBhbnkpIHtcclxuICAgICAgICBvYmpbJ2F1dGhUb2tlbiddID0gQXV0aG9yaXphdGlvblNlcnZpY2UuYXV0aFRva2VuOyBcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkKHJvdXRlLCBvYmopO1xyXG4gICAgfSAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
