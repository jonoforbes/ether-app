import { NotesService } from "./services/notes.service";
import { Injectable } from "@angular/core";
import { Note } from "./entities/Note";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddNote, UpdateNote, RemoveNote } from "../statemanagement/actions/data/note";

@Injectable()
export class NotesSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    notes$ = this.store.select(state => state.data.notes);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>,
                private notesService: NotesService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addNote(note: Note): void {
        this.notesService.add(note)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((note: Note) => {
            this.store.dispatch(new AddNote(note));
        }, () => this.handleError());
    }

    updateNote(id: string, note: Note): void {
        let action = new UpdateNote(id, note);
        this.store.dispatch(action);
        this.notesService.update(id, note)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    fetchNote(id: string): Observable<Note> {
        console.log('account', id);
        // 
        return this.notesService.fetchNote(id)
        .take(1)
        .share();
        // return this.notes$.switchMap((notes: Note[]) => {
        //     return notes.filter((note: Note) => {
        //         return note._id == id;
        //     });
        // });
    }

    removeNote(note: Note): void {
        let action = new RemoveNote(note._id);
        this.store.dispatch(action);
        this.notesService.remove(note)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
        }, () => this.handleError(action));
    }

    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}