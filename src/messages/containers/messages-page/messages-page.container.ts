import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Message } from "../../entities/Message";
import { Observable } from "rxjs/Observable";
import { MessagesSandbox } from "../../messages.sandbox";

@Component({
    selector: "messages-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div style="height: 100vh">
            <md-sidenav-container class="example-sidenav-fab-container">
                <md-sidenav #sidenav mode="side" [opened]="!(isCollapsed$ |async)" align="start" class="left-sidenav">
                    <router-outlet name="m"></router-outlet>
                </md-sidenav>
                <router-outlet name="d"></router-outlet>
            </md-sidenav-container>
        </div>

    `
})
export class MessagesPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: MessagesSandbox) {
        
    }
}