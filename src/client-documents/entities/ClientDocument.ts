export class ClientDocument {
    _id: string;

    constructor(
        public name: string = '',
        public description: string = '',
        public accountId: string = '',
        public contactId: string = '',
        public saleId: string = '',
        public boxFileId: string = '',
        public createdAt: Date = new Date()
    ) {

    }
}