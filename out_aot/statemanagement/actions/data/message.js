import { type } from "../../util/util";
export const ActionTypes = {
    MESSAGES_ADD: type("DATA_MESSAGES_ADD"),
    MESSAGES_REMOVE: type("DATA_MESSAGES_REMOVE"),
    MESSAGES_UPDATE: type("DATA_MESSAGES_UPDATE"),
    MESSAGES_SET_ALL: type("DATA_MESSAGES_ADD_ALL")
};
export class AddMessage {
    constructor(message) {
        this.type = ActionTypes.MESSAGES_ADD;
        this.payload = { message };
    }
}
export class RemoveMessage {
    constructor(_id) {
        this.type = ActionTypes.MESSAGES_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateMessage {
    constructor(_id, message) {
        this.type = ActionTypes.MESSAGES_UPDATE;
        this.payload = { _id, message };
    }
}
export class SetAllMessages {
    constructor(messages) {
        this.type = ActionTypes.MESSAGES_SET_ALL;
        this.payload = { messages };
    }
}
//# sourceMappingURL=message.js.map