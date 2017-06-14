var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { LOCALSTORAGE_AUTH } from "../configuration";
export let AuthenticatedGuard = class AuthenticatedGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem(LOCALSTORAGE_AUTH)) {
            return true;
        }
        this.router.navigate(["/authentication"]);
        return false;
    }
};
AuthenticatedGuard = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Router])
], AuthenticatedGuard);
//# sourceMappingURL=authenticated.guard.js.map