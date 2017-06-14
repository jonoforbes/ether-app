var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AuthenticationSandbox } from "../../authentication.sandbox";
import { Router } from "@angular/router";
export let RegisterContainer = class RegisterContainer {
    constructor(sb, router) {
        this.sb = sb;
        this.router = router;
        this.curTab = 0;
        this.subscriptions = [];
        this.isBusy$ = this.sb.isBusy$;
    }
    enableTab(tabIndex) {
        this.curTab = tabIndex;
    }
    login(credentials) {
        this.subscriptions.push(this.sb.login(credentials).subscribe(() => {
            this.router.navigate(["/"]);
        }));
    }
    register(account) {
        this.subscriptions.push(this.sb.register(account).subscribe(() => {
            this.router.navigate(["/"]);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
};
RegisterContainer = __decorate([
    Component({
        selector: "register-hidden",
        template: `
    <div class="container">
        <panel style="background-color: #444" [header]="'You are not authenticated!'">          
            <register (authenticate)="register($event)" [isBusy]="isBusy$|async"></register>
        </panel>
    </div>
      `
    }), 
    __metadata('design:paramtypes', [AuthenticationSandbox, Router])
], RegisterContainer);
//# sourceMappingURL=register.container.js.map