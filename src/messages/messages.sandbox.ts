import { MessagesService } from "./services/messages.service";
import { Injectable } from "@angular/core";
import { Message } from "./entities/Message";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddMessage, UpdateMessage, RemoveMessage } from "../statemanagement/actions/data/message";

@Injectable()
export class MessagesSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    messages$: Observable<Array<Message>> = this.store.select(state => state.data.messages);

    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    isCollapsed$ = this.store.select(state => state.containers.masterBar.isCollapsed);

    constructor(private store: Store<ApplicationState>,
                private messagesService: MessagesService) {

                }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addMessage(message: Message): void {
        this.messagesService.add(message)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((message: Message) => {
            this.store.dispatch(new AddMessage(message));
        }, () => this.handleError());
    }

    updateMessage(id: string, message: Message): void {
        let action = new UpdateMessage(id, message);
        this.store.dispatch(action);
        this.messagesService.update(id, message)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    // fetchMessage(id: string): Observable<Message> {
    //     console.log('message', id);
    //     return this.messagesService.fetchMessage(id).share();
    // }

    fetchMessages(id: string): Observable<Array<Message>> {
        return this.messages$.map((messages: any) => {
            return messages.filter((message: Message) => {
                return message.recipientId == id || message.userId == id;
            });
            
        });
    }

    fetchSent(id: string): Observable<Array<Message>> {
        return this.messages$.map((messages: any) => {
            return messages.filter((message: Message) => {
                return message.userId == id;
            })
        })
    }

    removeMessage(message: Message): void {
        let action = new RemoveMessage(message._id);
        this.store.dispatch(action);
        this.messagesService.remove(message)
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