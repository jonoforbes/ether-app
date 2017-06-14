var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BOX_API_URL, BOX_UPLOAD_API_URL } from "../../configuration";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
export let BoxAPIService = class BoxAPIService {
    constructor(http) {
        this.http = http;
    }
    getFiles(accessToken) {
        return this.http
            .get(`${BOX_API_URL}folders/0/items`, this.authorizedHttpOptions(accessToken))
            .take(1)
            .map((resp) => JSON.parse(JSON.stringify(resp.json())));
    }
    getFile(accessToken, boxFileId) {
        return this.http
            .get(`${BOX_API_URL}files/${boxFileId}?fields=expiring_embed_link`, this.authorizedHttpOptions(accessToken))
            .take(1)
            .map((resp) => JSON.parse(JSON.stringify(resp.json())));
    }
    uploadFile(accessToken, formData) {
        return this.http
            .post(`${BOX_UPLOAD_API_URL}files/content`, formData, this.authorizedHttpOptions(accessToken))
            .take(1)
            .map((resp) => JSON.parse(JSON.stringify(resp.json())));
    }
    authorizedHttpOptions(accessToken) {
        let headers = new Headers({
            authorization: `Bearer ${accessToken}`
        });
        return new RequestOptions({ headers: headers });
    }
};
BoxAPIService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], BoxAPIService);
//# sourceMappingURL=box-api.service.js.map