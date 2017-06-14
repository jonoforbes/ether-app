export class Message {
    _id: string;
    userId: string;

    constructor(
                public content: string = "",
                public recipientId: string = "",
                public createdAt: Date = new Date()
    ) {

    }

}