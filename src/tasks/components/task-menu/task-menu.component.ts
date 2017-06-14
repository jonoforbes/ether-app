import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { TeamAssignmentSelectorComponent } from "../../../team/components/assignment-selector/assignment-selector.component";
import { ContactAssignmentSelectorComponent } from "../../../contacts/components/assignment-selector/assignment-selector.component";
import { ClientAccountAssignmentSelectorComponent} from "../../../client-accounts/components/assignment-selector/assignment-selector.component";

@Component({
    selector: "task-menu",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button 
            md-button 
            [mdMenuTriggerFor]="taskMenu" 
            type="button">
            <md-icon style="color: #838383; width: 20px;">more_horiz</md-icon>
            
        </button>
        
        <md-menu x-position="before" #taskMenu="mdMenu">
            <contact-assignment-selector (updateContact)="onUpdateContact($event)"></contact-assignment-selector>
            <account-assignment-selector [fullTitle]="true" (updateClientAccount)="onUpdateClientAccount($event)"></account-assignment-selector>
            <team-assignment-selector (updateAssignee)="onUpdateAssignee($event)"></team-assignment-selector>
            <button md-menu-item (click)="onRemoveTask()"><h1>Remove Task</h1></button>
        </md-menu>
    
    
    
    
    `




})
export class TaskMenuComponent {
    @Output() updateContent = new EventEmitter<string>();
    @Output() updateContact = new EventEmitter<string>();
    @Output() updateClientAccount = new EventEmitter<string>();
    @Output() updateSale = new EventEmitter<string>();
    @Output() updateAssignee = new EventEmitter<string>();
    @Output() updateDueDate = new EventEmitter<string>();
    @Output() removeTask = new EventEmitter();

    constructor() {

    }

    onUpdateContent(content: string): void {
        this.updateContent.emit(content);
    }

    onUpdateContact(contactId: string): void {
        console.log('contact emitted through menu', contactId);
        this.updateContact.emit(contactId);
    }

    onUpdateClientAccount(accountId: string): void {
        console.log('account through menu', accountId);
        this.updateClientAccount.emit(accountId);
    }

    onUpdateSale(saleId: string): void {
        this.updateSale.emit(saleId);
    }

    onUpdateAssignee(recipientId: string): void {
        console.log('assignee emitted through menu', recipientId);
        this.updateAssignee.emit(recipientId);
    }

    onUpdateDueDate(dueDate: string): void {
        this.updateDueDate.emit(dueDate);
    }

    onRemoveTask(): void {
        console.log('remove emitted through menu');
        this.removeTask.emit();
    }
}