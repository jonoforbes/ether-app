var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Http } from "@angular/http";
import { API_URL } from "../../configuration";
import { Subject } from "rxjs/Subject";
export let AddressesService = class AddressesService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.ngUnsubscribe = new Subject();
        this.store.select((state) => state.data.authentication.jwtToken)
            .take(2)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    add(address) {
        return this.http.post(`${API_URL}/addresses`, address, this.authorizedHttpOptions())
            .take(1)
            .map((res) => res.json());
    }
    update(id, address) {
        return this.http.put(`${API_URL}/addresses/${id}`, address, this.authorizedHttpOptions());
    }
    remove(address) {
        return this.http.delete(`${API_URL}/addresses/${address._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/addresses`, this.authorizedHttpOptions())
            .take(1)
            .map((res) => res.json());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
AddressesService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map