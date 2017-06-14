import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { XLiability } from "../../entities/XLiability";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { XLiabilitiesSandbox } from "../../xliabilities.sandbox";

@Component({
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
})
export class XLiabilitiesWidgetContainer {
    @Input() xLiabilityOwnerType: string = "Joint";
    @Input() xLiabilityContactId: string = "";
    routeId: string = "";

    
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xLiabilities$: Observable<Array<XLiability>>;
    


// <contact-tab [contact]="item" (click)="onSelect(item)"></contact-tab>
    
    constructor(private sb: XLiabilitiesSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logInputs() {
        console.log('owner type', this.xLiabilityOwnerType);
        console.log('contactId', this.xLiabilityContactId);
    }

    ngOnChanges(simpleChanges: any) {

        this.refreshXLiabilities();

    }

    refreshXLiabilities() {
        console.log('refreshing liabilities');

        const params$ = this.route.params.take(1);

        params$.take(1).subscribe((params: Params) => {
            this.routeId = params['id'];
            console.log('route id', this.routeId);
        });

        if ( this.xLiabilityOwnerType == "Joint") {
            console.log('fetching joint liabilities');
            this.xLiabilities$ = params$
            .switchMap((params: Params) => this.sb.fetchXLiabilitiesByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal liabilities');
            this.xLiabilities$ = this.sb.fetchXLiabilitiesByContact(this.xLiabilityContactId).takeUntil(this.ngUnsubscribe);
        }

    }

    onSave(xLiability: XLiability): void {
        if (this.xLiabilityOwnerType == "Joint") {
            let xLiabilityWithProps: XLiability = Object.assign({}, xLiability, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint liability", xLiabilityWithProps);
            this.sb.addXLiability(xLiabilityWithProps);
        }
        if (this.xLiabilityOwnerType == "Personal") {
            let xLiabilityWithProps: XLiability = Object.assign({}, xLiability, {
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

    onUpdate(xLiability: XLiability): void {
        this.sb.updateXLiability(xLiability._id, xLiability);
    }

}
