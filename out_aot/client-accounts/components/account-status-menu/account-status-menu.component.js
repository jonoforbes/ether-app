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
export let ClientAccountStatusMenuComponent = class ClientAccountStatusMenuComponent {
    constructor() {
        this.updateStatus = new EventEmitter(false);
    }
    onSetActive() {
        this.updateStatus.emit("Active");
    }
    onSetInactive() {
        this.updateStatus.emit("Inactive");
    }
    onSetReview() {
        this.updateStatus.emit("Review");
    }
    onSetAttention() {
        this.updateStatus.emit("Attention");
    }
    onSetDeletion() {
        this.updateStatus.emit("Deletion");
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientAccountStatusMenuComponent.prototype, "updateStatus", void 0);
ClientAccountStatusMenuComponent = __decorate([
    Component({
        selector: "client-account-status-menu",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <button md-button style="padding: 2px 10px 2px 1px !important" [mdMenuTriggerFor]="statusMenu" type="button">
      <p style="text-align: left !important">Edit Account Status</p>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button md-menu-item (click)="onSetActive()" type="button"><h1>Active</h1></button>
        <button md-menu-item (click)="onSetInactive()" type="button"><h1>Inactive</h1></button>
        <button md-menu-item (click)="onSetReview()" type="button"><h1>Mark for Review</h1></button>
        <button md-menu-item (click)="onSetAttention()" type="button"><h1>Mark for Attention Needed</h1></button>
        <button md-menu-item (click)="onSetDeletion()" type="button"><h1>Mark for Deletion</h1></button>
    </md-menu>
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientAccountStatusMenuComponent);
//# sourceMappingURL=account-status-menu.component.js.map