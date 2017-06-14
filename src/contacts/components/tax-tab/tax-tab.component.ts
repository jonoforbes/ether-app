import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';

@Component({
    selector: "tax-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <form (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div fxLayout="column" class="contactTabContainer" style="overflow-y: hidden !important" fxFlex="570px">
        <div style="height: 15px"></div>
        <div class="contact-form-row" fxLayout="row">
            <md-input-container fxFlex="50" [formGroup]="taxTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Tax Rate (%)" formControlName="taxRate">
            </md-input-container>
            <md-input-container fxFlex="47" [formGroup]="taxTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="National Insurance Number" formControlName="taxNI">
            </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="taxTabForm" fxLayout="row" fxLayoutAlign="start center">
            <md-checkbox fxFlex class="selectionCheckbox" style="margin-left: 0px" formControlName="taxResident">
                <span style="margin-left: 10px;">Is the client a UK Resident for tax purposes?</span>
            </md-checkbox>
            <dp-day-picker fxFlex="150px" placeholder="Residence Date" formControlName="taxResidenceDate" [config]="datePickerConfig"></dp-day-picker>
          </div>
        <div class="contact-form-row" [formGroup]="taxTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="taxDomicile">
                <span style="margin-left: 10px;">Is the client domiciled in the UK for tax purposes?</span>
            </md-checkbox>
          </div>
        <div class="contact-form-row" [formGroup]="taxTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="taxWillChange">
                <span style="margin-left: 10px;">Are the client's tax circumstances likely to change? (add comments)</span>
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
export class TaxTabComponent implements OnInit {
    @Input() contact: Contact;
    @Input() id: string;
    @Output() updateContact = new EventEmitter<Contact>();

    constructor(private formBuilder: FormBuilder) {

    }

    taxTabForm: FormGroup;

    datePickerConfig: IDayPickerConfig = {
        appendTo: document.body,
        showGoToCurrent: true,
        format: "DD-MM-YYYY"
    };
    

    ngOnInit(): void {
        this.taxTabForm = this.formBuilder.group({
            taxRate: [this.contact.taxRate],
            taxResident: [this.contact.taxResident],
            taxDomicile: [this.contact.taxDomicile],
            taxResidenceDate: [this.contact.taxResidenceDate],
            taxNI: [this.contact.taxNI],
            taxWillChange: [this.contact.taxWillChange]
            
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

        this.updateContact.emit(Object.assign(this.contact, this.taxTabForm.value));
    }
}