export class XAsset {
    constructor(category = "", type = "", provider = "", ownerType = "", valuation = 0, valuationDate = "", description = "", policyNumber = "", yearlyIncome = 0, taxStatus = "", incomeReinvested = false, regularContribution = 0, contributionFrequency = "", indexedPercentage = 0, premiumWaiver = false, lapr = false, ihtExempt = false, applicationExemption = "", purchased = false, inherited = false, accountId = "", contactId = "", createdAt = new Date()) {
        this.category = category;
        this.type = type;
        this.provider = provider;
        this.ownerType = ownerType;
        this.valuation = valuation;
        this.valuationDate = valuationDate;
        this.description = description;
        this.policyNumber = policyNumber;
        this.yearlyIncome = yearlyIncome;
        this.taxStatus = taxStatus;
        this.incomeReinvested = incomeReinvested;
        this.regularContribution = regularContribution;
        this.contributionFrequency = contributionFrequency;
        this.indexedPercentage = indexedPercentage;
        this.premiumWaiver = premiumWaiver;
        this.lapr = lapr;
        this.ihtExempt = ihtExempt;
        this.applicationExemption = applicationExemption;
        this.purchased = purchased;
        this.inherited = inherited;
        this.accountId = accountId;
        this.contactId = contactId;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=XAsset.js.map