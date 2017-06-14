var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BACKEND } from "../configuration";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { info } from "toastr";
import { Router } from "@angular/router";
export let RealTime = class RealTime {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    connect() {
        this.store.select(state => state.data.authentication.jwtToken).take(1).subscribe((token) => {
            this.socket = io(BACKEND, { query: "jwttoken=" + token });
            this.socket.on("UPDATE_REDUX", action => {
                if (action.payload.activity) {
                    if (action.payload.activity.type == "message") {
                        var activityHeader = action.payload.activity.header;
                        var activityContent = action.payload.activity.content;
                        console.log('header', activityHeader);
                        info(activityContent, activityHeader, { onclick: function () {
                                this.messageNavigate(action.payload.activity.userId);
                            }
                        });
                    }
                }
                this.store.dispatch(action);
                console.log(action);
            });
        });
    }
    messageNavigate(userId) {
        console.log('user', userId);
        this.router.navigate(['/messages', { outlets: { 'm': ['list'], 'd': [userId] } }]);
    }
    disconnect() {
        this.socket.close();
    }
};
RealTime = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, Router])
], RealTime);
//# sourceMappingURL=realtime.js.map