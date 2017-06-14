import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup} from "@angular/forms";
import { Note } from "../../entities/Note";

@Component({
    selector: "notes-detail-header",
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-toolbar class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed;
                                                                            top: 0px">
                                                                            
    <div class="welcomeBlock">
    <h3 *ngIf="!note.content">New Note</h3>
    <h3 *ngIf="note.content">{{note.content | stripTags | slice:0:35}}</h3>

    </div>

    <div class="actionBlock">
    <button md-button style="position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block" [disabled]="true">
      <p style="color: #c9c9c9">{{note.createdAt | date}}</p>
    </button>
    <button md-button style="position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block" (click)="onSubmit(); false">
      <p>Save changes</p>
      </button>
      </div>
      

  </md-toolbar>
    `
})
export class NotesDetailHeaderComponent {
    @Input() noteForm: FormGroup;
    @Input() note: Note;
    @Output() submitForm = new EventEmitter();

    onSubmit(): void {
        this.submitForm.emit(null);
    }
}