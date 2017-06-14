export class Activity {
    _id: string;

    constructor(public header: string = "",
                public content: string = "",
                public type: string = "",
                public messageId: string = "",
                public taskId: string = "",
                public userId: string = "",
                public recipientId: string = "",
                public createdAt: Date = new Date(),
                public seen: boolean = false
    ) {

    }
}