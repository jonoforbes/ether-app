var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
export let ClientAccountsProgressWidgetComponent = class ClientAccountsProgressWidgetComponent {
    constructor() {
        this.color = '#0097a7';
        this.mode = 'determinate';
    }
    ngOnInit() {
        if (this.accountStatus == 'Inactive') {
            this.value = 26;
        }
        if (this.accountStatus == 'Attention') {
            this.value = 50;
        }
        if (this.accountStatus == 'Review') {
            this.value = 76;
        }
        if (this.accountStatus == 'Active') {
            this.value = 100;
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], ClientAccountsProgressWidgetComponent.prototype, "accountStatus", void 0);
ClientAccountsProgressWidgetComponent = __decorate([
    Component({
        selector: "client-accounts-progress-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
        
        <div class="progress-widget" fxLayout="row" fxLayoutAlign="space-around end">
            <button md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountInactive"></div>
                        <h3 *ngIf="accountStatus == 'Inactive'" style="margin-top: 17px !important" md-line>Draft Account</h3>
                        <h3 *ngIf="accountStatus !== 'Inactive'" style="margin-top: 17px; color: #c9c9c9 !important" md-line>Draft Account</h3>
            </button>
            <button md-button style="align-items: true" disabled="true">
                        <div *ngIf="accountStatus == 'Attention'" class="initialsBoxAccountAttention"></div>
                        <div *ngIf="accountStatus !== 'Attention'" class="initialsBoxAccountInactive"></div>
                        <h3 *ngIf="accountStatus == 'Attention'" style="margin-top: 17px !important" md-line>Needs Attention</h3>
                        <h3 *ngIf="accountStatus !== 'Attention'" style="margin-top: 17px; color: #c9c9c9 !important" md-line>Needs Attention</h3>
            </button>
            <button md-button style="align-items: true" disabled="true">
                        <div *ngIf="accountStatus == 'Review'" class="initialsBoxAccountReview"></div>
                        <div *ngIf="accountStatus !== 'Review'" class="initialsBoxAccountInactive"></div>
                        <h3 *ngIf="accountStatus == 'Review'" style="margin-top: 17px" md-line>In Review</h3>
                        <h3 *ngIf="accountStatus !== 'Review'" style="margin-top: 17px; color: #c9c9c9 !important" md-line>In Review</h3>
            </button>
            <button md-button style="align-items: true" disabled="true">
                        <div *ngIf="accountStatus == 'Active'" class="initialsBoxAccountActive"></div>
                        <div *ngIf="accountStatus !== 'Active'" class="initialsBoxAccountInactive"></div>
                        <h3 *ngIf="accountStatus == 'Active'" style="margin-top: 17px" md-line>Active</h3>
                        <h3 *ngIf="accountStatus !== 'Active'" style="margin-top: 17px; color: #c9c9c9 !important" md-line>Active</h3>
            </button>

        
        </div>
        <div style="margin: 2px -5px 0px -16px" fxLayout="row">
            <md-progress-bar
                *ngIf="accountStatus == 'Inactive'"
                class="progressBarInactive"
                [color]="color"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </md-progress-bar>
            <md-progress-bar
                *ngIf="accountStatus == 'Active'"
                class="progressBarActive"
                [color]="color"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </md-progress-bar>
            <md-progress-bar
                *ngIf="accountStatus == 'Review'"
                class="progressBarReview"
                [color]="color"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </md-progress-bar>
            <md-progress-bar
                *ngIf="accountStatus == 'Attention'"
                class="progressBarAttention"
                [color]="color"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </md-progress-bar>
        
        </div>
    
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientAccountsProgressWidgetComponent);
//# sourceMappingURL=progress-widget.component.js.map