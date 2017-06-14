import { Component, Input, Output, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { XAsset } from "../../entities/XAsset";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { XAssetsSandbox } from "../../xassets.sandbox";
// import { ContactTabComponent } from "../../components/contact-tab/contact-tab.component";
// import { AddAddressTabComponent } from "../../components/add-address-tab/add-address-tab.component";
// import { AddContactTabComponent } from "../../components/add-contact-tab/add-contact-tab.component";

@Component({
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
})
export class XAssetsWidgetContainer {
    @Input() xAssetOwnerType: string = "Joint";
    @Input() xAssetContactId: string = "";
    routeId: string = "";

    

    
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    xAssets$: Observable<Array<XAsset>>;
    


// <contact-tab [contact]="item" (click)="onSelect(item)"></contact-tab>
    
    constructor(private sb: XAssetsSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logInputs() {
        console.log('owner type', this.xAssetOwnerType);
        console.log('contactId', this.xAssetContactId);
    }

    ngOnChanges(simpleChanges: any) {

        this.refreshXAssets();

    }

    refreshXAssets() {

        const params$ = this.route.params.take(1);

        params$.take(1).subscribe((params: Params) => {
            this.routeId = params['id'];
            console.log('route id', this.routeId);
        });

        if ( this.xAssetOwnerType == "Joint") {
            console.log('fetching joint assets');
            this.xAssets$ = params$
            .switchMap((params: Params) => this.sb.fetchXAssetsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal assets');
            this.xAssets$ = this.sb.fetchXAssetsByContact(this.xAssetContactId).takeUntil(this.ngUnsubscribe);
        }

    }

    onSave(xAsset: XAsset): void {
        if (this.xAssetOwnerType == "Joint") {
            let xAssetWithProps: XAsset = Object.assign({}, xAsset, {
                ownerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint asset", xAssetWithProps);
            this.sb.addXAsset(xAssetWithProps);
        }
        if (this.xAssetOwnerType == "Personal") {
            let xAssetWithProps: XAsset = Object.assign({}, xAsset, {
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

    onUpdate(xAsset: XAsset): void {
        this.sb.updateXAsset(xAsset._id, xAsset);
    }

}
