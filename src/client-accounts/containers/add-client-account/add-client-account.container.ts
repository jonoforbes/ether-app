import { 
    Component, 
    OnInit, 
    Input, 
    Output, 
    EventEmitter, 
    ViewChild,
    ChangeDetectionStrategy
    
} from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { PopoverContent } from "ngx-popover";


@Component({
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
})
export class AddClientAccountContainer implements OnInit {
    @Output() onSave = new EventEmitter<ClientAccount>();
    @ViewChild('myPopover') myPopover: PopoverContent;

    clientAccount = new ClientAccount();
    public clientAccountForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,

    ) {
  
    }

    ngOnInit() {
        this.clientAccountForm = this.formBuilder.group({
            accountName: [this.clientAccount.accountName, Validators.required],
            accountType: [this.clientAccount.accountType, Validators.required],
            accountStatus: "Inactive"
        })
    }

    

    onSubmit(): void {
        this.onSave.emit(Object.assign(this.clientAccount, this.clientAccountForm.value));
        console.log('submitting');
        this.clientAccountForm.reset();
        this.closePopover();
        
    }

    closePopover(): void {
        this.myPopover.hide();
    }
}
