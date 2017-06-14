var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
export let DayDetailComponent = class DayDetailComponent {
    constructor() {
        this.addAppointment = new EventEmitter();
        this.updateAppointment = new EventEmitter();
        this.removeAppointment = new EventEmitter();
        this.editMode = false;
    }
    add() {
        this.addAppointment.emit(moment(this.date).toDate());
    }
    update(appointment, $key) {
        this.updateAppointment.emit(Object.assign({ $key }, appointment));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Date)
], DayDetailComponent.prototype, "date", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], DayDetailComponent.prototype, "appointments", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayDetailComponent.prototype, "addAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayDetailComponent.prototype, "updateAppointment", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], DayDetailComponent.prototype, "removeAppointment", void 0);
DayDetailComponent = __decorate([
    Component({
        selector: 'day-detail',
        template: `<md-card *ngIf="date">
    {{date | date: "dd/MM/yyyy"}}&nbsp;
    <md-card-content>
        <table>
            <tr *ngFor="let appointment of appointments;"  [mdTooltipPosition]="'before'" mdTooltip="{{appointment.description}}">
                <td (click)="editMode = true">
                    <md-input-container class="example-full-width">
                        <input mdInput [(ngModel)]="appointment.description" (change)="update(appointment, appointment._id)">
                    </md-input-container>
                    {{appointment.date|date: "hh:mm"}}
                </td>
                <td>
                    <button md-mini-fab color="warn" (click)="removeAppointment.emit(appointment._id)">
                        <md-icon>delete</md-icon>
                    </button>
                </td>
            </tr>
        </table>
    </md-card-content>
    <md-card-actions>
        <button md-button color="primary" class="button-block" (click)="add()">
            <md-icon>add</md-icon>
        </button>
    </md-card-actions>
</md-card>
`
    }), 
    __metadata('design:paramtypes', [])
], DayDetailComponent);
//# sourceMappingURL=day-detail.component.js.map