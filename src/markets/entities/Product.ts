export class Product {
    _id: string;
    
    constructor(
                public ticker: string,
                public fullName: string,
                public description: string,
                public createdAt: Date = new Date()
    ) {

    }
}