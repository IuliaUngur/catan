System.register(['angular2/core', 'angular2/src/core/zone'], function(exports_1, context_1) {
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
    var core_1, zone_1;
    var LocalStorageEmitter, LocalStorageService;
    function LocalStorageSubscriber(appPromise) {
        appPromise.then(function (bla) {
            bla.injector.resolveAndInstantiate(LocalStorageService);
        });
    }
    exports_1("LocalStorageSubscriber", LocalStorageSubscriber);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zone_1_1) {
                zone_1 = zone_1_1;
            }],
        execute: function() {
            LocalStorageEmitter = (function () {
                function LocalStorageEmitter() {
                }
                LocalStorageEmitter.register = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index === -1) {
                        index = LocalStorageEmitter.ngZones.push(ngZone) - 1;
                    }
                    LocalStorageEmitter.subscribed[index] = ngZone.onMicrotaskEmpty.subscribe(function () {
                        for (var _i = 0, _a = LocalStorageEmitter.subscribers; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback();
                        }
                    });
                };
                LocalStorageEmitter.subscribe = function (callback) {
                    LocalStorageEmitter.subscribers.push(callback);
                };
                LocalStorageEmitter.unregister = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index >= 0) {
                        LocalStorageEmitter.subscribed[index].unsubscribe();
                    }
                };
                LocalStorageEmitter.subscribed = [];
                LocalStorageEmitter.ngZones = [];
                LocalStorageEmitter.subscribers = [];
                return LocalStorageEmitter;
            }());
            exports_1("LocalStorageEmitter", LocalStorageEmitter);
            LocalStorageService = (function () {
                function LocalStorageService(ngZone) {
                    this.ngZone = ngZone;
                    LocalStorageEmitter.register(this.ngZone);
                }
                LocalStorageService.prototype.ngOnDestroy = function () {
                    LocalStorageEmitter.unregister(this.ngZone);
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [zone_1.NgZone])
                ], LocalStorageService);
                return LocalStorageService;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hbmd1bGFyMi1sb2NhbHN0b3JhZ2UvTG9jYWxTdG9yYWdlRW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWlEQSxnQ0FBdUMsVUFBZ0M7UUFDbkUsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDaEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBTyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUpELDJEQUlDLENBQUE7Ozs7Ozs7Ozs7WUFsREQ7Z0JBQUE7Z0JBNkJBLENBQUM7Z0JBeEJpQiw0QkFBUSxHQUF0QixVQUF1QixNQUFhO29CQUNoQyxJQUFJLEtBQUssR0FBVSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekQsQ0FBQztvQkFDRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzt3QkFDdEUsR0FBRyxDQUFDLENBQWlCLFVBQStCLEVBQS9CLEtBQUEsbUJBQW1CLENBQUMsV0FBVyxFQUEvQixjQUErQixFQUEvQixJQUErQixDQUFDOzRCQUFoRCxJQUFJLFFBQVEsU0FBQTs0QkFDYixRQUFRLEVBQUUsQ0FBQzt5QkFDZDtvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUlhLDZCQUFTLEdBQXZCLFVBQXdCLFFBQWlCO29CQUNyQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVhLDhCQUFVLEdBQXhCLFVBQXlCLE1BQWE7b0JBQ2xDLElBQUksS0FBSyxHQUFVLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQy9ELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDeEQsQ0FBQztnQkFDTCxDQUFDO2dCQTFCZ0IsOEJBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLDJCQUFPLEdBQVksRUFBRSxDQUFDO2dCQWN0QiwrQkFBVyxHQUFHLEVBQUUsQ0FBQztnQkFZdEMsMEJBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELHFEQTZCQyxDQUFBO1lBR0Q7Z0JBQ0ksNkJBQW9CLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDN0IsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCx5Q0FBVyxHQUFYO29CQUNJLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBUkw7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBU2IsMEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQSIsImZpbGUiOiJhcHAvYW5ndWxhcjItbG9jYWxzdG9yYWdlL0xvY2FsU3RvcmFnZUVtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE9uRGVzdHJveX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvem9uZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VFbWl0dGVyIHtcblxuICAgIHByb3RlY3RlZCBzdGF0aWMgc3Vic2NyaWJlZCA9IFtdO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgbmdab25lczpOZ1pvbmVbXSA9IFtdO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlcihuZ1pvbmU6Tmdab25lKSB7XG4gICAgICAgIGxldCBpbmRleDpudW1iZXIgPSBMb2NhbFN0b3JhZ2VFbWl0dGVyLm5nWm9uZXMuaW5kZXhPZihuZ1pvbmUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IExvY2FsU3RvcmFnZUVtaXR0ZXIubmdab25lcy5wdXNoKG5nWm9uZSkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlZFtpbmRleF0gPSBuZ1pvbmUub25NaWNyb3Rhc2tFbXB0eS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgY2FsbGJhY2sgb2YgTG9jYWxTdG9yYWdlRW1pdHRlci5zdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGF0aWMgc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlKGNhbGxiYWNrOkZ1bmN0aW9uKSB7XG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyKG5nWm9uZTpOZ1pvbmUpIHtcbiAgICAgICAgbGV0IGluZGV4Om51bWJlciA9IExvY2FsU3RvcmFnZUVtaXR0ZXIubmdab25lcy5pbmRleE9mKG5nWm9uZSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2VFbWl0dGVyLnN1YnNjcmliZWRbaW5kZXhdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOk5nWm9uZSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2VFbWl0dGVyLnJlZ2lzdGVyKHRoaXMubmdab25lKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgTG9jYWxTdG9yYWdlRW1pdHRlci51bnJlZ2lzdGVyKHRoaXMubmdab25lKTtcbiAgICB9XG59XG5cbmltcG9ydCB7VHlwZX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZ1wiO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge0NvbXBvbmVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VTdWJzY3JpYmVyKGFwcFByb21pc2U6UHJvbWlzZTxDb21wb25lbnRSZWY+KSB7XG4gICAgYXBwUHJvbWlzZS50aGVuKChibGEpID0+IHtcbiAgICAgICAgYmxhLmluamVjdG9yLnJlc29sdmVBbmRJbnN0YW50aWF0ZSg8VHlwZT5Mb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
