var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { XAssetsSandbox } from "../../xassets.sandbox";
export let XAssetsWidgetContainer = class XAssetsWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.xAssetOwnerType = "Joint";
        this.xAssetContactId = "";
        this.routeId = "";
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    logInputs() {
        console.log('owner type', this.xAssetOwnerType);
        console.log('contactId', this.xAssetContactId);
    }
    ngOnChanges(simpleChanges) {
        this.refreshXAssets();
    }
    refreshXAssets() {
        const params$ = this.route.params.take(1);
        params$.take(1).subscribe((params) => {
            this.routeId = params['id'];
            console.log('route id', this.routeId);
        });
        if (this.xAssetOwnerType == "Joint") {
            console.log('fetching joint assets');
            this.xAssets$ = params$
                .switchMap((params) => this.sb.fetchXAssetsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal assets');
            this.xAssets$ = this.sb.fetchXAssetsByContact(this.xAssetContactId).takeUntil(this.ngUnsubscribe);
        }
    }
    onSave(xAsset) {
        if (this.xAssetOwnerType == "Joint") {
            let xAssetWithProps = Object.assign({}, xAsset, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint asset", xAssetWithProps);
            this.sb.addXAsset(xAssetWithProps);
        }
        if (this.xAssetOwnerType == "Personal") {
            let xAssetWithProps = Object.assign({}, xAsset, {
                ownerType: "Personal",
                contactId: this.xAssetContactId
            });
            console.log("Personal asset", xAssetWithProps);
            this.sb.addXAsset(xAssetWithProps);
        }
        else {
            return;
        }
    }
    onUpdate(xAsset) {
        this.sb.updateXAsset(xAsset._id, xAsset);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], XAssetsWidgetContainer.prototype, "xAssetOwnerType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], XAssetsWidgetContainer.prototype, "xAssetContactId", void 0);
XAssetsWidgetContainer = __decorate([
    Component({
        selector: "xassets-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

    <md-tab-group [selectedIndex]="1">
        <md-tab label="+">
        <add-xasset-tab (addXAsset)="onSave($event)" ></add-xasset-tab>
        </md-tab>
        <md-tab *ngFor="let xAsset of this.xAssets$|async" label="{{xAsset.category}}">
            <xasset-tab (updateXAsset)="onUpdate($event)" [xAsset]="xAsset"></xasset-tab>
        </md-tab>      
    </md-tab-group>
        

    
    
    
    `
    }), 
    __metadata('design:paramtypes', [XAssetsSandbox, ActivatedRoute, Router])
], XAssetsWidgetContainer);
//# sourceMappingURL=xassets-widget.container.js.map