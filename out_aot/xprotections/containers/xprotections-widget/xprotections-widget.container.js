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
import { XProtectionsSandbox } from "../../xprotections.sandbox";
export let XProtectionsWidgetContainer = class XProtectionsWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.xProtectionOwnerType = "Joint";
        this.xProtectionContactId = "";
        this.routeId = "";
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    logInputs() {
        console.log('owner type', this.xProtectionOwnerType);
        console.log('contactId', this.xProtectionContactId);
    }
    ngOnChanges(simpleChanges) {
        this.refreshXProtections();
    }
    refreshXProtections() {
        const params$ = this.route.params.take(1);
        params$.take(1).subscribe((params) => {
            this.routeId = params['id'];
        });
        if (this.xProtectionOwnerType == "Joint") {
            console.log('fetching joint protections');
            this.xProtections$ = params$
                .switchMap((params) => this.sb.fetchXProtectionsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal protections');
            this.xProtections$ = this.sb.fetchXProtectionsByContact(this.xProtectionContactId).takeUntil(this.ngUnsubscribe);
        }
    }
    onSave(xProtection) {
        if (this.xProtectionOwnerType == "Joint") {
            let xProtectionWithProps = Object.assign({}, xProtection, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint protection", xProtectionWithProps);
            this.sb.addXProtection(xProtectionWithProps);
        }
        if (this.xProtectionOwnerType == "Personal") {
            let xProtectionWithProps = Object.assign({}, xProtection, {
                ownerType: "Personal",
                contactId: this.xProtectionContactId
            });
            console.log("Personal protection", xProtectionWithProps);
            this.sb.addXProtection(xProtectionWithProps);
        }
        else {
            return;
        }
    }
    onUpdate(xProtection) {
        this.sb.updateXProtection(xProtection._id, xProtection);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], XProtectionsWidgetContainer.prototype, "xProtectionOwnerType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], XProtectionsWidgetContainer.prototype, "xProtectionContactId", void 0);
XProtectionsWidgetContainer = __decorate([
    Component({
        selector: "xprotections-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

    <md-tab-group [selectedIndex]="1">
        <md-tab label="+">
        <add-xprotection-tab (addXProtection)="onSave($event)" ></add-xprotection-tab>
        </md-tab>
        <md-tab *ngFor="let xProtection of this.xProtections$|async" label="{{xProtection.category}}">
            <xprotection-tab (updateXProtection)="onUpdate($event)" [xProtection]="xProtection"></xprotection-tab>
        </md-tab>      
    </md-tab-group>
        

    
    
    
    `
    }), 
    __metadata('design:paramtypes', [XProtectionsSandbox, ActivatedRoute, Router])
], XProtectionsWidgetContainer);
//# sourceMappingURL=xprotections-widget.container.js.map