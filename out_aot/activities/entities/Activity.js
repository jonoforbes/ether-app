export class Activity {
    constructor(header = "", content = "", type = "", messageId = "", taskId = "", userId = "", recipientId = "", createdAt = new Date(), seen = false) {
        this.header = header;
        this.content = content;
        this.type = type;
        this.messageId = messageId;
        this.taskId = taskId;
        this.userId = userId;
        this.recipientId = recipientId;
        this.createdAt = createdAt;
        this.seen = seen;
    }
}
//# sourceMappingURL=Activity.js.map