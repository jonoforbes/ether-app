import {Injectable} from "@angular/core";
import {ApplicationState} from "../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";

import { AppSandbox } from "../app/app.sandbox";
import { ToggleSidebar } from "../statemanagement/actions/containers/sidebar";
import { ToggleMasterBar } from "../statemanagement/actions/containers/master-bar";
import { ToggleActivitiesBar } from "../statemanagement/actions/containers/activities-bar";
import { ActivateRoute } from "../statemanagement/actions/containers/active-module";
import { SetActivitiesBarMode } from "../statemanagement/actions/containers/activities-bar";

@Injectable()
export class CommonSandbox {
    isBusy$ = this.store.select(state => state.containers.application.isBusy);
    sidebarIsCollapsed$ = this.store.select(state => state.containers.collapsableSidebar.isCollapsed);
    activitiesBarIsCollapsed$ = this.store.select(state => state.containers.activitiesBar.isCollapsed);
    activitiesBarMode$ = this.store.select(state => state.containers.activitiesBar.mode);
    masterBarIsCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    activeModule$ = this.store.select(state => state.containers.activeModule.moduleName);

    constructor(private store: Store<ApplicationState>) {
    }

    activateModule(moduleName: String): void {
        this.store.dispatch(new ActivateRoute(moduleName));
    }

    setActivitiesBarMode(mode: string): void {
        this.store.dispatch(new SetActivitiesBarMode(mode));
    }

    toggleSidebar(): void {
        this.store.dispatch(new ToggleSidebar());
    }
    toggleActivitiesBar(): void {
        this.store.dispatch(new ToggleActivitiesBar());
    }
    toggleMasterBar(): void {
        this.store.dispatch(new ToggleMasterBar());
    }
}