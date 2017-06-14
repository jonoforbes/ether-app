export class Address {
    constructor(latitude = null, longitude = null, formattedName = "", houseNumber = "", streetName = "", city = "", postCode = "", country = "", addressSince = "", bankAccountId = "", contactId = "", accountId = "", createdAt = new Date()) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.formattedName = formattedName;
        this.houseNumber = houseNumber;
        this.streetName = streetName;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.addressSince = addressSince;
        this.bankAccountId = bankAccountId;
        this.contactId = contactId;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Address.js.map