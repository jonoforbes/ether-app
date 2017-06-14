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
export let ClientAccountsStatusWidgetComponent = class ClientAccountsStatusWidgetComponent {
    constructor() {
        this.doughnutChartLabels = ['Attention Required', 'In Review', 'Active', 'Inactive', 'Marked for Deletion'];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = ['#f7ce71', '#0097a7', '#66bb6a', '#cccccc', '#af4448'];
        this.doughnutChartOptions = {
            legend: {
                display: false
            },
            animation: {
                duration: 300
            },
            layout: {
                padding: {
                    left: 20,
                    right: 10,
                    top: 0,
                    bottom: 10
                }
            }
        };
    }
    ngOnInit() {
        this.doughnutChartData = [{
                data: [
                    this.attentionCount,
                    this.reviewCount,
                    this.activeCount,
                    this.inactiveCount,
                    this.deletionCount
                ],
                backgroundColor: this.doughnutChartColors,
                hoverBackgroundColor: this.doughnutChartColors
            }];
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "totalCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "activeCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "inactiveCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "reviewCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "attentionCount", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], ClientAccountsStatusWidgetComponent.prototype, "deletionCount", void 0);
ClientAccountsStatusWidgetComponent = __decorate([
    Component({
        selector: "client-accounts-status-widget",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="status-widget-card" fxLayout="row">
            <div fxFlex="255px" fxLayoutAlign="start">
                <canvas style="" baseChart
                    [datasets]="doughnutChartData"
                    [labels]="doughnutChartLabels"
                    [chartType]="doughnutChartType"
                    [options]="doughnutChartOptions"
                    [colors]="doughnutChartColors"
                    ></canvas>
            <div>
            <div fxFlex="320px" fxLayoutAlign="end">
                <md-nav-list style="margin-left: 20px">
                    <button style="width: 170px !important" md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountAttention"></div>
                        <h3 style="margin-top: 17px" md-line>{{attentionCount}} Accounts Requiring Attention</h3>
                    </button>
                    <button style="width: 170px !important" md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountActive"></div>
                        <h3 style="margin-top: 17px" md-line>{{activeCount}} Active Accounts</h3>
                    </button>
                    <button style="width: 170px !important" md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountReview"></div>
                        <h3 style="margin-top: 17px" md-line>{{reviewCount}} Accounts In Review</h3>
                    </button>
                    <button style="width: 170px !important" md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountInactive"></div>
                        <h3 style="margin-top: 17px" md-line>{{inactiveCount}} Draft Accounts</h3>
                    </button>
                    <button style="width: 170px !important" md-button style="align-items: true" disabled="true">
                        <div class="initialsBoxAccountDeletion"></div>
                        <h3 style="margin-top: 17px" md-line>{{deletionCount}} Accounts Marked For Deletion</h3>
                    </button>

                </md-nav-list>
            </div>
        
        </div>
    
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientAccountsStatusWidgetComponent);
//# sourceMappingURL=status-widget.component.js.map