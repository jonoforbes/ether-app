import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Task } from "../../entities/Task";
import { Observable } from "rxjs/Observable";
import { TasksSandbox } from "../../tasks.sandbox";

@Component({
    selector: "tasks-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <md-sidenav-container class="example-sidenav-fab-container">
                <md-sidenav #sidenav mode="side" [opened]="!(isCollapsed$ |async)" align="start" class="left-sidenav">
                    <router-outlet name="m"></router-outlet>
                </md-sidenav>
                <router-outlet name="d"></router-outlet>
            </md-sidenav-container>
        </div>

    `
})
export class TasksPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: TasksSandbox) {
        
    }
}