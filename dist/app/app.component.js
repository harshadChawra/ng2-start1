"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = "Hello";
        this.users = [
            { id: 25, name: 'Harshad', username: 'Hchawra' },
            { id: 1, name: 'John', username: 'Cenation' },
            { id: 17, name: 'Brock', username: 'Lesnar' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n        <header>\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"navbar-header\">\n                    <a href=\"/\" class=\"navbar-brand\">My Angular 2 App</a>\n                </div>\n            </nav>\n        </header>\n        <main>\n\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n\n                    <div *ngIf=\"users\">\n                        <ul class=\"list-group users-list\">\n                            <li class=\"list-group-item\" *ngFor=\"let user of users\" \n                                                        (click)=\"selectUser(user)\"\n                                                        [class.active]=\"user===activeUser\">\n                                {{user.name}} ({{user.username}})\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n                <div class=\"col-sm-8\">\n                    <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                        <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>\n                    </div>\n\n                    <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n                        <span class=\"glyphicon glyphicon-hand-left\"></span>\n                        <h2>Choose a user</h2>\n                    </div>\n                </div>\n            </div>\n\n            \n\n            \n        </main>\n        <footer class=\"text-center\">\n            Copyright &copy; 2016\n        </footer>\n    ",
            styles: ["\n        .users-list li {\n            cursor : pointer;\n        }\n        .jumbotron .glyphicon {\n            font-size: 80px;\n        }\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map