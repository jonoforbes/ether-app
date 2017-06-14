export class XAsset {
    _id: string;

    constructor(
        public category: string = "",
        public type: string = "",
        public provider: string = "",
        public ownerType: string = "",
        public valuation: number = 0,
        public valuationDate: string = "",
        public description: string = "",
        public policyNumber: string = "",
        public yearlyIncome: number = 0,
        public taxStatus: string = "",
        public incomeReinvested: boolean = false,
        public regularContribution: number = 0,
        public contributionFrequency: string = "",
        public indexedPercentage: number = 0,
        public premiumWaiver: boolean = false,
        public lapr: boolean = false,
        public ihtExempt: boolean = false,
        public applicationExemption: string = "",
        public purchased: boolean = false,
        public inherited: boolean = false,
        public accountId: string = "",
        public contactId: string = "",
        public createdAt: Date = new Date()

    ) {

    }
}
