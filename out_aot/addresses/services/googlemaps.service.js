var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GOOGLE_MAPS_API_URL, GOOGLE_MAPS_API_KEY } from "../../configuration";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
export let GoogleMapsService = class GoogleMapsService {
    constructor(http) {
        this.http = http;
    }
    search(query) {
        var parsedQuery = query.replace(/\s/g, '+');
        return this.http
            .get(`${GOOGLE_MAPS_API_URL}address=${parsedQuery}&key=${GOOGLE_MAPS_API_KEY}`)
            .map((resp) => JSON.parse(JSON.stringify(resp.json())));
    }
};
GoogleMapsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], GoogleMapsService);
//# sourceMappingURL=googlemaps.service.js.map