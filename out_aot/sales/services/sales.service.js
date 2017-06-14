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
export let SalesService = class SalesService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.store.select((state) => state.data.authentication.jwtToken)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    add(sale) {
        return this.http.post(`${API_URL}/sales`, sale, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    update(id, sale) {
        return this.http.put(`${API_URL}/sales/${id}`, sale, this.authorizedHttpOptions());
    }
    remove(sale) {
        return this.http.delete(`${API_URL}/sales/${sale._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/sales`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    fetchSale(id) {
        return this.http.get(`${API_URL}/sales/${id}`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    setAccount(sale, accountId) {
        let newSale = Object.assign({}, sale, { accountId: accountId });
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }
    setContact(sale, contactId) {
        let newSale = Object.assign({}, sale, { contactId: contactId });
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }
    setProduct(sale, productId) {
        let newSale = Object.assign({}, sale, { productId: productId });
        return this.http.put(`${API_URL}/sales/${sale._id}`, newSale, this.authorizedHttpOptions());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
SalesService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], SalesService);
//# sourceMappingURL=sales.service.js.map