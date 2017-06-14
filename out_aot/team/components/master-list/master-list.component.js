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
import { Router } from "@angular/router";
export let TeamMasterListComponent = class TeamMasterListComponent {
    constructor(router) {
        this.router = router;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], TeamMasterListComponent.prototype, "team", void 0);
TeamMasterListComponent = __decorate([
    Component({
        selector: "team-master-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <button md-button style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <p style="margin: 4px 170px 4px 10px;">+ &nbsp; &nbsp;Add New Team Member</p>
        </button>
        <md-nav-list>
        <button md-button *ngFor="let item of team" style="align-items: true">
          
          
            <h3 md-line>{{item.firstName}} {{item.lastName}}</h3>
            
          
          </button>

      </md-nav-list>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], TeamMasterListComponent);
//# sourceMappingURL=master-list.component.js.map