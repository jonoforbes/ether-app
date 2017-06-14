var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Task } from "../../entities/Task";
import { Validators, FormBuilder } from "@angular/forms";
import { TasksSandbox } from "../../tasks.sandbox";
import { PopoverContent } from "ngx-popover";
export let EditTaskComponent = class EditTaskComponent {
    constructor(sb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.updateTask = new EventEmitter();
        this.datePickerConfig = {
            appendTo: document.body,
            showGoToCurrent: true,
            format: "DD-MM-YYYY"
        };
    }
    ngOnInit() {
        var oldTaskContent = this.task.content;
        this.taskForm = this.formBuilder.group({
            content: [oldTaskContent, Validators.required],
            dueDate: [this.task.dueDate, Validators.required]
        });
    }
    onSubmit() {
        var updatedTask = this.task;
        this.updateTask.emit(Object.assign(updatedTask, this.taskForm.value));
        console.log('submitting');
        this.taskForm.reset();
        this.closePopover();
    }
    closePopover() {
        this.myPopover.hide();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Task)
], EditTaskComponent.prototype, "task", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], EditTaskComponent.prototype, "updateTask", void 0);
__decorate([
    ViewChild('myPopover'), 
    __metadata('design:type', PopoverContent)
], EditTaskComponent.prototype, "myPopover", void 0);
EditTaskComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [TasksSandbox, FormBuilder])
], EditTaskComponent);
//# sourceMappingURL=edit-task.component.js.map