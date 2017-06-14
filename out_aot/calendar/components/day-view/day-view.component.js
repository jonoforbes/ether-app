var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
export let DayViewComponent = class DayViewComponent {
    constructor() {
        this.addAppointment = new EventEmitter();
        this.updateAppointment = new EventEmitter();
        this.removeAppointment = new EventEmitter();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Date)
], DayViewComponent.prototype, "date", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DayViewComponent.prototype, "appointments", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayViewComponent.prototype, "addAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayViewComponent.prototype, "updateAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayViewComponent.prototype, "removeAppointment", void 0);
DayViewComponent = __decorate([
    Component({
        selector: 'day-view',
        template: `
        <h2>Day: {{date|date:"dd/MM/yyyy"}}</h2>
        <day-detail
                (addAppointment)="addAppointment.emit($event)"
                (removeAppointment)="removeAppointment.emit($event)"
                (updateAppointment)="updateAppointment.emit($event)"
                [date]="date"
                [appointments]="appointments">
        </day-detail>
        
`
    }), 
    __metadata('design:paramtypes', [])
], DayViewComponent);
//# sourceMappingURL=day-view.component.js.map