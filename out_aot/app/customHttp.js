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
import { Http, RequestOptions, ConnectionBackend } from "@angular/http";
import { Store } from "@ngrx/store";
import { DisableBusyFlag, EnableBusyFlag } from "../statemanagement/actions/containers/application";
export let CustomHttp = class CustomHttp extends Http {
    constructor(backend, defaultOptions, store) {
        super(backend, defaultOptions);
        this.store = store;
        this.activeCalls = 0;
    }
    get(url, options) {
        this.httpCallRequested();
        return super.get(url, options).finally(() => {
            this.httpCallReady();
        });
    }
    request(url, options) {
        this.httpCallRequested();
        return super.request(url, options).finally(() => {
            this.httpCallReady();
        });
    }
    ;
    post(url, body, options) {
        this.httpCallRequested();
        return super.post(url, body, options).finally(() => {
            this.httpCallReady();
        });
    }
    ;
    put(url, body, options) {
        return super.put(url, body, options);
    }
    delete(url, options) {
        return super.delete(url, options);
    }
    patch(url, body, options) {
        return super.patch(url, body, options);
    }
    head(url, options) {
        return super.head(url, options);
    }
    options(url, options) {
        this.httpCallRequested();
        return super.options(url, options).finally(() => {
            this.httpCallReady();
        });
    }
    httpCallReady() {
        this.activeCalls--;
        if (this.activeCalls === 0) {
            this.store.dispatch(new DisableBusyFlag());
        }
    }
    httpCallRequested() {
        if (this.activeCalls === 0) {
            this.store.dispatch(new EnableBusyFlag());
        }
        this.activeCalls++;
    }
};
CustomHttp = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ConnectionBackend, RequestOptions, Store])
], CustomHttp);
export function customHttpFactory(backend, defaultOptions, store) {
    return new CustomHttp(backend, defaultOptions, store);
}
//# sourceMappingURL=customHttp.js.map