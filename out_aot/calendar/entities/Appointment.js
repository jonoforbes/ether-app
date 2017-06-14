export class Appointment {
    constructor(description, invitees, contactId, saleId, accountId, date = null, createdAt = new Date()) {
        this.description = description;
        this.invitees = invitees;
        this.contactId = contactId;
        this.saleId = saleId;
        this.accountId = accountId;
        this.date = date;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Appointment.js.map