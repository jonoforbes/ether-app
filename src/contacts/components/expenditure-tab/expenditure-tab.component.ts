import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "expenditure-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <form (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div fxLayout="column" class="contactTabContainer" style="overflow: hidden !important" fxFlex="570px">
        <div style="height: 10px"></div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Policy Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyPolicyExpenditure">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Essential Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyEssentialExpenditure">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Discretionary Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyDiscretionaryExpenditure">
            </md-input-container>
        </div>
          <h2 class="widget-head" style="margin-top: -5px !important"></h2>
        <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Emergency Funds (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Available" formControlName="emergencyFundsAvailable">
            </md-input-container>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Recommended" formControlName="emergencyFundsRecommended">
            </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="expenditureTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="futureCircumstances">
                <span style="margin-left: 10px;">Is the client's future financial circumstance likely to change? (add comments)</span>
            </md-checkbox>
          </div>
        <div style="height: 10px"></div>



          
        </div>
        <div fxLayout="column" fxFlex="30px"></div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

        <div style="height: 15px"></div>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Save changes</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>

          
        </div>
        </div>
      </form>
    `
})
export class ExpenditureTabComponent implements OnInit {
    @Input() contact: Contact;
    @Input() id: string;
    @Output() updateContact = new EventEmitter<Contact>();

    constructor(private formBuilder: FormBuilder) {

    }

    expenditureTabForm: FormGroup;
    tIncomeSum: Number;
    ntIncomeSum: Number;

    
    

    ngOnInit(): void {
        this.expenditureTabForm = this.formBuilder.group({
            monthlyPolicyExpenditure: [this.contact.monthlyPolicyExpenditure],
            monthlyEssentialExpenditure: [this.contact.monthlyEssentialExpenditure],
            monthlyDiscretionaryExpenditure: [this.contact.monthlyDiscretionaryExpenditure],
            emergencyFundsAvailable: [this.contact.emergencyFundsAvailable],
            emergencyFundsRecommended: [this.contact.emergencyFundsRecommended],
            futureCircumstances: [this.contact.futureCircumstances]
            
        });
        // this.ntIncomeTabForm = this.formBuilder.group({
        //     ntEmployment: [this.contact.ntEmployment],
        //     ntSelfEmployedY1: [this.contact.ntSelfEmployedY1],
        //     ntSelfEmployedY2: [this.contact.ntSelfEmployedY2],
        //     ntPension: [this.contact.ntPension],
        //     ntStatePension: [this.contact.ntStatePension],
        //     ntStateBenefit: [this.contact.ntStateBenefit],
        //     ntOther: [this.contact.ntOther]
            
        // });

        // this.tIncomeSum = this.tIncomeTabForm.value.tEmployment + 
        //                   this.tIncomeTabForm.value.tSelfEmployedY1 +
        //                   this.tIncomeTabForm.value.tSelfEmployedY2 +
        //                   this.tIncomeTabForm.value.tPension +
        //                   this.tIncomeTabForm.value.tStatePension +
        //                   this.tIncomeTabForm.value.tStateBenefit +
        //                   this.tIncomeTabForm.value.tOther;

        // this.ntIncomeSum =  this.ntIncomeTabForm.value.ntEmployment + 
        //                     this.ntIncomeTabForm.value.ntSelfEmployedY1 +
        //                     this.ntIncomeTabForm.value.ntSelfEmployedY2 +
        //                     this.ntIncomeTabForm.value.ntPension +
        //                     this.ntIncomeTabForm.value.ntStatePension +
        //                     this.ntIncomeTabForm.value.ntStateBenefit +
        //                     this.ntIncomeTabForm.value.ntOther;

        // this.tIncomeTabForm.valueChanges.debounceTime(400).subscribe(
        //     (form: any) => {
        //         console.log('form value', form);
        //         this.tIncomeSum = form.tEmployment + 
        //                   form.tSelfEmployedY1 +
        //                   form.tSelfEmployedY2 +
        //                   form.tPension +
        //                   form.tStatePension +
        //                   form.tStateBenefit +
        //                   form.tOther;
        //     }
        // );
        // this.ntIncomeTabForm.valueChanges.debounceTime(400).subscribe(
        //     (form: any) => {
        //         console.log('form value', form);
        //         this.ntIncomeSum = form.ntEmployment + 
        //                   form.ntSelfEmployedY1 +
        //                   form.ntSelfEmployedY2 +
        //                   form.ntPension +
        //                   form.ntStatePension +
        //                   form.ntStateBenefit +
        //                   form.tOther;
        //     }
        // );


    }

    onSubmit(): void {

        this.updateContact.emit(Object.assign(this.contact, this.expenditureTabForm.value));
    }
}