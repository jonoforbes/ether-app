var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { Validators, FormBuilder } from "@angular/forms";
import { PopoverContent } from "ngx-popover";
export let AddClientAccountContainer = class AddClientAccountContainer {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.onSave = new EventEmitter();
        this.clientAccount = new ClientAccount();
    }
    ngOnInit() {
        this.clientAccountForm = this.formBuilder.group({
            accountName: [this.clientAccount.accountName, Validators.required],
            accountType: [this.clientAccount.accountType, Validators.required],
            accountStatus: "Inactive"
        });
    }
    onSubmit() {
        this.onSave.emit(Object.assign(this.clientAccount, this.clientAccountForm.value));
        console.log('submitting');
        this.clientAccountForm.reset();
        this.closePopover();
    }
    closePopover() {
        this.myPopover.hide();
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddClientAccountContainer.prototype, "onSave", void 0);
__decorate([
    ViewChild('myPopover'), 
    __metadata('design:type', PopoverContent)
], AddClientAccountContainer.prototype, "myPopover", void 0);
AddClientAccountContainer = __decorate([
    Component({
        selector: "add-client-account",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <popover-content #myPopover style=""
            [closeOnClickOutside]="false"
            placement="right">

                <form fxLayout="row" [formGroup]="clientAccountForm" novalidate #formContainer (ngSubmit)="onSubmit()">
                    <div fxFlex="370px" fxLayoutAlign="start">
                    <md-input-container style="margin-top: 5px; margin-left: 5px;" floatPlaceholder="never">
                        <input mdInput placeholder="Account Name" formControlName="accountName" style="width: 320px">
                    </md-input-container>
                    
                    </div>
                    <div fxFlex="100px" fxLayoutAlign="end center">
                    <md-select placeholder="Account Type" formControlName="accountType" floatPlaceholder="never">
                        <md-option [value]="'Personal'">Personal
                        </md-option>
                        <md-option [value]="'Corporate'">Corporate
                        </md-option>
                    </md-select>

                    <button md-button style="max-width: 40px !important; min-width: 40px !important"(click)="onSubmit(); false" mode="button"><md-icon style="color: #444">check</md-icon></button>
                    <button md-button style="max-width: 40px !important; min-width: 50px !important"(click)="closePopover(); false" mode="button"><md-icon style="color: #444">clear</md-icon></button>
                    </div>
          
         
    </form>
        </popover-content>
        
        <button md-button [popover]="myPopover"><md-checkbox style="margin-left: 4px;" [disabled]="true">
                    <span style="margin-left: 10px;">Add New Account</span>
                </md-checkbox></button>


    
    
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddClientAccountContainer);
//# sourceMappingURL=add-client-account.container.js.map