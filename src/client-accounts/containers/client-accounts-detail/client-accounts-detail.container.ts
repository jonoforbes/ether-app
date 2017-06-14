import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";
import { ClientAccountsFormGroupContainer } from "../../containers/client-accounts-form-group/client-accounts-form-group.container";
import { ContactsWidgetContainer } from "../../../contacts/containers/contacts-widget/contacts-widget.container";
import { HealthOccupationWidgetContainer } from "../../../contacts/containers/health-occupation-widget/health-occupation-widget.container";
import { AddressesWidgetContainer } from "../../../addresses/containers/addresses-widget/addresses-widget.container";

@Component({
    selector: "client-accounts-detail",

    template: `
    <div class="example-scrolling-content">
        
        
        <div *ngIf="(editClientAccount$|async)">
            <client-accounts-form-group 
                [clientAccount]="editClientAccount$|async"
                (onSave)="onSave($event)" 
                (remove)="onRemove($event)"
                (updateStatus)="onUpdateStatus($event)">
            </client-accounts-form-group>
            <contacts-widget></contacts-widget>
            <addresses-widget [contact]="false"></addresses-widget>
            <health-occupation-widget></health-occupation-widget>
            <income-widget></income-widget>
            <contacts-intermediate-widget></contacts-intermediate-widget>
            <documents-widget [mode]="mode"></documents-widget>
            <tasks-widget [mode]="mode"></tasks-widget>
        </div>
        
    </div>
    `
})
export class ClientAccountsDetailContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    id: string;
    mode: string = "accounts";
    editClientAccount$: Observable<ClientAccount>;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        console.log('account detail container out');
    }
     
     
    ngOnInit() {
        this.sub = this.route.params
        .takeUntil(this.ngUnsubscribe)
        .subscribe(params => {
            this.id = params['id']; 
            this.editClientAccount$ = this.sb.isAuthenticated$.take(1)
                .filter(isAuthenticated => isAuthenticated) // only when authenticated
                .flatMap(() => {
                    return this.sb.fetchClientAccount(this.id);
                }).publishReplay().refCount();
        });
    }

    // ngOnInit() {
    //     const params$ = this.route.params;

    //     this.editClientAccount$ = params$.switchMap((params: Params) => this.sb.fetchClientAccount(params['id']));
    // }
    

    constructor(private sb: ClientAccountsSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    pubId() {
        console.log(this.id);
    }

    onSave(clientAccount: ClientAccount): void {
        this.sb.updateClientAccount(this.id, clientAccount);
    }

    onRemove(clientAccount: ClientAccount): void {
        this.sb.removeClientAccount(clientAccount);
    }
    onUpdateStatus(item: {clientAccount: ClientAccount, accountStatus: string}): void {
        console.log('status', item.accountStatus);
        console.log('account', item.clientAccount);
        this.sb.updateClientAccountStatus(item.clientAccount, item.accountStatus);
        
    }

}