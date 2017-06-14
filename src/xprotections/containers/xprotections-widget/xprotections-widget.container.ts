import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { XProtection } from "../../entities/XProtection";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { XProtectionsSandbox } from "../../xprotections.sandbox";

@Component({
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
})
export class XProtectionsWidgetContainer {
    @Input() xProtectionOwnerType: string = "Joint";
    @Input() xProtectionContactId: string = "";
    routeId: string = "";

    

    
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xProtections$: Observable<Array<XProtection>>;
    


// <contact-tab [contact]="item" (click)="onSelect(item)"></contact-tab>
    
    constructor(private sb: XProtectionsSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logInputs() {
        console.log('owner type', this.xProtectionOwnerType);
        console.log('contactId', this.xProtectionContactId);
    }

    ngOnChanges(simpleChanges: any) {

        this.refreshXProtections();

    }

    refreshXProtections() {

        const params$ = this.route.params.take(1);

        params$.take(1).subscribe((params: Params) => {
            this.routeId = params['id'];
            // console.log('route id', this.routeId);
        });

        if ( this.xProtectionOwnerType == "Joint") {
            console.log('fetching joint protections');
            this.xProtections$ = params$
            .switchMap((params: Params) => this.sb.fetchXProtectionsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal protections');
            this.xProtections$ = this.sb.fetchXProtectionsByContact(this.xProtectionContactId).takeUntil(this.ngUnsubscribe);
        }

    }

    onSave(xProtection: XProtection): void {
        if (this.xProtectionOwnerType == "Joint") {
            let xProtectionWithProps: XProtection = Object.assign({}, xProtection, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint protection", xProtectionWithProps);
            this.sb.addXProtection(xProtectionWithProps);
        }
        if (this.xProtectionOwnerType == "Personal") {
            let xProtectionWithProps: XProtection = Object.assign({}, xProtection, {
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

    onUpdate(xProtection: XProtection): void {
        this.sb.updateXProtection(xProtection._id, xProtection);
    }

}
