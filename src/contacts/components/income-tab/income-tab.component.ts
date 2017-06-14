import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "income-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <form (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div fxLayout="column" class="contactTabContainer" style="overflow: hidden !important" fxFlex="570px">
        <div style="height: 15px"></div>
        <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Employment (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tEmployment">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntEmployment">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Self-Employment Y1 (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tSelfEmployedY1">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntSelfEmployedY1">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Self-Employment Y2 (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tSelfEmployedY2">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntSelfEmployedY2">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Pension (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
                <input mdInput type="number" placeholder="Taxable" formControlName="tPension">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
                <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntPension">
            </md-input-container>
        </div>
          <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>State Pension (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tStatePension">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntStatePension">
            </md-input-container>
          </div>
          <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>State Benefit (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tStateBenefit">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntStateBenefit">
            </md-input-container>
          </div>
          <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Other (£)</h3>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="tIncomeTabForm">
              <input mdInput type="number" placeholder="Taxable" formControlName="tOther">
            </md-input-container>
            <md-input-container floatPlaceholder="always" fxFlex="100px" [formGroup]="ntIncomeTabForm">
              <input mdInput type="number" placeholder="Non-Taxable" formControlName="ntOther">
            </md-input-container>
          </div>
          <h2 class="widget-head" style="margin-left: -5px; margin-top: -5px !important; margin-bottom: -10px !important"></h2>

          <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Totals: (£)</h3>
            <h3 fxFlex="95px">{{tIncomeSum}}</h3>
            <h3 fxFlex="115px">{{ntIncomeSum}}</h3>

          </div>
          <div style="height: 15px"></div>
          
          
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
export class IncomeTabComponent implements OnInit {
    @Input() contact: Contact;
    @Input() id: string;
    @Output() updateContact = new EventEmitter<Contact>();

    constructor(private formBuilder: FormBuilder) {

    }

    tIncomeTabForm: FormGroup;
    ntIncomeTabForm: FormGroup;
    tIncomeSum: Number;
    ntIncomeSum: Number;

    
    

    ngOnInit(): void {
        this.tIncomeTabForm = this.formBuilder.group({
            tEmployment: [this.contact.tEmployment],           
            tSelfEmployedY1: [this.contact.tSelfEmployedY1],
            tSelfEmployedY2: [this.contact.tSelfEmployedY2],
            tPension: [this.contact.tPension],
            tStatePension: [this.contact.tStatePension],
            tStateBenefit: [this.contact.tStateBenefit],
            tOther: [this.contact.tOther],
            
        });
        this.ntIncomeTabForm = this.formBuilder.group({
            ntEmployment: [this.contact.ntEmployment],
            ntSelfEmployedY1: [this.contact.ntSelfEmployedY1],
            ntSelfEmployedY2: [this.contact.ntSelfEmployedY2],
            ntPension: [this.contact.ntPension],
            ntStatePension: [this.contact.ntStatePension],
            ntStateBenefit: [this.contact.ntStateBenefit],
            ntOther: [this.contact.ntOther]
            
        });

        this.tIncomeSum = this.tIncomeTabForm.value.tEmployment + 
                          this.tIncomeTabForm.value.tSelfEmployedY1 +
                          this.tIncomeTabForm.value.tSelfEmployedY2 +
                          this.tIncomeTabForm.value.tPension +
                          this.tIncomeTabForm.value.tStatePension +
                          this.tIncomeTabForm.value.tStateBenefit +
                          this.tIncomeTabForm.value.tOther;

        this.ntIncomeSum =  this.ntIncomeTabForm.value.ntEmployment + 
                            this.ntIncomeTabForm.value.ntSelfEmployedY1 +
                            this.ntIncomeTabForm.value.ntSelfEmployedY2 +
                            this.ntIncomeTabForm.value.ntPension +
                            this.ntIncomeTabForm.value.ntStatePension +
                            this.ntIncomeTabForm.value.ntStateBenefit +
                            this.ntIncomeTabForm.value.ntOther;

        this.tIncomeTabForm.valueChanges.debounceTime(400).subscribe(
            (form: any) => {
                console.log('form value', form);
                this.tIncomeSum = form.tEmployment + 
                          form.tSelfEmployedY1 +
                          form.tSelfEmployedY2 +
                          form.tPension +
                          form.tStatePension +
                          form.tStateBenefit +
                          form.tOther;
            }
        );
        this.ntIncomeTabForm.valueChanges.debounceTime(400).subscribe(
            (form: any) => {
                console.log('form value', form);
                this.ntIncomeSum = form.ntEmployment + 
                          form.ntSelfEmployedY1 +
                          form.ntSelfEmployedY2 +
                          form.ntPension +
                          form.ntStatePension +
                          form.ntStateBenefit +
                          form.tOther;
            }
        );


    }

    onSubmit(): void {

        this.updateContact.emit(Object.assign(this.contact, this.tIncomeTabForm.value, this.ntIncomeTabForm.value));
    }
}