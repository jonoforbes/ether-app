import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ClientDocument } from "../../entities/ClientDocument";
import { ClientDocumentMenuComponent } from "../client-document-menu/client-document-menu.component";

@Component({
    selector: "client-documents-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-nav-list>
        <div fxLayout="row" *ngFor="let clientDocument of clientDocuments">
        <button fxLayoutAlign="start" md-button (click)="selectDetail(clientDocument)">
            <md-icon>insert_drive_file</md-icon>
            <div fxLayout="column">
            <h3 *ngIf="fullTitle" style="margin-top: 17px" md-line>{{clientDocument.name}}</h3>
            
            <h3 *ngIf="!fullTitle" style="margin-top: 17px" md-line>{{clientDocument.name | slice:0:25}}</h3>
            <p style="margin-top: 17px; left: 60px;">{{clientDocument.description}}</p>
            </div>
          
          </button>
          <client-document-menu
            (updateContact)="onUpdateContact(clientDocument, $event)"
            (updateClientAccount)="onUpdateClientAccount(clientDocument, $event)"
            (updateDescription)="onUpdateDescription(clientDocument, $event)"
          ></client-document-menu>

          </div>
      </md-nav-list>
    `
})
export class ClientDocumentsMasterListComponent {
    @Input() fullTitle: Boolean = false;
    @Input() clientDocuments: Array<ClientDocument>;
    @Output() updateContact = new EventEmitter<{clientDocument: ClientDocument, contactId: string}>();
    @Output() updateClientAccount = new EventEmitter<{clientDocument: ClientDocument, accountId: string}>();
    @Output() updateDescription = new EventEmitter<{clientDocument: ClientDocument, description: string}>();


    constructor( private router: Router) {

    }

    onUpdateContact(clientDocument: ClientDocument, contactId: string): void {
        console.log('contact emitted through list', contactId);
        this.updateContact.emit({clientDocument, contactId});
    }

    onUpdateClientAccount(clientDocument: ClientDocument, accountId: string): void {
        this.updateClientAccount.emit({clientDocument, accountId});
    }

    onUpdateDescription(clientDocument: ClientDocument, description: string): void {
        this.updateDescription.emit({clientDocument, description});
    }

    selectDetail(clientDocument: ClientDocument) {
        this.router.navigate(['/documents', {outlets: {'m': ['list'], 'd': [clientDocument._id]}}]);
    }


    
}