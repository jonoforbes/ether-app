var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { VIEW_MODE } from '../../constants';
export let TopbarComponent = class TopbarComponent {
    constructor() {
        this.previous = new EventEmitter();
        this.next = new EventEmitter();
        this.setViewMode = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.VIEW_MODE = VIEW_MODE;
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TopbarComponent.prototype, "previous", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TopbarComponent.prototype, "next", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TopbarComponent.prototype, "setViewMode", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TopbarComponent.prototype, "searchChanged", void 0);
TopbarComponent = __decorate([
    Component({
        selector: 'topbar',
        template: `<md-toolbar color="primary">
    <span>Reactive calendar</span>
    <md-toolbar-row>
        <button md-fab (click)="previous.emit()" color="primary">
            <md-icon>chevron_left</md-icon>
        </button>
        <button md-fab (click)="next.emit()" color="primary">
            <md-icon>chevron_right</md-icon>
        </button>

        <button md-button (click)="setViewMode.emit(VIEW_MODE.DAY)">Day</button>
        <button md-button (click)="setViewMode.emit(VIEW_MODE.WEEK)">Week</button>
        <button md-button (click)="setViewMode.emit(VIEW_MODE.MONTH)">Month</button>
    </md-toolbar-row>
    <md-toolbar-row>
        <md-input-container flex>
            <input mdInput (keyup)="searchChanged.emit($event.target.value)"/>
            <md-icon class="material-icons">&#xE8B6;</md-icon>
        </md-input-container>
    </md-toolbar-row>
</md-toolbar>
`,
    }), 
    __metadata('design:paramtypes', [])
], TopbarComponent);
//# sourceMappingURL=topbar.component.js.map