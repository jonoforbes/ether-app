var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
export let ClientAccountsDetailComplianceComponent = class ClientAccountsDetailComplianceComponent {
    constructor() {
        this.accountStatuses = [
            { value: 'Active', viewValue: 'Active' },
            { value: 'Inactive', viewValue: 'Inactive' }
        ];
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], ClientAccountsDetailComplianceComponent.prototype, "clientAccountForm", void 0);
ClientAccountsDetailComplianceComponent = __decorate([
    Component({
        selector: "client-accounts-detail-compliance",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <accordion class="compliance-accordion" [closeOthers]="false" [showArrows]="true" style="max-width: 500px !important">
          
          <accordion-group class="compliance-accordion" [isOpened]="true">
            <accordion-heading class="compliance-accordion">
              <h2 class="widget widget-head">Wealth Source</h2>
            </accordion-heading>
            <div fxLayout="row">
              <div class="contact-form tabContainer" fxLayout="column" fxFlex="570px">
                <div class="contact-form-row" fxLayout="row" [formGroup]="clientAccountForm">

                  <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 40px" formControlName="wealthIncome">
                            <span style="margin-left: 10px;">Income</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="wealthBonus">
                            <span style="margin-left: 10px;">Bonus</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="wealthHouseSale">
                            <span style="margin-left: 10px;">House Sale</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="wealthBusinessSale">
                            <span style="margin-left: 10px;">Business Sale</span>
                  </md-checkbox>
                </div>
                <div class="contact-form-row" fxLayout="row" [formGroup]="clientAccountForm">

                  <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 40px" formControlName="wealthInheritance">
                            <span style="margin-left: 10px;">Inheritance</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="wealthReplacement">
                            <span style="margin-left: 10px;">Replacement</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="wealthDivorce">
                            <span style="margin-left: 10px;">Divorce</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="wealthOther">
                            <span style="margin-left: 10px;">Other</span>
                  </md-checkbox>
                </div>
              </div>
              <div fxLayout="column" fxFlex="50px">
                <div style="height: 20px"></div>
                <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">save</md-icon></button>
              </div>
              <div fxLayout="column" fxFlex fxLayoutAlign="start end">
                <div style="height: 20px"></div>
                <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
                  <div fxLayout="row">
                  <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
                  </div>
                </button>
              </div>
            </div>
          </accordion-group>

          <accordion-group [isOpened]="true">
            <accordion-heading>
                <h2 class="widget widget-head">Funds Source</h2>
            </accordion-heading>
                  <div fxLayout="row">
                  
                  <div class="contact-form tabContainer" fxLayout="column" fxFlex="570px">

                  <div class="contact-form-row" fxLayout="row" [formGroup]="clientAccountForm">

                    <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 20px" formControlName="fundsUKBank">
                              <span style="margin-left: 10px;">UK Bank Account</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 20px" formControlName="fundsEUBank">
                              <span style="margin-left: 10px;">EU Bank Account</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 20px" formControlName="fundsBSOC">
                              <span style="margin-left: 10px;">Banking Society Account</span>
                    </md-checkbox>
                  </div>
                  <div class="contact-form-row" fxLayout="row" [formGroup]="clientAccountForm">

                    <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 40px" formControlName="fundsStock">
                              <span style="margin-left: 10px;">Stockbrokers</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="fundsOtherReg">
                              <span style="margin-left: 10px;">Other Regulated Firm</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 0px" formControlName="fundsSolicitor">
                              <span style="margin-left: 10px;">Solicitor's Account</span>
                    </md-checkbox>
                  </div>
                  <div class="contact-form-row" fxLayout="row" [formGroup]="clientAccountForm">
                    <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 40px" formControlName="fundsAccountant">
                              <span style="margin-left: 10px;">Accountant's Account</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="fundsOther">
                              <span style="margin-left: 10px;">Other</span>
                    </md-checkbox>
                  </div>

                  </div>
                <div fxLayout="column" fxFlex="50px">
                  <div style="height: 20px"></div>
                  <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">save</md-icon></button>
                </div>
                  <div fxLayout="column" fxFlex fxLayoutAlign="start end">
                <div style="height: 15px"></div>
                <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
                  <div fxLayout="row">
                  <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
                  </div>
                </button>
              </div>
              </div>
          </accordion-group>
</accordion>
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientAccountsDetailComplianceComponent);
//# sourceMappingURL=detail-compliance.component.js.map