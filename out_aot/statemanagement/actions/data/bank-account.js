import { type } from "../../util/util";
export const ActionTypes = {
    BANK_ACCOUNTS_ADD: type("DATA_BANK_ACCOUNTS_ADD"),
    BANK_ACCOUNTS_REMOVE: type("DATA_BANK_ACCOUNTS_REMOVE"),
    BANK_ACCOUNTS_UPDATE: type("DATA_BANK_ACCOUNTS_UPDATE"),
    BANK_ACCOUNTS_SET_ALL: type("DATA_BANK_ACCOUNTS_ADD_ALL")
};
export class AddBankAccount {
    constructor(bankAccount) {
        this.type = ActionTypes.BANK_ACCOUNTS_ADD;
        this.payload = { bankAccount };
    }
}
export class RemoveBankAccount {
    constructor(_id) {
        this.type = ActionTypes.BANK_ACCOUNTS_REMOVE;
        this.payload = { _id };
    }
}
export class UpdateBankAccount {
    constructor(_id, bankAccount) {
        this.type = ActionTypes.BANK_ACCOUNTS_UPDATE;
        this.payload = { _id, bankAccount };
    }
}
export class SetAllBankAccounts {
    constructor(bankAccounts) {
        this.type = ActionTypes.BANK_ACCOUNTS_SET_ALL;
        this.payload = { bankAccounts };
    }
}
//# sourceMappingURL=bank-account.js.map