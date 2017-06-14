import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UserData } from "../../entities/UserData";

@Component({
    selector: "assignment-button-label",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <p style ="padding-top: 6px;">Assigned to: {{firstName}} {{lastName}}</p>
    `
})
export class AssignmentButtonLabelComponent implements OnInit {
    @Input() user: UserData;


    firstName: string;
    lastName: string;

    ngOnInit() {
        // if (this.user[0] !== undefined) {
        //     this.firstName = this.user[0].firstName;
        //     this.lastName = this.user[0].lastName;

        // }
        
    }
}