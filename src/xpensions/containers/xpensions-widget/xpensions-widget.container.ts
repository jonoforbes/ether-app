import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { XPension } from "../../entities/XPension";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { XPensionsSandbox } from "../../xpensions.sandbox";

@Component({
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
})
export class XPensionsWidgetContainer {
    @Input() xPensionOwnerType: string = "Personal";
    @Input() xPensionContactId: string = "";
    routeId: string = "";

    

    
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xPensions$: Observable<Array<XPension>>;
    


// <contact-tab [contact]="item" (click)="onSelect(item)"></contact-tab>
    
    constructor(private sb: XPensionsSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logInputs() {
        console.log('owner type', this.xPensionOwnerType);
        console.log('contactId', this.xPensionContactId);
    }

    ngOnChanges(simpleChanges: any) {

        this.refreshXPensions();

    }

    refreshXPensions() {

        const params$ = this.route.params.take(1);

        params$.take(1).subscribe((params: Params) => {
            this.routeId = params['id'];
            // console.log('route id', this.routeId);
        });

        if ( this.xPensionOwnerType == "Joint") {
            console.log('fetching joint pensions');
            this.xPensions$ = params$
            .switchMap((params: Params) => this.sb.fetchXPensionsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal pensions');
            this.xPensions$ = this.sb.fetchXPensionsByContact(this.xPensionContactId).takeUntil(this.ngUnsubscribe);
        }

    }

    onSave(xPension: XPension): void {
        if (this.xPensionOwnerType == "Personal") {
            let xPensionWithProps: XPension = Object.assign({}, xPension, {
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

    onUpdate(xPension: XPension): void {
        this.sb.updateXPension(xPension._id, xPension);
    }

}
