var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
export let LoginComponent = class LoginComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.authenticate = new EventEmitter();
        this.loginForm = this.formBuilder.group({
            login: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    onSubmit() {
        this.authenticate.emit(this.loginForm.value);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], LoginComponent.prototype, "authenticate", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], LoginComponent.prototype, "isBusy", void 0);
LoginComponent = __decorate([
    Component({
        selector: "login",
        template: `
        <form [formGroup]="loginForm" fxLayout="column" fxLayoutAlign="start center">
            <h2>Templar EIS Adviser Login</h2>
            <md-input-container align="center" fxFlexAlign="center" fxLayout="row">
                <input type="email" mdInput formControlName="login" placeholder="Enter Login">
            </md-input-container>
            <md-input-container fxFlexAlign="center" fxLayout="row">
                <input type="password" mdInput formControlName="password" placeholder="Enter Password">
            </md-input-container>
            <button class="login-button" md-button type="submit" [disabled]="!loginForm.valid || isBusy" (click)="onSubmit()">
            <p>Sign in</p>
        </button>
        </form>
        
`
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], LoginComponent);
//# sourceMappingURL=login.component.js.map