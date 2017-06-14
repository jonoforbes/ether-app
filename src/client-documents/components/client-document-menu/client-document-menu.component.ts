import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
// import { ContactAssignmentSelectorComponent } from "../../../contacts/components/assignment-selector/assignment-selector.component";
// import { ClientAccountAssignmentSelectorComponent} from "../../../client-accounts/components/assignment-selector/assignment-selector.component";

@Component({
    selector: "client-document-menu",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button 
            md-button 
            [mdMenuTriggerFor]="taskMenu" 
            type="button">
            <md-icon style="color: #838383; width: 20px;">more_vert</md-icon>
            
        </button>
        
        <md-menu x-position="before" #taskMenu="mdMenu">
            <contact-assignment-selector (updateContact)="onUpdateContact($event)"></contact-assignment-selector>
            <account-assignment-selector [fullTitle]="true" (updateClientAccount)="onUpdateClientAccount($event)"></account-assignment-selector>
            <document-assignment-selector (updateDescription)="onUpdateDescription($event)"></document-assignment-selector>
        </md-menu>
    
    
    
    
    `




})
export class ClientDocumentMenuComponent {
    @Output() updateContact = new EventEmitter<string>();
    @Output() updateClientAccount = new EventEmitter<string>();
    @Output() updateSale = new EventEmitter<string>();
    @Output() updateDescription = new EventEmitter<string>();

    constructor() {

    }

    onUpdateContact(contactId: string): void {
        console.log('contact emitted through menu', contactId);
        this.updateContact.emit(contactId);
    }

    onUpdateClientAccount(accountId: string): void {
        this.updateClientAccount.emit(accountId);
    }

    onUpdateSale(saleId: string): void {
        this.updateSale.emit(saleId);
    }

    onUpdateDescription(description: string): void {
        this.updateDescription.emit(description);
    }
}