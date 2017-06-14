var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { FormBuilder } from "@angular/forms";
import { ClientAccountsSandbox } from "../../client-accounts.sandbox";
export let ClientAccountsFormGroupContainer = class ClientAccountsFormGroupContainer {
    constructor(sb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.clientAccount = new ClientAccount();
        this.onSave = new EventEmitter(false);
        this.remove = new EventEmitter();
        this.updateStatus = new EventEmitter(false);
    }
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
    onSubmit() {
        console.log(this.clientAccount);
        console.log(this.clientAccountForm.value);
        this.onSave.emit(Object.assign(this.clientAccount, this.clientAccountForm.value));
    }
    onUpdateStatus(clientAccount, accountStatus) {
        this.updateStatus.emit({ clientAccount, accountStatus });
    }
    onRemove(clientAccount) {
        this.remove.emit(clientAccount);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], ClientAccountsFormGroupContainer.prototype, "clientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsFormGroupContainer.prototype, "onSave", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsFormGroupContainer.prototype, "remove", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsFormGroupContainer.prototype, "updateStatus", void 0);
ClientAccountsFormGroupContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [ClientAccountsSandbox, FormBuilder])
], ClientAccountsFormGroupContainer);
//# sourceMappingURL=client-accounts-form-group.container.js.map