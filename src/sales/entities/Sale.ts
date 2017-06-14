export class Sale {
    _id: string;
    userId: string;

    constructor(
        public accountId: string,
        public productId: string,
        public contactId: string,
        public saleStatus: string,
        public quantity: number,
        public buyPrice: number,
        public term: number,
        public description: string,
        public createdAt: Date = new Date()
    ) {

    }
}