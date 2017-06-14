export class Note {
    _id: string;

    constructor(
                public content: string = "",
                public createdAt: Date = new Date()
    ) {

    }
}