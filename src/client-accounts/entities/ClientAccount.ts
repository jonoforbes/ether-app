export class ClientAccount {
    _id: string;

    constructor(public accountName: string = "",
                public accountStatus: string = "",
                public accountType: string = "",
                public companyFullName: string = "",
                public companyNumber: string = "",
                public wealthIncome: boolean = false,
                public wealthBonus: boolean = false,
                public wealthHouseSale: boolean = false,
                public wealthBusinessSale: boolean = false,
                public wealthInheritance: boolean = false,
                public wealthReplacement: boolean = false,
                public wealthDivorce: boolean = false,
                public wealthOther: boolean = false,
                public fundsUKBank: boolean = false,
                public fundsEUBank: boolean = false,
                public fundsBSOC: boolean = false,
                public fundsStock: boolean = false,
                public fundsOtherReg: boolean = false,
                public fundsSolicitor: boolean = false,
                public fundsAccountant: boolean = false,
                public fundsOther: boolean = false,                
                public scddSentDate: string = "",
                public scddType: string = "",
                public createdAt: Date = new Date()
    ) {

    }
}