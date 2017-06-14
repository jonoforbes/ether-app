var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XAssetsService } from "./services/xassets.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddXAsset, RemoveXAsset, UpdateXAsset } from "../statemanagement/actions/data/xasset";
export let XAssetsSandbox = class XAssetsSandbox {
    constructor(store, xAssetsService) {
        this.store = store;
        this.xAssetsService = xAssetsService;
        this.ngUnsubscribe = new Subject();
        this.xAssets$ = this.store.select(state => state.data.xAssets);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addXAsset(xAsset) {
        this.xAssetsService.add(xAsset)
            .take(1)
            .subscribe((xAsset) => {
            this.store.dispatch(new AddXAsset(xAsset));
        }, () => this.handleError());
    }
    updateXAsset(id, xAsset) {
        let action = new UpdateXAsset(id, xAsset);
        this.store.dispatch(action);
        this.xAssetsService.update(id, xAsset)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchXAsset(id) {
        console.log('existing asset', id);
        return this.xAssetsService.fetchXAsset(id)
            .take(1)
            .share();
    }
    fetchXAssetsByAccount(id) {
        return this.xAssets$
            .take(2)
            .map((xAssets) => {
            return xAssets.filter((xAsset) => {
                return xAsset.accountId == id;
            });
        });
    }
    fetchXAssetsByContact(id) {
        return this.xAssets$
            .take(2)
            .map((xAssets) => {
            return xAssets.filter((xAsset) => {
                return xAsset.contactId == id;
            });
        });
    }
    removeXAsset(xAsset) {
        let action = new RemoveXAsset(xAsset._id);
        this.store.dispatch(action);
        this.xAssetsService.remove(xAsset)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
XAssetsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, XAssetsService])
], XAssetsSandbox);
//# sourceMappingURL=xassets.sandbox.js.map