var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { ClientDocumentsSandbox } from "../../client-documents.sandbox";
export let ClientDocumentsMasterContainer = class ClientDocumentsMasterContainer {
    constructor(sb, el) {
        this.sb = sb;
        this.el = el;
        this.searchCtrl = new FormControl("");
        this.mode = "documents";
        this.id = "";
        this.clientDocuments$ = this.sb.clientDocuments$;
        this.matchingClientDocuments$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.clientDocuments$, (term, clientDocuments) => {
            return clientDocuments.filter(item => item.name.toLowerCase().indexOf(term) > -1);
        });
    }
    upload() {
        let inputEl = this.el.nativeElement.querySelector('#document-uploader');
        let fileCount = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) {
            formData.append('file', inputEl.files.item(0));
            let fileName = inputEl.files.item(0).name;
            this.sb.uploadFile(fileName, this.id, this.mode, formData);
        }
    }
    onUpdateContact(item) {
        console.log('doc emitted through container', item.clientDocument, item.contactId);
        this.sb.setContact(item.clientDocument, item.contactId);
    }
    onUpdateClientAccount(item) {
        this.sb.setAccount(item.clientDocument, item.accountId);
    }
    onUpdateDescription(item) {
        this.sb.setDescription(item.clientDocument, item.description);
    }
};
ClientDocumentsMasterContainer = __decorate([
    Component({
        selector: "client-documents-master",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Documents" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
      <div fxLayout="row">
        <div md-button class="fileUpload" type="button">
            <span style="color: #838383">Add New Document</span>
            <input type="file" id="document-uploader" class="upload"/>
        </div>
        <button md-icon-button type="button" (click)="upload()">
            <md-icon>cloud_upload</md-icon>
        </button>
    </div>
<client-documents-master-list 
    (updateContact)="onUpdateContact($event)"
    (updateClientAccount)="onUpdateClientAccount($event)"
    (updateDescription)="onUpdateDescription($event)"
    [clientDocuments]="matchingClientDocuments$ | async">
</client-documents-master-list>
    `
    }), 
    __metadata('design:paramtypes', [ClientDocumentsSandbox, ElementRef])
], ClientDocumentsMasterContainer);
//# sourceMappingURL=client-documents-master.container.js.map