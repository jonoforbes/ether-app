import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Note } from "../../entities/Note";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import { NotesSandbox } from "../../notes.sandbox"; 
import { NotesMasterListComponent } from "../../components/master-list/master-list.component";

@Component({
    selector: "notes-master",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        
        <md-input-container floatingPlaceholder="false" class="etherSearch" dividerColor="#7BACC9">
        <input mdInput placeholder="Search Notes" style="width: 120px; margin-top: -10px; margin-left: 5px; color: #838383 !important;" [formControl]="searchCtrl">
        <button md-icon-button style="margin-left: 120px; margin-top: -50px !important;"><md-icon style="color: #838383; width: 20px;">search</md-icon></button>
      </md-input-container>
        
        <notes-master-list [notes]="matchingNotes$ | async"></notes-master-list>
    `
})
export class NotesMasterContainer {
    searchCtrl = new FormControl("");

    notes$ = this.sb.notes$;
    matchingNotes$ = Observable.combineLatest(this.searchCtrl.valueChanges.startWith(""), this.notes$,
    (term: string, notes: Array<Note>) => {
        return notes.filter(note => note.content.toLowerCase().indexOf(term) > -1);
    });
    constructor(private sb: NotesSandbox) {
        
    }
}