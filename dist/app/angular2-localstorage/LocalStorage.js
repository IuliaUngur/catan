System.register(['./LocalStorageEmitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorageEmitter_1;
    function LocalStorage(storageKey) {
        return function decoratorFactory(target, decoratedPropertyName) {
            if (!localStorage) {
                return;
            }
            if (!storageKey) {
                storageKey = '' + '/' + decoratedPropertyName;
            }
            Object.defineProperty(target, '_' + decoratedPropertyName + '_mapped', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: false
            });
            var instances = [];
            var values = {};
            var storageValue = localStorage.getItem(storageKey) || null;
            var storageValueJSON = storageValue;
            if ('string' === typeof storageValue) {
                try {
                    storageValue = JSON.parse(storageValue);
                }
                catch (e) {
                    storageValue = null;
                    storageValueJSON = 'null';
                }
            }
            var oldJSONValues = {};
            Object.defineProperty(target, decoratedPropertyName, {
                get: function () {
                    if (false === this['_' + decoratedPropertyName + '_mapped']) {
                        this['_' + decoratedPropertyName + '_mapped'] = instances.length;
                        //first registration triggers a setting to localStorage value
                        values[instances.length] = storageValue;
                        oldJSONValues[instances.length] = storageValueJSON;
                        instances.push(this);
                    }
                    return values[this['_' + decoratedPropertyName + '_mapped']];
                },
                set: function (newValue) {
                    if (false === this['_' + decoratedPropertyName + '_mapped']) {
                        this['_' + decoratedPropertyName + '_mapped'] = instances.length;
                        //first registration triggers a setting to localStorage value
                        values[instances.length] = storageValue;
                        oldJSONValues[instances.length] = storageValueJSON;
                        instances.push(this);
                        //first 'set' call is ignored if we have already a value from the localStorage
                        if (storageValue) {
                            return;
                        }
                    }
                    values[this['_' + decoratedPropertyName + '_mapped']] = newValue;
                },
                enumerable: true,
                configurable: true
            });
            LocalStorageEmitter_1.LocalStorageEmitter.subscribe(function () {
                for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                    var instance = instances_1[_i];
                    var currentValue = JSON.stringify(instance[decoratedPropertyName]);
                    var oldJSONValue = oldJSONValues[target['_' + decoratedPropertyName + '_mapped']];
                    if (currentValue !== oldJSONValue) {
                        oldJSONValues[target['_' + decoratedPropertyName + '_mapped']] = currentValue;
                        localStorage.setItem(storageKey, currentValue);
                    }
                }
            });
        };
    }
    exports_1("LocalStorage", LocalStorage);
    return {
        setters:[
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hbmd1bGFyMi1sb2NhbHN0b3JhZ2UvTG9jYWxTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxzQkFBNkIsVUFBa0I7UUFDM0MsTUFBTSxDQUFDLDBCQUEwQixNQUFhLEVBQUUscUJBQTZCO1lBQ3pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZCxVQUFVLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztZQUNsRCxDQUFDO1lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLHFCQUFxQixHQUFHLFNBQVMsRUFBRTtnQkFDbkUsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUVILElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFaEIsSUFBSSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDNUQsSUFBSSxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDO29CQUNELFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1QyxDQUFFO2dCQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDcEIsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUV2QixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsRUFBRTtnQkFDakQsR0FBRyxFQUFFO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO3dCQUVqRSw2REFBNkQ7d0JBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDO3dCQUN4QyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDO3dCQUVuRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixDQUFDO29CQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQUNELEdBQUcsRUFBRSxVQUFVLFFBQVE7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO3dCQUVqRSw2REFBNkQ7d0JBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDO3dCQUN4QyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDO3dCQUVuRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQiw4RUFBOEU7d0JBQzlFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsTUFBTSxDQUFDO3dCQUNYLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBRUgseUNBQW1CLENBQUMsU0FBUyxDQUFDO2dCQUMxQixHQUFHLENBQUMsQ0FBaUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTLENBQUM7b0JBQTFCLElBQUksUUFBUSxrQkFBQTtvQkFDYixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzt3QkFDOUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ25ELENBQUM7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtJQUNMLENBQUM7SUE1RUQsdUNBNEVDLENBQUEiLCJmaWxlIjoiYXBwL2FuZ3VsYXIyLWxvY2Fsc3RvcmFnZS9Mb2NhbFN0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvY2FsU3RvcmFnZUVtaXR0ZXJ9IGZyb20gJy4vTG9jYWxTdG9yYWdlRW1pdHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2Uoc3RvcmFnZUtleT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvckZhY3RvcnkodGFyZ2V0Ok9iamVjdCwgZGVjb3JhdGVkUHJvcGVydHlOYW1lPzpzdHJpbmcpOnZvaWQge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdG9yYWdlS2V5KSB7XG4gICAgICAgICAgICBzdG9yYWdlS2V5ID0gJycgKyAnLycgKyBkZWNvcmF0ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCAnXycgKyBkZWNvcmF0ZWRQcm9wZXJ0eU5hbWUgKyAnX21hcHBlZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICAgICAgdmFyIHN0b3JhZ2VWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8IG51bGw7XG4gICAgICAgIHZhciBzdG9yYWdlVmFsdWVKU09OID0gc3RvcmFnZVZhbHVlO1xuICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzdG9yYWdlVmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzdG9yYWdlVmFsdWVKU09OID0gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBvbGRKU09OVmFsdWVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVjb3JhdGVkUHJvcGVydHlOYW1lLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IHRoaXNbJ18nICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgJ19tYXBwZWQnXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzWydfJyArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArICdfbWFwcGVkJ10gPSBpbnN0YW5jZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vZmlyc3QgcmVnaXN0cmF0aW9uIHRyaWdnZXJzIGEgc2V0dGluZyB0byBsb2NhbFN0b3JhZ2UgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2luc3RhbmNlcy5sZW5ndGhdID0gc3RvcmFnZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBvbGRKU09OVmFsdWVzW2luc3RhbmNlcy5sZW5ndGhdID0gc3RvcmFnZVZhbHVlSlNPTjtcblxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1t0aGlzWydfJyArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArICdfbWFwcGVkJ11dO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSB0aGlzWydfJyArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArICdfbWFwcGVkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1snXycgKyBkZWNvcmF0ZWRQcm9wZXJ0eU5hbWUgKyAnX21hcHBlZCddID0gaW5zdGFuY2VzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvL2ZpcnN0IHJlZ2lzdHJhdGlvbiB0cmlnZ2VycyBhIHNldHRpbmcgdG8gbG9jYWxTdG9yYWdlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnN0YW5jZXMubGVuZ3RoXSA9IHN0b3JhZ2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgb2xkSlNPTlZhbHVlc1tpbnN0YW5jZXMubGVuZ3RoXSA9IHN0b3JhZ2VWYWx1ZUpTT047XG5cbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vZmlyc3QgJ3NldCcgY2FsbCBpcyBpZ25vcmVkIGlmIHdlIGhhdmUgYWxyZWFkeSBhIHZhbHVlIGZyb20gdGhlIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzW3RoaXNbJ18nICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgJ19tYXBwZWQnXV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIExvY2FsU3RvcmFnZUVtaXR0ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBKU09OLnN0cmluZ2lmeShpbnN0YW5jZVtkZWNvcmF0ZWRQcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkSlNPTlZhbHVlID0gb2xkSlNPTlZhbHVlc1t0YXJnZXRbJ18nICsgZGVjb3JhdGVkUHJvcGVydHlOYW1lICsgJ19tYXBwZWQnXV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gb2xkSlNPTlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZEpTT05WYWx1ZXNbdGFyZ2V0WydfJyArIGRlY29yYXRlZFByb3BlcnR5TmFtZSArICdfbWFwcGVkJ11dID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
