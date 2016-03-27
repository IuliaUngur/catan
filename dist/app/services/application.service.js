System.register(["angular2/http", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1;
    var ApplicationService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ApplicationService = (function () {
                function ApplicationService(serviceBaseRouteName) {
                    var injector = core_1.Injector.resolveAndCreate([http_1.HTTP_PROVIDERS]);
                    this._http = injector.get(http_1.Http);
                    this._serviceBaseRouteName = '/api/' + serviceBaseRouteName + '/';
                }
                ApplicationService.prototype.get = function (route, obj) {
                    return this._http.get(this._serviceBaseRouteName + route, obj);
                };
                ApplicationService.prototype.post = function (route, obj) {
                    var body = JSON.stringify(obj);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._serviceBaseRouteName + route, JSON.stringify(obj), options);
                };
                ApplicationService.prototype.delete = function (route, obj) {
                    return this._http.delete(this._serviceBaseRouteName + route, obj);
                };
                ApplicationService.prototype.put = function (route, obj) {
                    return this._http.put(this._serviceBaseRouteName + route, obj);
                };
                ApplicationService.prototype.patch = function (route, obj) {
                    return this._http.patch(this._serviceBaseRouteName + route, obj);
                };
                ApplicationService.prototype.request = function (route, obj) {
                    return this._http.request(this._serviceBaseRouteName + route, obj);
                };
                ApplicationService.prototype.head = function (route, obj) {
                    return this._http.head(this._serviceBaseRouteName + route, obj);
                };
                return ApplicationService;
            }());
            exports_1("ApplicationService", ApplicationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBT0ksNEJBQVksb0JBQTRCO29CQUNwQyxJQUFJLFFBQVEsR0FBRyxlQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxxQkFBYyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQUksQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxHQUFHLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztnQkFDdEUsQ0FBQztnQkFFUyxnQ0FBRyxHQUFiLFVBQWMsS0FBYSxFQUFFLEdBQVM7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUVTLGlDQUFJLEdBQWQsVUFBZSxLQUFhLEVBQUUsR0FBUztvQkFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0YsQ0FBQztnQkFFUyxtQ0FBTSxHQUFoQixVQUFpQixLQUFhLEVBQUUsR0FBUztvQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7Z0JBRVMsZ0NBQUcsR0FBYixVQUFjLEtBQWEsRUFBRSxHQUFTO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFUyxrQ0FBSyxHQUFmLFVBQWdCLEtBQWEsRUFBRSxHQUFTO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFFUyxvQ0FBTyxHQUFqQixVQUFrQixLQUFhLEVBQUUsR0FBUztvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRVMsaUNBQUksR0FBZCxVQUFlLEtBQWEsRUFBRSxHQUFTO29CQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFDTCx5QkFBQztZQUFELENBM0NBLEFBMkNDLElBQUE7WUEzQ0QsbURBMkNDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2FwcGxpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiXHJcbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCJcclxuXHJcbmV4cG9ydCAvKipcclxuICogQXBwbGljYXRpb25TZXJ2aWNlXHJcbiAqL1xyXG5jbGFzcyBBcHBsaWNhdGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cDtcclxuICAgIHByaXZhdGUgX3NlcnZpY2VCYXNlUm91dGVOYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VCYXNlUm91dGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgaW5qZWN0b3IgPSBJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtIVFRQX1BST1ZJREVSU10pO1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBpbmplY3Rvci5nZXQoSHR0cCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZUJhc2VSb3V0ZU5hbWUgPSAnL2FwaS8nICsgc2VydmljZUJhc2VSb3V0ZU5hbWUgKyAnLyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBnZXQocm91dGU6IHN0cmluZywgb2JqIDogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3NlcnZpY2VCYXNlUm91dGVOYW1lICsgcm91dGUsIG9iaik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBwb3N0KHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9zZXJ2aWNlQmFzZVJvdXRlTmFtZSArIHJvdXRlLCBKU09OLnN0cmluZ2lmeShvYmopLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZShyb3V0ZTogc3RyaW5nLCBvYmogOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fc2VydmljZUJhc2VSb3V0ZU5hbWUgKyByb3V0ZSwgb2JqKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHB1dChyb3V0ZTogc3RyaW5nLCBvYmogOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fc2VydmljZUJhc2VSb3V0ZU5hbWUgKyByb3V0ZSwgb2JqKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHBhdGNoKHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKHRoaXMuX3NlcnZpY2VCYXNlUm91dGVOYW1lICsgcm91dGUsIG9iaik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCByZXF1ZXN0KHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QodGhpcy5fc2VydmljZUJhc2VSb3V0ZU5hbWUgKyByb3V0ZSwgb2JqKTtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBoZWFkKHJvdXRlOiBzdHJpbmcsIG9iaiA6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmhlYWQodGhpcy5fc2VydmljZUJhc2VSb3V0ZU5hbWUgKyByb3V0ZSwgb2JqKTtcclxuICAgIH0gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
