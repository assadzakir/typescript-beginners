var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoItem = (function () {
    function TodoItem(text, completed) {
        this.text = text;
        this.completed = completed;
    }
    return TodoItem;
})();
exports.TodoItem = TodoItem;
var AppComponent = (function () {
    function AppComponent() {
        this.todos = new Array();
        this.todos.push(new TodoItem('Hello World', false));
    }
    ;
    AppComponent.prototype.setCompleted = function (item, checked) {
        item.completed = checked;
    };
    ;
    AppComponent.prototype.removeList = function (item) {
        this.todos.splice(this.todos.indexOf(item), 1);
    };
    ;
    AppComponent.prototype.addItem = function (input) {
        this.todos.push(new TodoItem(input.value, false));
        input.value = "";
    };
    ;
    AppComponent.prototype.doneTypeing = function ($event) {
        if ($event.which === 13) {
            this.addItem($event.target);
        }
    };
    ;
    AppComponent.prototype.completedAll = function () {
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var list = _a[_i];
            this.setCompleted(list, true);
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'todo.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map