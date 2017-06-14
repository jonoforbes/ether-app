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
export let MessagesMasterListComponent = class MessagesMasterListComponent {
    constructor(router) {
        this.router = router;
    }
    selectThread(item) {
        this.router.navigate(['/messages', { outlets: { 'm': ['list'], 'd': [item.userId] } }]);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], MessagesMasterListComponent.prototype, "team", void 0);
MessagesMasterListComponent = __decorate([
    Component({
        selector: "messages-master-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `

        <md-nav-list>

          <button md-button *ngFor="let item of team" style="align-items: true" (click)="selectThread(item)">
          
            <div fxLayout="column" class="initialsBoxAccountInactive">
                <h1>{{item.firstName | slice:0:1}}{{item.lastName | slice:0:1}}</h1>
            </div>
            <h3 style="margin-top: 17px" md-line>{{item.firstName}} {{item.lastName}}</h3>
            
          
          </button>

      </md-nav-list>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], MessagesMasterListComponent);
//# sourceMappingURL=master-list.component.js.map