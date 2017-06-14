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
import { Http } from "@angular/http";
import { API_URL, LOCALSTORAGE_AUTH } from "../../configuration";
export let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
    }
    authenticate(credentials) {
        return this.http.post(`${API_URL}/authentication/login`, credentials).publishReplay(1).refCount().map(resp => resp.json());
    }
    register(account) {
        return this.http.post(`${API_URL}/authentication/register`, account).publishReplay(1).refCount().map(resp => resp.json());
    }
    checkInitialAuthentication() {
        let item = window.localStorage.getItem(LOCALSTORAGE_AUTH);
        return item ? JSON.parse(item) : null;
    }
};
AuthenticationService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map