import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Note } from "../../entities/Note";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { FormControl } from "@angular/forms";
import { NotesSandbox } from "../../notes.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";
import { NotesEditorGroupContainer } from "../../containers/notes-editor-group/notes-editor-group.container";

@Component({
    selector: "notes-detail",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-scrolling-content">
        
        
        <div *ngIf="(editNote$|async)">
            <notes-editor-group [note]="editNote$|async" (onSave)="onSave($event)" (remove)="onRemove($event)"></notes-editor-group>
        </div>
        
    </div>
    `
})
export class NotesDetailContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    id: string;
    editNote$: Observable<Note>;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
     
     
    ngOnInit() {
        this.sub = this.route.params
        .takeUntil(this.ngUnsubscribe)
        .subscribe(params => {
            this.id = params['id']; 
            this.editNote$ = this.sb.isAuthenticated$
                .filter(isAuthenticated => isAuthenticated) // only when authenticated
                .flatMap(() => {
                    return this.sb.fetchNote(this.id);
                }).publishReplay().refCount();
        });
    }
    

    constructor(private sb: NotesSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }

    pubId() {
        console.log(this.id);
    }

    onSave(contact: Note): void {
        this.sb.updateNote(this.id, contact);
    }

    onRemove(contact: Note): void {
        this.sb.removeNote(contact);
        
    }
}