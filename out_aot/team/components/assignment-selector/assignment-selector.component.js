var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { TeamSandbox } from "../../team.sandbox";
export let TeamAssignmentSelectorComponent = class TeamAssignmentSelectorComponent {
    constructor(sb) {
        this.sb = sb;
        this.updateAssignee = new EventEmitter();
    }
    ngOnInit() {
        this.assignableUsers$ = this.sb.team$;
    }
    onUpdateAssignee(recipientId) {
        console.log('assignee emitted through selector', recipientId);
        this.updateAssignee.emit(recipientId);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TeamAssignmentSelectorComponent.prototype, "updateAssignee", void 0);
TeamAssignmentSelectorComponent = __decorate([
    Component({
        selector: "team-assignment-selector",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Assign to a Team Member</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let user of assignableUsers$|async" md-menu-item (click)="onUpdateAssignee(user.userId)" type="button"><h1>{{user.firstName}} {{user.lastName}}</h1></button>

    </md-menu>

    
    `
    }), 
    __metadata('design:paramtypes', [TeamSandbox])
], TeamAssignmentSelectorComponent);
//# sourceMappingURL=assignment-selector.component.js.map