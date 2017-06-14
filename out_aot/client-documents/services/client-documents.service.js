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
export let ClientDocumentsService = class ClientDocumentsService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.ngUnsubscribe = new Subject();
        this.store.select((state) => state.data.authentication.jwtToken)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((jwtToken) => this.jwtToken = jwtToken);
    }
    ngOnDestroy() {
        console.log('client docs service destroy');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    add(clientDocument) {
        return this.http.post(`${API_URL}/clientdocuments`, clientDocument, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    update(id, clientDocument) {
        return this.http.put(`${API_URL}/clientdocuments/${id}`, clientDocument, this.authorizedHttpOptions());
    }
    remove(clientDocument) {
        return this.http.delete(`${API_URL}/clientdocuments/${clientDocument._id}`, this.authorizedHttpOptions());
    }
    load() {
        return this.http.get(`${API_URL}/clientdocuments`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    fetchClientDocument(id) {
        return this.http.get(`${API_URL}/clientdocuments/${id}`, this.authorizedHttpOptions())
            .map((res) => res.json());
    }
    setDescription(clientDocument, description) {
        let newClientDocument = Object.assign({}, clientDocument, { description: description });
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }
    setAccount(clientDocument, accountId) {
        let newClientDocument = Object.assign({}, clientDocument, { accountId: accountId });
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }
    setContact(clientDocument, contactId) {
        let newClientDocument = Object.assign({}, clientDocument, { contactId: contactId });
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }
    setSale(clientDocument, saleId) {
        let newClientDocument = Object.assign({}, clientDocument, { saleId: saleId });
        return this.http.put(`${API_URL}/clientdocuments/${clientDocument._id}`, newClientDocument, this.authorizedHttpOptions());
    }
    authorizedHttpOptions() {
        let headers = new Headers({
            authorization: `Bearer ${this.jwtToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
ClientDocumentsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Http])
], ClientDocumentsService);
//# sourceMappingURL=client-documents.service.js.map