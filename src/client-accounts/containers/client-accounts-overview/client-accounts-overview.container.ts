import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox"; 
import { ClientAccountsDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { ClientAccountsStatusWidgetComponent } from "../../components/status-widget/status-widget.component";

@Component({
    selector: "client-accounts-overview",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-scrolling-content">
        <client-accounts-detail-header 
            [mode]="mode"></client-accounts-detail-header>

            <add-client-account (onSave)="onSave($event)"></add-client-account>

            <client-accounts-status-widget
                [totalCount]="totalCount$ | async"
                [activeCount]="activeCount$ | async"
                [inactiveCount]="inactiveCount$ | async"
                [reviewCount]="reviewCount$ | async"
                [attentionCount]="attentionCount$ | async"
                [deletionCount]="deletionCount$ | async" 
                ></client-accounts-status-widget>


    </div>
    `
})
export class ClientAccountsOverviewContainer {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    mode: string = "overview";
    clientAccounts$: Observable<Array<ClientAccount>>;
    activeAccounts$: Observable<Array<ClientAccount>>;
    reviewAccounts$: Observable<Array<ClientAccount>>;
    inactiveAccounts$: Observable<Array<ClientAccount>>;
    deletionAccounts$: Observable<Array<ClientAccount>>;
    attentionAccounts$: Observable<Array<ClientAccount>>;
    totalCount$: Observable<Number>;
    activeCount$: Observable<Number>;
    reviewCount$: Observable<Number>;
    inactiveCount$: Observable<Number>;
    deletionCount$: Observable<Number>;
    attentionCount$: Observable<Number>;
    
    // favoriteWines$ = this.wines$.map((wines: Wine[]) => wines.filter((wine: Wine) => wine.myRating > 3))
    //     .map(wines => orderBy(wines, ["myRating"], ["desc"]).slice(0,5));
    
    // worth$ = this.wines$.map(wines => sumBy(wines, (wine: Wine) => wine.price * wine.inStock).toFixed(2));
    constructor(private sb: ClientAccountsSandbox,
                
                 ) {
        
    }

    onSave(clientAccount: ClientAccount): void {
        this.sb.addClientAccount(clientAccount);
        
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnInit() {
        this.clientAccounts$ = this.sb.clientAccounts$.take(1);
        this.totalCount$ = this.clientAccounts$.take(1).map(accounts => accounts.length);

        this.activeAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts: ClientAccount[]) => accounts.filter((account: ClientAccount) => account.accountStatus == "Active"));
        this.activeCount$ = this.activeAccounts$.take(1).map(accounts => accounts.length);

        this.inactiveAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts: ClientAccount[]) => accounts.filter((account: ClientAccount) => account.accountStatus == "Inactive"));
        this.inactiveCount$ = this.inactiveAccounts$.take(1).map(accounts => accounts.length);

        this.reviewAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts: ClientAccount[]) => accounts.filter((account: ClientAccount) => account.accountStatus == "Review"));
        this.reviewCount$ = this.reviewAccounts$.take(1).map(accounts => accounts.length);

        this.deletionAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts: ClientAccount[]) => accounts.filter((account: ClientAccount) => account.accountStatus == "Deletion"));
        this.deletionCount$ = this.deletionAccounts$.take(1).map(accounts => accounts.length);

        this.attentionAccounts$ = this.clientAccounts$
            .take(1)
            .map((accounts: ClientAccount[]) => accounts.filter((account: ClientAccount) => account.accountStatus == "Attention"));
        this.attentionCount$ = this.attentionAccounts$.take(1).map(accounts => accounts.length);

    }
}