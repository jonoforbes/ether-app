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
export let AuthenticationContainer = class AuthenticationContainer {
    constructor(sb, router) {
        this.sb = sb;
        this.router = router;
        this.curTab = 0;
        this.mode = "determinate";
        this.value = "0";
        this.subscriptions = [];
        this.isBusy$ = this.sb.isBusy$;
        this.logoImage = '../../assets/icons/logo2@2x.png';
    }
    enableTab(tabIndex) {
        this.curTab = tabIndex;
    }
    login(credentials) {
        this.mode = "indeterminate";
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
AuthenticationContainer = __decorate([
    Component({
        selector: "authentication",
        template: `
    <div class="container authenticationContainer" style="width: 100vw; height: 100vh">
        <img [src]='logoImage'>
        <div class="login-panel">
            <login *ngIf="curTab === 0" (authenticate)="login($event)" [isBusy]="isBusy$|async"></login>
        </div>
        <md-progress-bar
            fxFlexAlign="center"
          [mode]="mode"
          [value]="value">
      </md-progress-bar>
        <div>
            <p style="text-align: center; bottom: 10px; position: absolute">&copy; 2017 Ether CRM | Terms and Conditions | Having technical issues? Contact Ether Support | Forgot your password? Contact Administrator</p>
        </div>
        
    </div>
      `
    }), 
    __metadata('design:paramtypes', [AuthenticationSandbox, Router])
], AuthenticationContainer);
//# sourceMappingURL=authentication.container.js.map