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
export let StockService = class StockService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.store.select((state) => state.data.authentication.jwtToken)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    add(wine) {
        return this.http.post(`${API_URL}/wines`, wine, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    update(id, wine) {
        return this.http.put(`${API_URL}/wines/${id}`, wine, this.authorizedHttpOptions());
    }
    remove(wine) {
        return this.http.delete(`${API_URL}/wines/${wine._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/wines`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    fetchWine(id) {
        return this.http.get(`${API_URL}/wines/${id}`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    setRate(wine, myRating) {
        let newWine = Object.assign({}, wine, { myRating: myRating });
        return this.http.put(`${API_URL}/wines/${wine._id}`, newWine, this.authorizedHttpOptions());
    }
    setStock(wine, inStock) {
        let newWine = Object.assign({}, wine, { inStock: inStock });
        return this.http.put(`${API_URL}/wines/${wine._id}`, newWine, this.authorizedHttpOptions());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
StockService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], StockService);
//# sourceMappingURL=stock.service.js.map