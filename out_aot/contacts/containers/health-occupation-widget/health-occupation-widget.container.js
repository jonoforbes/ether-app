var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { ContactsSandbox } from "../../contacts.sandbox";
export let HealthOccupationWidgetContainer = class HealthOccupationWidgetContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.ngUnsubscribe = new Subject();
        this.id$ = new Observable();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngOnInit() {
        this.refreshContacts();
    }
    refreshContacts() {
        const params$ = this.route.params.take(1);
        this.contacts$ = params$
            .take(1)
            .switchMap((params) => this.sb.fetchContactsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
    }
    onUpdateContact(contact) {
        this.sb.updateContact(contact._id, contact);
    }
};
HealthOccupationWidgetContainer = __decorate([
    Component({
        selector: "health-occupation-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <accordion class="widget-accordion" [closeOthers]="false" [showArrows]="true">
          
        <accordion-group class="widget-accordion" [isOpened]="true">
            <accordion-heading class="widget-accordion">
                <h2 class="widget widget-head">Health &amp; Occupation</h2>
            </accordion-heading>

            <md-tab-group class="widget" [selectedIndex]="0">
                <md-tab *ngFor="let item of this.contacts$|async" label="{{item.firstName}} {{item.lastName}}">
                    <health-occupation-tab (updateContact)="onUpdateContact($event)" [contact]="item"></health-occupation-tab>
                </md-tab>      
            </md-tab-group>
        </accordion-group>
    </accordion>
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox, ActivatedRoute, Router])
], HealthOccupationWidgetContainer);
//# sourceMappingURL=health-occupation-widget.container.js.map