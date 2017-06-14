export class UserData {
    _id: string;
    userId: string;

    constructor(public firstName: string = "",
                public middleName: string = "",
                public lastName: string = "",
                public preferredName: string = "",
                public salutation: string = "",
                public dateOfBirth: string = "",
                public nationality: string = "",
                public mobilePhone: string = "",
                public homePhone: string = "",
                public workPhone: string = ""
    ) {

    }
}