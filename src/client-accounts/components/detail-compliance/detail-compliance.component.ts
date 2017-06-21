import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector: "client-accounts-detail-compliance",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <accordion class="compliance-accordion" [closeOthers]="false" [showArrows]="true">
          
          <accordion-group class="compliance-accordion" [isOpened]="true">
            <accordion-heading class="compliance-accordion">
              <h2 class="widget widget-head">Wealth Source</h2>
            </accordion-heading>
            <div fxLayout="row">
              <div class="contact-form tabContainer" fxLayout="column" fxFlex="630px">
                <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="clientAccountForm">

                  <md-checkbox class="selectionCheckbox" style="margin-left: 15px" formControlName="wealthIncome">
                            <span style="margin-left: 10px;">Income</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" formControlName="wealthBonus">
                            <span style="margin-left: 10px;">Bonus</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" formControlName="wealthHouseSale">
                            <span style="margin-left: 10px;">House Sale</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-right: 40px" formControlName="wealthBusinessSale">
                            <span style="margin-left: 10px;">Business Sale</span>
                  </md-checkbox>
                </div>
                <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="clientAccountForm">

                  <md-checkbox class="selectionCheckbox" style="margin-left: 15px" formControlName="wealthInheritance">
                            <span style="margin-left: 10px;">Inheritance</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" formControlName="wealthReplacement">
                            <span style="margin-left: 10px;">Replacement</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" formControlName="wealthDivorce">
                            <span style="margin-left: 10px;">Divorce</span>
                  </md-checkbox>
                  <md-checkbox class="selectionCheckbox" style="margin-right: 40px" formControlName="wealthOther">
                            <span style="margin-left: 10px;">Other</span>
                  </md-checkbox>
                </div>
              </div>
              <div fxLayout="column" fxFlex="50px">
                <div style="height: 27px"></div>
                <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">save</md-icon></button>
                <button md-button type="button" (click)="onOpenComments('Wealth Source')" class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">message</md-icon></button>
              </div>
              <div fxLayout="column" fxFlex fxLayoutAlign="start end">
                <div style="height: 20px"></div>

              </div>
            </div>
          </accordion-group>

          <accordion-group [isOpened]="false">
            <accordion-heading>
                <h2 class="widget widget-head">Funds Source</h2>
            </accordion-heading>
                  <div fxLayout="row">
                  
                  <div class="contact-form tabContainer" fxLayout="column" fxFlex="630px">

                  <div class="contact-form-row" fxLayoutAlign="space-between" fxLayout="row" [formGroup]="clientAccountForm">

                    <md-checkbox class="selectionCheckbox" style="margin-left: 15px" formControlName="fundsUKBank">
                              <span style="margin-left: 10px;">UK Bank Account</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" formControlName="fundsEUBank">
                              <span style="margin-left: 10px;">EU Bank Account</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-right: 40px" formControlName="fundsBSOC">
                              <span style="margin-left: 10px;">Banking Society Account</span>
                    </md-checkbox>
                  </div>
                  <div class="contact-form-row" fxLayoutAlign="space-between" fxLayout="row" [formGroup]="clientAccountForm">

                    <md-checkbox class="selectionCheckbox" style="margin-left: 15px" formControlName="fundsStock">
                              <span style="margin-left: 10px;">Stockbrokers</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" formControlName="fundsOtherReg">
                              <span style="margin-left: 10px;">Other Regulated Firm</span>
                    </md-checkbox>
                    <md-checkbox class="selectionCheckbox" style="margin-right: 40px" formControlName="fundsSolicitor">
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
                  <button md-button type="button" (click)="onOpenComments('Funds Source')" class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">message</md-icon></button>
                </div>
                  
              </div>
          </accordion-group>
</accordion>
    `
})
export class ClientAccountsDetailComplianceComponent {
  @Input() clientAccountForm: FormGroup;
  @Output() openComments = new EventEmitter<{parentId: string, commentType: string}>();

  accountStatuses = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'Inactive', viewValue: 'Inactive'}
  ]


  onOpenComments(section: string) {
    var commentParams: any = {
      parentId: this.clientAccountForm.controls['_id'].value,
      commentType: `${this.clientAccountForm.controls['accountName'].value} - ${section}`
    };
    console.log(commentParams);
    this.openComments.emit(Object.assign({}, commentParams));
  }

}

// <button class="btn btn-lg btn-danger" (click)="onRemove(); false"><i class="fa fa-trash-o"></i></button>