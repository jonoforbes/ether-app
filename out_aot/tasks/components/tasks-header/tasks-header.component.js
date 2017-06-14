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
export let TasksHeaderComponent = class TasksHeaderComponent {
    constructor() {
    }
    ngOnInit() {
        this.headerText = this.title;
        this.headerDate = this.date;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], TasksHeaderComponent.prototype, "title", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], TasksHeaderComponent.prototype, "date", void 0);
TasksHeaderComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [])
], TasksHeaderComponent);
//# sourceMappingURL=tasks-header.component.js.map