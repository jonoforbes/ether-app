import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { Note } from "../../entities/Note";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "notes-detail-editor",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="note-editor">

        <div fxFill [formGroup]="noteForm">

          <textarea [froalaEditor]='options' formControlName="content"></textarea>

        </div>
        


</div>
    `
})
export class NotesDetailEditorComponent {
  @Input() noteForm: FormGroup;
  @Output() remove = new EventEmitter();
  options: Object = { charCounterCount: false, 
                      placeholderText: '', 
                      
                      toolbarButtons: [
                        'bold', 
                        'italic', 
                        'underline',
                        'fontSize'
                      ],
                      toolbarButtonsMD: ['bold', 'italic', 'underline', 'fontSize'],
                      toolbarButtonsSM: ['bold', 'italic', 'underline', 'fontSize'],
                      toolbarButtonsXS: ['bold', 'italic', 'underline', 'fontSize'],
                    
                      theme: 'gray'
                      }

  constructor( private router: Router ) {

  }

  onRemove(): void {
    this.router.navigate(['/notes', {outlets: {'m': ['list'], 'd': ['add']}}]);
    this.remove.emit(null);
  }

}