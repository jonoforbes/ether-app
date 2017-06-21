export class Address {
    _id: string;

    constructor(public latitude: number = null,
                public longitude: number = null,
                public addressType: string = "",
                public primaryAddress: boolean = false,
                public addressSince: string = "",
                public formattedName: string = "",
                public houseNumber: string = "",
                public streetName: string = "",
                public city: string = "",
                public postCode: string = "",
                public country: string = "",
                public bankAccountId: string = "",
                public contactId: string = "",
                public accountId: string = "",
                public createdAt: Date = new Date()
    ) {

    }
}