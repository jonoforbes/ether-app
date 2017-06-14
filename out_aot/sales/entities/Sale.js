export class Sale {
    constructor(accountId, productId, contactId, saleStatus, quantity, buyPrice, term, description, createdAt = new Date()) {
        this.accountId = accountId;
        this.productId = productId;
        this.contactId = contactId;
        this.saleStatus = saleStatus;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
        this.term = term;
        this.description = description;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Sale.js.map