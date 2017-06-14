import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import * as moment from "moment";
import Moment = moment.Moment;

@Component({
    selector: "tasks-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <md-toolbar 
        fxFill 
        class="context-subheader" 
        color="primary" 
        style="height: 66px !important; 
                background-color: #fff !important; 
                margin-bottom: 0px;
                overflow-y: hidden !important;
                z-index: 2;
                position: fixed;
                top: 0px">
        <div class="welcomeBlock">
        <h3>{{headerText}}</h3>
        <button md-button style="padding: 2px 10px 2px 1px !important">
      <p style="text-align: left !important">{{headerDate}}</p>
    </button>
        </div>

    </md-toolbar>
    
    
    
    `
})
export class TasksHeaderComponent implements OnInit {
    @Input() title: string;
    @Input() date: string;
    
    headerDate: string;
    headerText: string

    constructor() {
        
    }
    ngOnInit() {
        this.headerText = this.title;
        this.headerDate = this.date;

    }
}