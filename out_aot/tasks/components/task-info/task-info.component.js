var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { Task } from "../../entities/Task";
export let TaskInfoComponent = class TaskInfoComponent {
    constructor() {
    }
    ngOnInit() {
        this.contactId = this.task.contactId;
        console.log('contact', this.contactId);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Task)
], TaskInfoComponent.prototype, "task", void 0);
TaskInfoComponent = __decorate([
    Component({
        selector: "task-info",
        template: `
    
    <div fxLayout="row">
        <contact-assignment-info [id]="contactId"></contact-assignment-info>

    </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], TaskInfoComponent);
//# sourceMappingURL=task-info.component.js.map