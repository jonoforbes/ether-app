export class Task {
    constructor(content = '', contactId = '', accountId = '', saleId = '', recipientId = '', dueDate = '', isCompleted = false, createdAt = new Date()) {
        this.content = content;
        this.contactId = contactId;
        this.accountId = accountId;
        this.saleId = saleId;
        this.recipientId = recipientId;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Task.js.map