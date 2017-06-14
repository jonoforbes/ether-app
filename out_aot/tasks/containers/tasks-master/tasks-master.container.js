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
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { TasksSandbox } from "../../tasks.sandbox";
export let TasksMasterContainer = class TasksMasterContainer {
    constructor(sb, route, router) {
        this.sb = sb;
        this.route = route;
        this.router = router;
        this.searchCtrl = new FormControl("");
    }
    navigateAll() {
        this.router.navigate(['/tasks', { outlets: { 'm': ['list'], 'd': ['all'] } }]);
    }
    navigateToday() {
        this.router.navigate(['/tasks', { outlets: { 'm': ['list'], 'd': ['today'] } }]);
    }
    navigateThisWeek() {
        this.router.navigate(['/tasks', { outlets: { 'm': ['list'], 'd': ['week'] } }]);
    }
    navigateNextWeek() {
        this.router.navigate(['/tasks', { outlets: { 'm': ['list'], 'd': ['nextweek'] } }]);
    }
    navigateMonth() {
        this.router.navigate(['/tasks', { outlets: { 'm': ['list'], 'd': ['month'] } }]);
    }
};
TasksMasterContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [TasksSandbox, ActivatedRoute, Router])
], TasksMasterContainer);
//# sourceMappingURL=tasks-master.container.js.map