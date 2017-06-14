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
import { XPensionsSandbox } from "../../xpensions.sandbox";
export let XPensionsWidgetContainer = class XPensionsWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.xPensionOwnerType = "Personal";
        this.xPensionContactId = "";
        this.routeId = "";
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    logInputs() {
        console.log('owner type', this.xPensionOwnerType);
        console.log('contactId', this.xPensionContactId);
    }
    ngOnChanges(simpleChanges) {
        this.refreshXPensions();
    }
    refreshXPensions() {
        const params$ = this.route.params.take(1);
        params$.take(1).subscribe((params) => {
            this.routeId = params['id'];
        });
        if (this.xPensionOwnerType == "Joint") {
            console.log('fetching joint pensions');
            this.xPensions$ = params$
                .switchMap((params) => this.sb.fetchXPensionsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal pensions');
            this.xPensions$ = this.sb.fetchXPensionsByContact(this.xPensionContactId).takeUntil(this.ngUnsubscribe);
        }
    }
    onSave(xPension) {
        if (this.xPensionOwnerType == "Personal") {
            let xPensionWithProps = Object.assign({}, xPension, {
                ownerType: "Personal",
                contactId: this.xPensionContactId
            });
            console.log("Personal pension", xPensionWithProps);
            this.sb.addXPension(xPensionWithProps);
        }
        else {
            console.log('type issue');
            return;
        }
    }
    onUpdate(xPension) {
        this.sb.updateXPension(xPension._id, xPension);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], XPensionsWidgetContainer.prototype, "xPensionOwnerType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], XPensionsWidgetContainer.prototype, "xPensionContactId", void 0);
XPensionsWidgetContainer = __decorate([
    Component({
        selector: "xpensions-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

    <md-tab-group *ngIf="this.xPensionContactId !== ''" [selectedIndex]="1">
        <md-tab label="+">
        <add-xpension-tab (addXPension)="onSave($event)" ></add-xpension-tab>
        </md-tab>
        <md-tab *ngFor="let xPension of this.xPensions$|async" label="{{xPension.pensionType}}">
            <xpension-tab (updateXPension)="onUpdate($event)" [xPension]="xPension"></xpension-tab>
        </md-tab>      
    </md-tab-group>
    <button md-button (click)="logInputs()"><p style="color: #838383">Test Inputs</p></button>
        

    
    
    
    `
    }), 
    __metadata('design:paramtypes', [XPensionsSandbox, ActivatedRoute, Router])
], XPensionsWidgetContainer);
//# sourceMappingURL=xpensions-widget.container.js.map