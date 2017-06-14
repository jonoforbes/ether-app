import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { TasksSandbox } from "../../tasks.sandbox";
import { Task } from "../../entities/Task";
import { TasksFormGroupContainer } from "../tasks-form-group/tasks-form-group.container";

@Component({
    selector: "tasks-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        
     
        
        <button md-button (click)="navigateToday()" style="text-align: left !important; height: 40px; width: 100%; margin-top: 20px">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-right: 10px; margin-top: -5px">view_day</md-icon><p>Tasks for Today</p>
          </div>
        </button>
        <button md-button (click)="navigateThisWeek()" style="text-align: left !important; height: 40px; width: 100%">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-right: 10px; margin-top: -5px">view_week</md-icon><p>Tasks for This Week</p>
          </div>
        </button>
        <button md-button (click)="navigateNextWeek()" style="text-align: left !important; height: 40px; width: 100%">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-right: 10px; margin-top: -5px">view_week</md-icon><p>Tasks for Next Week</p>
          </div>
        </button>
        <button md-button (click)="navigateMonth()" style="text-align: left !important; height: 40px; width: 100%">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-right: 10px; margin-top: -5px">today</md-icon><p>Tasks for This Month</p>
          </div>
        </button>
        <button md-button (click)="navigateAll()" style="text-align: left !important; height: 40px; width: 100%">
          <div fxLayout="row">
          <md-icon style="color: #838383; margin-right: 10px; margin-top: -5px">chevron_right</md-icon><p>All Tasks</p>
          </div>
        </button>

       
    
    `
})
export class TasksMasterContainer {

    searchCtrl = new FormControl("");

    

    constructor(private sb: TasksSandbox,
                private route: ActivatedRoute,
                private router: Router) {

    }


    navigateAll(): void {
        this.router.navigate(['/tasks', {outlets: {'m': ['list'], 'd': ['all']}}]);
    }
    navigateToday(): void {
        this.router.navigate(['/tasks', {outlets: {'m': ['list'], 'd': ['today']}}]);
    }
    navigateThisWeek(): void {
        this.router.navigate(['/tasks', {outlets: {'m': ['list'], 'd': ['week']}}]);
    }
    navigateNextWeek(): void {
        this.router.navigate(['/tasks', {outlets: {'m': ['list'], 'd': ['nextweek']}}]);
    }
    navigateMonth(): void {
        this.router.navigate(['/tasks', {outlets: {'m': ['list'], 'd': ['month']}}]);
    }
}