export class Appointment {
    _id: string;
    userId: string;

    constructor(
                public description: string,
                public invitees: String[],
                public contactId: string,
                public saleId: string,
                public accountId: string,
                public date: Date = null,
                public createdAt: Date = new Date()
    ) {

    }
}