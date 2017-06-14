export class Contact {
    _id: string;

    constructor(
                public contactType: string = "",

                public salutation: string = "",//
                public preferredName: string = "",//
                public dateOfBirth: string = "",//

                public firstName: string = "",//
                public middleName: string = "",//
                public lastName: string = "",//

                public gender: string = "",//
                public maritalStatus: string = "",//
                public dateOfDeath: string = "",//

                public nationality: string = "",
                public primaryEmail: string = "",
                public secondaryEmail: string = "",
                
                public mobilePhone: string = "",
                public homePhone: string = "",
                public workPhone: string = "",

                public smoker: boolean = false,
                public goodHealth: boolean = false,
                public medicalConditions: boolean = false,

                public occupation: string = "",
                public occupationTitle: string = "",
                public employerName: string = "",

                public tEmployment: number = 0,
                public ntEmployment: number = 0,
                public tSelfEmployedY1: number = 0,
                public ntSelfEmployedY1: number = 0,
                public tSelfEmployedY2: number = 0,
                public ntSelfEmployedY2: number = 0,
                public tPension: number = 0,
                public ntPension: number = 0,
                public tStatePension: number = 0,
                public ntStatePension: number = 0,
                public tStateBenefit: number = 0,
                public ntStateBenefit: number = 0,
                public tOther: number = 0,
                public ntOther: number = 0,
                public monthlyPolicyExpenditure: number = 0,
                public monthlyEssentialExpenditure: number = 0,
                public monthlyDiscretionaryExpenditure: number = 0,
                public emergencyFundsAvailable: number = 0,
                public emergencyFundsRecommended: number = 0,
                public futureCircumstances: string = "",
                public taxRate: number = 0,//
                public taxResident: boolean = false,//
                public taxDomicile: boolean = false,//
                public taxResidenceDate: string = "",//
                public taxNI: number = 0,//
                public taxWillChange: boolean = false,
                public accountId: string = "",
                public createdAt: Date = new Date()
    ) {

    }
}