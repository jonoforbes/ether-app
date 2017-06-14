var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NotesService } from "./services/notes.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddNote, UpdateNote, RemoveNote } from "../statemanagement/actions/data/note";
export let NotesSandbox = class NotesSandbox {
    constructor(store, notesService) {
        this.store = store;
        this.notesService = notesService;
        this.ngUnsubscribe = new Subject();
        this.notes$ = this.store.select(state => state.data.notes);
        this.isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
        this.isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addNote(note) {
        this.notesService.add(note)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((note) => {
            this.store.dispatch(new AddNote(note));
        }, () => this.handleError());
    }
    updateNote(id, note) {
        let action = new UpdateNote(id, note);
        this.store.dispatch(action);
        this.notesService.update(id, note)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchNote(id) {
        console.log('account', id);
        return this.notesService.fetchNote(id)
            .take(1)
            .share();
    }
    removeNote(note) {
        let action = new RemoveNote(note._id);
        this.store.dispatch(action);
        this.notesService.remove(note)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
NotesSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, NotesService])
], NotesSandbox);
//# sourceMappingURL=notes.sandbox.js.map