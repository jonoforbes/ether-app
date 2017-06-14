export class XPension {
    _id: string;

    constructor(
    public pensionType: string = "",               //         /////   Pension Type [ Money Purchase | Defined Benefits ]
    public providerName: string = "",              //         /////   Provider Name
    public planType: string = "",                  //         /////   Plan Type
    public policyNumber: string = "",              //         /////   Policy Number
    public planJoinDate: string = "",              //         /////   Plan Join Date
    public status: string = "",                    //         /////   Status
    public planRetirementAge: number = 0,          //         /////   Plan / Scheme Retirement Age
    public personalContribution: number = 0,       //         /////   Personal Contribution
    public contributionFrequency: string = "",     //         /////   Contribution Frequency
    public assetPreservationTrust: boolean = false,//         /////   Is existing DIS Benefit in an Asset Preservation Trust?
    public contractedOut: boolean = false,         //         /////   Contracted out?
    public valuationAmount: number = 0,            //         //      Valuation
    public taxFreeCurrentValue: number = 0,        //         //      Tax Free Cash Current Value
    public employerContribution: number = 0,       //         //      Employer Contribution
    public waiver: string = "",                    //         //      Yes | No | No but can be added | N/A | Unknown
    public coverLevel: string = "",                //         //      Level Of Life Cover Provided
    public lumpSum: string = "",                   //         //      Lump Sum Death Benefit = [ Return of Premium | Return of Fund | Premium with Interest | No Return ]
    public planStartDate: string = "",             //         //      Plan Start Date
    public transferValue: number = 0,              //         //      Transfer Value
    public transferDate: string = "",              //         //      Date Of Transfer
    public paidUpDate: string = "",                //         //      If paid up from when?
    public protectedRights: string = "",           //         //      Protected Rights
    public nonProtectedRights: string = "",        //         //      Non-Protected Rights
    public companyJoinDate: string = "",           //         ///     Company Join Date
    public planLeaveDate: string = "",             //         ///     Plan Leave Date
    public pensionableEarnings: number = 0,        //         ///     Scheme Pensionable Earnings
    public pensionIncreaseRate: string = "",       //         ///     Pension Increase Rate
    public extraYears: number = 0,                 //        ///     Extra years credited from transfer
    public deathInServiceLumpSum: string = "",              ///     Death in Service Lump Sum Benefit
    public spousePension: string = "",                      ///     Spouse Pension
    public dependantPension: string = "",                   ///     Dependant Pension
    public createdAt: Date = new Date(),
    public contactId: string = "",
    public accountId: string = ""

    ) {

    }
}