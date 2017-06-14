export class XLiability {
    constructor(ownerType = "", lenderName = "", type = "", initialAmount = 0, outstandingAmount = 0, paymentAmount = 0, paymentFrequency = "", termRemaining = 0, repaymentMethod = "", ratePercentage = 0, rateType = "", policyNumber = "", transferable = false, startDate = "", contactId = "", accountId = "", createdAt = new Date()) {
        this.ownerType = ownerType;
        this.lenderName = lenderName;
        this.type = type;
        this.initialAmount = initialAmount;
        this.outstandingAmount = outstandingAmount;
        this.paymentAmount = paymentAmount;
        this.paymentFrequency = paymentFrequency;
        this.termRemaining = termRemaining;
        this.repaymentMethod = repaymentMethod;
        this.ratePercentage = ratePercentage;
        this.rateType = rateType;
        this.policyNumber = policyNumber;
        this.transferable = transferable;
        this.startDate = startDate;
        this.contactId = contactId;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=XLiability.js.map