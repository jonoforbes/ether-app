import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { ClientAccount } from "../../entities/ClientAccount";

@Component({
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
})
export class ClientAccountStatusMenuComponent {

    @Output() updateStatus = new EventEmitter<string>(false);

    onSetActive(): void {
        this.updateStatus.emit("Active");
    }
    onSetInactive(): void {
        this.updateStatus.emit("Inactive");
    }
    onSetReview(): void {
        this.updateStatus.emit("Review");
    }
    onSetAttention(): void {
        this.updateStatus.emit("Attention");
    }
    onSetDeletion(): void {
        this.updateStatus.emit("Deletion");
    }
}