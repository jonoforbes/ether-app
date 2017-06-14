export class XLiability {
    _id: string;

    constructor(
        public ownerType: string = "",//
        public lenderName: string = "",//
        public type: string = "",//
        public initialAmount: number = 0,//
        public outstandingAmount: number = 0,//
        public paymentAmount: number = 0,///
        public paymentFrequency: string = "",///
        public termRemaining: number = 0,//
        public repaymentMethod: string = "",///
        public ratePercentage: number = 0,//
        public rateType: string = "",//
        public policyNumber: string = "",
        public transferable: boolean = false,
        public startDate: string = "",
        public contactId: string = "",
        public accountId: string = "",
        public createdAt: Date = new Date()
    ) {}
}