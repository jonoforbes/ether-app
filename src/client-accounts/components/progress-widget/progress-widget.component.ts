import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
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


})
export class ClientAccountsProgressWidgetComponent {
    @Input() accountStatus: string;

    color = '#0097a7';
  mode = 'determinate';
  value: number;

    constructor() {

    }

    ngOnInit() {
        if(this.accountStatus == 'Inactive') {

            this.value = 26;
        }
        if(this.accountStatus == 'Attention') {

            this.value = 50;
        }
        if(this.accountStatus == 'Review') {

            this.value = 76;
        }
        if(this.accountStatus == 'Active') {

            this.value = 100;
        }

    }

}