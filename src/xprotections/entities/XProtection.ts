export class XProtection {
    _id: string;

    constructor(
        public ownerType: string = "",              // Contact | Joint
        public planType: string = "",    //           
        public insurerName: string = "",//
        public policyNumber: string = "",//
        public lifeSum: number = 0,///
        public ciSum: number = 0,///
        public afterCISum: number = 0,///
        public benefitDuration: string = "",        // Duration in Months
        public benefitAmount: number = 0,
        public benefitRate: number = 0,            // Percentage
        public deferredPeriod: string = "",         // Deferred Period in Months
        public contributionAmount: number = 0,
        public contributionFrequency: string = "",
        public waiver: boolean = false,
        public rateGuarantee: boolean = false,
        public inTrust: boolean = false,
        public assignedPolicy: boolean = false,
        public lapr: boolean = false,
        public maturityValue: number = 0,
        public valuation: number = 0,
        public commencementDate: string = "",
        public maturityDate: string = "",
        public createdAt: Date = new Date(),
        public contactId: string = "",
        public accountId: string = "",


    ) {

    }
}