export class Address {
    constructor(latitude = null, longitude = null, addressType = "", primaryAddress = false, addressSince = "", formattedName = "", houseNumber = "", streetName = "", city = "", postCode = "", country = "", bankAccountId = "", contactId = "", accountId = "", createdAt = new Date()) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.addressType = addressType;
        this.primaryAddress = primaryAddress;
        this.addressSince = addressSince;
        this.formattedName = formattedName;
        this.houseNumber = houseNumber;
        this.streetName = streetName;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.bankAccountId = bankAccountId;
        this.contactId = contactId;
        this.accountId = accountId;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Address.js.map