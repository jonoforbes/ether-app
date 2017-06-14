var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ContactsSandbox } from "../../contacts.sandbox";
export let AddContactContainer = class AddContactContainer {
    constructor(sb) {
        this.sb = sb;
    }
    onSave(contact) {
        this.sb.addContact(contact);
    }
};
AddContactContainer = __decorate([
    Component({
        selector: "add-contact",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="example-scrolling-content">
        


        <contacts-form-group (onSave)="onSave($event)"></contacts-form-group>

        
    </div>
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox])
], AddContactContainer);
//# sourceMappingURL=add-contact.container.js.map