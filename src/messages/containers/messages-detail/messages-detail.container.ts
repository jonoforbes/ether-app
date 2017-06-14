import { Component, OnInit, Output, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Message } from "../../entities/Message";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/observable/from';
import { FormControl } from "@angular/forms";
import { MessagesSandbox } from "../../messages.sandbox"; 
import { ApplicationState } from "../../../statemanagement/state/ApplicationState";
import { Store } from "@ngrx/store";
import { MessagesDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { MessagesDetailListComponent } from "../../components/detail-list/detail-list.component";

@Component({
    selector: "messages-detail",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-scrolling-content">
        
        <messages-detail-header></messages-detail-header>
         
        <messages-detail-list [recipient]="id$" [messages]="matchingMessages$ | async"></messages-detail-list>
        
        <messages-form-group [recipientId]="id$" (onSave)="onSave($event)"></messages-form-group>
        
        
    </div>
    `
})
export class MessagesDetailContainer implements OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    sub: any;
    id$ = new Observable<String>();
    matchingMessages$ : Observable<Array<Message>>;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    
    ngOnInit() {

        const params$ = this.route.params;

        
        this.matchingMessages$ = params$.switchMap((params: Params) => this.sb.fetchMessages(params['id']));

        this.route.params
        .takeUntil(this.ngUnsubscribe)
        .subscribe((params: Params) => {
            

            this.id$ = params['id'];
            
        });
    }

    constructor(private sb: MessagesSandbox,
                private route: ActivatedRoute,
                private router: Router) {
        
    }



    onSave(message: Message): void {
        this.sb.addMessage(message);
    }

}