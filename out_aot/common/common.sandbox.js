var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToggleSidebar } from "../statemanagement/actions/containers/sidebar";
import { ToggleMasterBar } from "../statemanagement/actions/containers/master-bar";
import { ToggleActivitiesBar } from "../statemanagement/actions/containers/activities-bar";
import { ActivateRoute } from "../statemanagement/actions/containers/active-module";
import { SetActivitiesBarMode } from "../statemanagement/actions/containers/activities-bar";
export let CommonSandbox = class CommonSandbox {
    constructor(store) {
        this.store = store;
        this.isBusy$ = this.store.select(state => state.containers.application.isBusy);
        this.sidebarIsCollapsed$ = this.store.select(state => state.containers.collapsableSidebar.isCollapsed);
        this.activitiesBarIsCollapsed$ = this.store.select(state => state.containers.activitiesBar.isCollapsed);
        this.activitiesBarMode$ = this.store.select(state => state.containers.activitiesBar.mode);
        this.masterBarIsCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
        this.activeModule$ = this.store.select(state => state.containers.activeModule.moduleName);
    }
    activateModule(moduleName) {
        this.store.dispatch(new ActivateRoute(moduleName));
    }
    setActivitiesBarMode(mode) {
        this.store.dispatch(new SetActivitiesBarMode(mode));
    }
    toggleSidebar() {
        this.store.dispatch(new ToggleSidebar());
    }
    toggleActivitiesBar() {
        this.store.dispatch(new ToggleActivitiesBar());
    }
    toggleMasterBar() {
        this.store.dispatch(new ToggleMasterBar());
    }
};
CommonSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store])
], CommonSandbox);
//# sourceMappingURL=common.sandbox.js.map