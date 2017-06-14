import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
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
})
export class ClientAccountsDetailComplianceComponent {
  @Input() clientAccountForm: FormGroup;

  accountStatuses = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'Inactive', viewValue: 'Inactive'}
  ]


}

// <button class="btn btn-lg btn-danger" (click)="onRemove(); false"><i class="fa fa-trash-o"></i></button>