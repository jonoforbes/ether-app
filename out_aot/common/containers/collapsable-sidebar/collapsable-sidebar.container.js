var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from "@angular/core";
import { CommonSandbox } from "../../common.sandbox";
export let CollapsableSidebarContainer = class CollapsableSidebarContainer {
    constructor(sandbox) {
        this.sandbox = sandbox;
        this.isCollapsed$ = this.sandbox.sidebarIsCollapsed$;
    }
    toggle() {
        this.sandbox.toggleSidebar();
    }
};
CollapsableSidebarContainer = __decorate([
    Component({
        selector: "collapsable-sidebar",
        encapsulation: ViewEncapsulation.None,
        template: `
        <div class="collapsable-part" [class.is-collapsed]="isCollapsed$|async">
            <button class="btn btn-primary btn-collapsable" (click)="toggle()">
                <i class="fa" [class.fa-chevron-right]="isCollapsed$| async" 
                    [class.fa-chevron-left]="(isCollapsed$| async) === false"></i>
            </button>
            <ng-content *ngIf="(isCollapsed$| async) === false"></ng-content>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [CommonSandbox])
], CollapsableSidebarContainer);
//# sourceMappingURL=collapsable-sidebar.container.js.map