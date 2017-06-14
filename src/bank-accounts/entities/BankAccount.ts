export class BankAccount {
    _id: string;

    constructor(
        public accountOwnerType: string = "",
        public accountType: string = "",        // UK | Non-UK
        public accountName: string = "",
        public bankName: string = "",
    public accountNumber: string = "",
    public sortCode: string = "",
    public swiftCode: string = "",
    public iban: string = "",
    public accountId: string = "",
    public contactId: string = "",
    ) {

    }
}