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
import { XLiabilitiesSandbox } from "../../xliabilities.sandbox";
export let XLiabilitiesWidgetContainer = class XLiabilitiesWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.xLiabilityOwnerType = "Joint";
        this.xLiabilityContactId = "";
        this.routeId = "";
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    logInputs() {
        console.log('owner type', this.xLiabilityOwnerType);
        console.log('contactId', this.xLiabilityContactId);
    }
    ngOnChanges(simpleChanges) {
        this.refreshXLiabilities();
    }
    refreshXLiabilities() {
        console.log('refreshing liabilities');
        const params$ = this.route.params.take(1);
        params$.take(1).subscribe((params) => {
            this.routeId = params['id'];
            console.log('route id', this.routeId);
        });
        if (this.xLiabilityOwnerType == "Joint") {
            console.log('fetching joint liabilities');
            this.xLiabilities$ = params$
                .switchMap((params) => this.sb.fetchXLiabilitiesByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal liabilities');
            this.xLiabilities$ = this.sb.fetchXLiabilitiesByContact(this.xLiabilityContactId).takeUntil(this.ngUnsubscribe);
        }
    }
    onSave(xLiability) {
        if (this.xLiabilityOwnerType == "Joint") {
            let xLiabilityWithProps = Object.assign({}, xLiability, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint liability", xLiabilityWithProps);
            this.sb.addXLiability(xLiabilityWithProps);
        }
        if (this.xLiabilityOwnerType == "Personal") {
            let xLiabilityWithProps = Object.assign({}, xLiability, {
                ownerType: "Personal",
                contactId: this.xLiabilityContactId
            });
            console.log("Personal liability", xLiabilityWithProps);
            this.sb.addXLiability(xLiabilityWithProps);
        }
        else {
            return;
        }
    }
    onUpdate(xLiability) {
        this.sb.updateXLiability(xLiability._id, xLiability);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], XLiabilitiesWidgetContainer.prototype, "xLiabilityOwnerType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], XLiabilitiesWidgetContainer.prototype, "xLiabilityContactId", void 0);
XLiabilitiesWidgetContainer = __decorate([
    Component({
        selector: "xliabilities-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

    <md-tab-group [selectedIndex]="1">
        <md-tab label="+">
        <add-xliability-tab (addXLiability)="onSave($event)" ></add-xliability-tab>
        </md-tab>
        <md-tab *ngFor="let xLiability of this.xLiabilities$|async" label="{{xLiability.type}}">
            <xliability-tab (updateXLiability)="onUpdate($event)" [xLiability]="xLiability"></xliability-tab>
        </md-tab>      
    </md-tab-group>
        

    
    
    
    `
    }), 
    __metadata('design:paramtypes', [XLiabilitiesSandbox, ActivatedRoute, Router])
], XLiabilitiesWidgetContainer);
//# sourceMappingURL=xliabilities-widget.container.js.map