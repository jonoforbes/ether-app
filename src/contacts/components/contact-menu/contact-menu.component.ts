import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ClientAccountAssignmentSelectorComponent} from "../../../client-accounts/components/assignment-selector/assignment-selector.component";

@Component({
    selector: "contact-menu",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button 
            md-button 
            [mdMenuTriggerFor]="taskMenu" 
            type="button">
            <md-icon style="color: #838383; width: 20px;">more_vert</md-icon>
            
        </button>
        
        <md-menu x-position="before" #taskMenu="mdMenu">
            <account-assignment-selector [fullTitle]="true" (updateClientAccount)="onUpdateClientAccount($event)"></account-assignment-selector>
        </md-menu>
    
    
    
    
    `




})
export class ContactMenuComponent {
    @Output() updateClientAccount = new EventEmitter<string>();
    @Output() updateSale = new EventEmitter<string>();

    constructor() {

    }

    onUpdateClientAccount(accountId: string): void {
        console.log('account emitted through menu', accountId);
        this.updateClientAccount.emit(accountId);
    }

    onUpdateSale(saleId: string): void {
        this.updateSale.emit(saleId);
    }
}