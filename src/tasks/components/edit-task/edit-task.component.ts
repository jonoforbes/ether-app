import { 
    Component, 
    OnInit, 
    Input, 
    Output, 
    EventEmitter, 
    ViewChild,
    ChangeDetectionStrategy
    
} from "@angular/core";
import { Task } from "../../entities/Task";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { TasksSandbox } from "../../tasks.sandbox";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';
import { PopoverContent } from "ngx-popover";


@Component({
    selector: "edit-task",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <popover-content #myPopover style=""
            [closeOnClickOutside]="false"
            placement="right">

                <form fxLayout="row" [formGroup]="taskForm" novalidate #formContainer (ngSubmit)="onSubmit()">
                    <div fxFlex="370px" fxLayoutAlign="start">
                    <md-input-container style="margin-top: 5px" floatPlaceholder="never">
                        <input mdInput placeholder="Press Enter to save a Task" formControlName="content" style="width: 320px">
                    </md-input-container>
                    
                    </div>
                    <div fxFlex="100px" fxLayoutAlign="end center">
                    <dp-day-picker placeholder="Set Due Date" formControlName="dueDate" [config]="datePickerConfig"></dp-day-picker>
                    
                    <button md-button style="max-width: 40px !important; min-width: 40px !important"(click)="onSubmit(); false" mode="button"><md-icon style="color: #444">check</md-icon></button>
                    <button md-button style="max-width: 40px !important; min-width: 50px !important"(click)="closePopover(); false" mode="button"><md-icon style="color: #444">clear</md-icon></button>
                    </div>
          
         
    </form>
        </popover-content>
        
        <button md-button [popover]="myPopover"><p>Edit Task</p></button>


    
    
    `
})
export class EditTaskComponent implements OnInit {
    @Input() task: Task;
    @Output() updateTask = new EventEmitter<Task>();
    @ViewChild('myPopover') myPopover: PopoverContent;
    private taskForm: FormGroup;

    datePickerConfig: IDayPickerConfig = {
        appendTo: document.body,
        showGoToCurrent: true,
        format: "DD-MM-YYYY"
        
    }


    constructor(
        private sb: TasksSandbox,
        private formBuilder: FormBuilder,

    ) {
  
    }

    ngOnInit() {
        var oldTaskContent = this.task.content;
        this.taskForm = this.formBuilder.group({
            content: [oldTaskContent, Validators.required],
            dueDate: [this.task.dueDate, Validators.required]
        })
    }

    

    onSubmit(): void {
        var updatedTask = this.task;
        this.updateTask.emit(Object.assign(updatedTask, this.taskForm.value));
        console.log('submitting');
        this.taskForm.reset();
        this.closePopover();
        
    }

    closePopover(): void {
        this.myPopover.hide();
    }
}
