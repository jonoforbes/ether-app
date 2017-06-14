export class Task {
    _id: string;
    userId: string;

    constructor(
                public content: string = '',
                public contactId: string = '',
                public accountId: string = '',
                public saleId: string = '',
                public recipientId: string = '',
                public dueDate: string = '',
                public isCompleted: Boolean = false,
                public createdAt: Date = new Date()
    ) {

    }
}