import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { Message } from "../../../messages/entities/Message";

export const ActionTypes = {
    MESSAGES_ADD: type("DATA_MESSAGES_ADD"),
    MESSAGES_REMOVE: type("DATA_MESSAGES_REMOVE"),
    MESSAGES_UPDATE: type("DATA_MESSAGES_UPDATE"),
    MESSAGES_SET_ALL: type("DATA_MESSAGES_ADD_ALL")
}

export class AddMessage implements Action {
    type = ActionTypes.MESSAGES_ADD;
    payload: {message: Message};

    constructor(message: Message) {
        this.payload = {message};
    }
}

export class RemoveMessage implements Action {
    type = ActionTypes.MESSAGES_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateMessage implements Action {
    type = ActionTypes.MESSAGES_UPDATE;
    payload: {_id: string, message: Message};

    constructor(_id: string, message: Message) {
        this.payload = {_id, message};
    }
}

export class SetAllMessages implements Action {
    type = ActionTypes.MESSAGES_SET_ALL;
    payload: {messages: Message[]};

    constructor(messages: Message[]) {
        this.payload = {messages}
    }
}

export type Actions =
    AddMessage
    | RemoveMessage
    | UpdateMessage
    | SetAllMessages;