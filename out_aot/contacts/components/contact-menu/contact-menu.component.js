var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
export let ContactMenuComponent = class ContactMenuComponent {
    constructor() {
        this.updateClientAccount = new EventEmitter();
        this.updateSale = new EventEmitter();
    }
    onUpdateClientAccount(accountId) {
        console.log('account emitted through menu', accountId);
        this.updateClientAccount.emit(accountId);
    }
    onUpdateSale(saleId) {
        this.updateSale.emit(saleId);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactMenuComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactMenuComponent.prototype, "updateSale", void 0);
ContactMenuComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], ContactMenuComponent);
//# sourceMappingURL=contact-menu.component.js.map