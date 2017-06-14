export class Comment {
    _id: string;

    constructor(
        public content: string = "",
        public commentType: string = "",
        public parentId: string = "",
        public recipientId: string = "",
        public createdAt: Date = new Date()
    ) {

    }
}