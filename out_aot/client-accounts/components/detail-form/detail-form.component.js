var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
export let ClientAccountsDetailFormComponent = class ClientAccountsDetailFormComponent {
    constructor(router) {
        this.router = router;
        this.remove = new EventEmitter();
        this.accountStatuses = [
            { value: 'Active', viewValue: 'Active' },
            { value: 'Inactive', viewValue: 'Inactive' }
        ];
    }
    onRemove() {
        this.router.navigate(['/accounts', { outlets: { 'm': ['list'], 'd': ['add'] } }]);
        this.remove.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], ClientAccountsDetailFormComponent.prototype, "clientAccountForm", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountsDetailFormComponent.prototype, "remove", void 0);
ClientAccountsDetailFormComponent = __decorate([
    Component({
        selector: "client-accounts-detail-form",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="contact-form">

        <div class="contact-form-row" [formGroup]="clientAccountForm">

          <md-input-container>
            <input mdInput placeholder="Account Name" formControlName="accountName">
           
          </md-input-container>
          <md-input-container>
            <input mdInput placeholder="Reg. Company Name" formControlName="companyFullName">
           
          </md-input-container>
          <md-input-container>
            <input mdInput placeholder="Reg. Company Number" formControlName="companyNumber">
           
          </md-input-container>


        </div>

</div>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], ClientAccountsDetailFormComponent);
//# sourceMappingURL=detail-form.component.js.map