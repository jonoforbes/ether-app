export class Address {
    _id: string;

    constructor(public latitude: number = null,
                public longitude: number = null,
                public formattedName: string = "",
                public houseNumber: string = "",
                public streetName: string = "",
                public city: string = "",
                public postCode: string = "",
                public country: string = "",
                public addressSince: string = "",
                public bankAccountId: string = "",
                public contactId: string = "",
                public accountId: string = "",
                public createdAt: Date = new Date()
    ) {

    }
}