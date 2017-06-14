import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
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
})
export class ClientAccountsDetailFormComponent {
  @Input() clientAccountForm: FormGroup;
  @Output() remove = new EventEmitter();

  accountStatuses = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'Inactive', viewValue: 'Inactive'}
  ]

  constructor( private router: Router ) {

  }

  onRemove(): void {
    this.router.navigate(['/accounts', {outlets: {'m': ['list'], 'd': ['add']}}]);
    this.remove.emit(null);
  }

}

// <button class="btn btn-lg btn-danger" (click)="onRemove(); false"><i class="fa fa-trash-o"></i></button>