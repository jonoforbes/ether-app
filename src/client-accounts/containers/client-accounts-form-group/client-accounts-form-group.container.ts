import { Component, OnInit, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox"; 
import { ClientAccountsDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { ClientAccountsDetailFormComponent } from "../../components/detail-form/detail-form.component";
import { ClientAccountsDetailComplianceComponent } from "../../components/detail-compliance/detail-compliance.component";
import { ClientAccountsProgressWidgetComponent } from "../../components/progress-widget/progress-widget.component";

@Component({
    selector: "client-accounts-form-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
        
        <form 
            [formGroup]="clientAccountForm" 
            novalidate 
            (ngSubmit)="onSubmit()">

        <client-accounts-detail-header 
            [clientAccountForm]="this.clientAccountForm" 
            [clientAccount]="this.clientAccount" 
            (submitForm)="onSubmit()" 
            (updateStatus)="onUpdateStatus(clientAccount, $event)">
        </client-accounts-detail-header>
        <client-accounts-detail-form [clientAccountForm]="this.clientAccountForm" (remove)="onRemove(clientAccount)"></client-accounts-detail-form>
        <client-accounts-detail-compliance [clientAccountForm]="this.clientAccountForm" (remove)="onRemove(clientAccount)"></client-accounts-detail-compliance>
    </form>
        
    
    `
})
export class ClientAccountsFormGroupContainer implements OnInit {
    @Input() clientAccount = new ClientAccount();
    @Output() onSave = new EventEmitter<ClientAccount>(false);
    @Output() remove = new EventEmitter<ClientAccount>();
    @Output() updateStatus = new EventEmitter<{clientAccount: ClientAccount, accountStatus: string}>(false);

    public clientAccountForm: FormGroup;

    constructor(private sb: ClientAccountsSandbox,
                private formBuilder: FormBuilder
                 ) {
        
    }

    //         <client-accounts-detail-form [clientAccountForm]="this.clientAccountForm" (remove)="onRemove(clientAccount)"></client-accounts-detail-form>

    ngOnInit() {
        this.clientAccountForm = this.formBuilder.group({
            accountName: [this.clientAccount.accountName],
            companyFullName: [this.clientAccount.companyFullName],
            companyNumber: [this.clientAccount.companyNumber],
            accountType: [this.clientAccount.accountType],
            wealthIncome: [this.clientAccount.wealthIncome],
            wealthBonus: [this.clientAccount.wealthBonus],
            wealthHouseSale: [this.clientAccount.wealthHouseSale],
            wealthBusinessSale: [this.clientAccount.wealthBusinessSale],
            wealthInheritance: [this.clientAccount.wealthInheritance],
            wealthReplacement: [this.clientAccount.wealthReplacement],
            wealthDivorce: [this.clientAccount.wealthDivorce],
            wealthOther: [this.clientAccount.wealthOther],
            fundsUKBank: [this.clientAccount.fundsUKBank],
            fundsEUBank: [this.clientAccount.fundsEUBank],
            fundsBSOC: [this.clientAccount.fundsBSOC],
            fundsStock: [this.clientAccount.fundsStock],
            fundsOtherReg: [this.clientAccount.fundsOtherReg],
            fundsSolicitor: [this.clientAccount.fundsSolicitor],
            fundsAccountant: [this.clientAccount.fundsAccountant],
            fundsOther: [this.clientAccount.fundsOther]

        });

    }

    

    onSubmit(): void {
        console.log(this.clientAccount);
        console.log(this.clientAccountForm.value);
        this.onSave.emit(Object.assign(this.clientAccount, this.clientAccountForm.value));
    }

    onUpdateStatus(clientAccount: ClientAccount, accountStatus: string): void {
        this.updateStatus.emit({clientAccount, accountStatus});
    }

    public onRemove(clientAccount: ClientAccount): void {
        this.remove.emit(clientAccount);
    }

    
}