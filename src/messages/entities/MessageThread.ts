import { Message } from "./Message";

export class MessageThread {
    _id: string;
    

    constructor(public messages: Message[] = [],
                public createdAt: Date = new Date(),
                ) {

    }
}