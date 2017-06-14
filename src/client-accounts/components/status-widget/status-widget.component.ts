import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
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


})
export class ClientAccountsStatusWidgetComponent {
    @Input() totalCount: number;
    @Input() activeCount: number;
    @Input() inactiveCount: number;
    @Input() reviewCount: number;
    @Input() attentionCount: number;
    @Input() deletionCount: number;



    public doughnutChartLabels:string[] = ['Attention Required', 'In Review', 'Active', 'Inactive', 'Marked for Deletion'];
    public doughnutChartData:any[];
    public doughnutChartType:string = 'doughnut';
    public doughnutChartColors:string[] = ['#f7ce71', '#0097a7', '#66bb6a', '#cccccc', '#af4448'];
    public doughnutChartOptions: any = {
        legend: {
            display: false
            // position: 'right'
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

    constructor() {

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
				}]
    }

}