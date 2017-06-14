var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WINE_COM_API_URL, WINE_COM_API_KEY } from "../../configuration";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
export let WineComService = class WineComService {
    constructor(http) {
        this.http = http;
    }
    search(query) {
        return this.http
            .get(`${WINE_COM_API_URL}catalog?apikey=${WINE_COM_API_KEY}&search=${query}`)
            .map((resp) => JSON.parse(JSON.stringify(resp.json()), camelCaseReviver));
    }
};
WineComService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], WineComService);
function camelCaseReviver(key, value) {
    if (value && typeof value === "object") {
        for (var k in value) {
            if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
                value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                delete value[k];
            }
        }
    }
    return value;
}
//# sourceMappingURL=wineCom.service.js.map