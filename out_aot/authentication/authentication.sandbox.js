var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { Store } from "@ngrx/store";
import { info } from "toastr";
import { LOCALSTORAGE_AUTH } from "../configuration";
import { SetAuthentication } from "../statemanagement/actions/data/autentication";
export let AuthenticationSandbox = class AuthenticationSandbox {
    constructor(authenticationService, store) {
        this.authenticationService = authenticationService;
        this.store = store;
        this.isBusy$ = this.store.select(state => state.containers.application.isBusy);
    }
    login(credentials) {
        return this.authenticationService.authenticate(credentials).do(res => this.handleAuth(res)).share();
    }
    register(account) {
        console.log(account);
        return this.authenticationService.register(account).do(res => this.handleAuth(res)).share();
    }
    handleAuth(authenticationResult) {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(authenticationResult));
        var welcomeFirstName = authenticationResult.firstName;
        var welcomeTitle = `Welcome back, ${welcomeFirstName}`;
        var welcomeMessage = "You have x notifications";
        info(welcomeMessage, welcomeTitle);
        this.store.dispatch(new SetAuthentication(authenticationResult));
    }
};
AuthenticationSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [AuthenticationService, Store])
], AuthenticationSandbox);
//# sourceMappingURL=authentication.sandbox.js.map