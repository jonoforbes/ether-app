export class Comment {
    constructor(content = "", commentType = "", parentId = "", recipientId = "", createdAt = new Date()) {
        this.content = content;
        this.commentType = commentType;
        this.parentId = parentId;
        this.recipientId = recipientId;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Comment.js.map