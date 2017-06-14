import { Component, Input } from "@angular/core";
import { Task } from "../../entities/Task";
import { ContactAssignmentInfoComponent } from "../../../contacts/components/assignment-info/assignment-info.component";

@Component({
    selector: "task-info",
    template: `
    
    <div fxLayout="row">
        <contact-assignment-info [id]="contactId"></contact-assignment-info>

    </div>
    `
})
export class TaskInfoComponent {
    @Input() task: Task;

    constructor() {

    }

    contactId: string;
    ngOnInit() {
        this.contactId = this.task.contactId;
        console.log('contact', this.contactId)

    }



}