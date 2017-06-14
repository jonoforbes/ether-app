import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Note } from "../../entities/Note";
import { Observable } from "rxjs/Observable";
import { NotesSandbox } from "../../notes.sandbox";

@Component({
    selector: "notes-page",
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
export class NotesPageContainer {
    isCollapsed$ = this.sb.isCollapsed$;
    constructor(private sb: NotesSandbox) {
        
    }
}