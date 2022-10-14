"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletBSON = exports.TransactionBSON = exports.TransactionExtended = exports.Transaction = void 0;
const bson_1 = require("bson");
//То что получает юзер
class Transaction {
    userId;
    token;
    value;
    usd;
    txid;
    chain;
    constructor(obj) {
        this.userId = obj.userId.toString();
        this.token = obj.token;
        this.value = obj.value.toString();
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.chain = obj.chain;
    }
}
exports.Transaction = Transaction;
//То что передают между собой checker и main
class TransactionExtended {
    userId;
    usd;
    txid;
    value;
    tokenId;
    projectId;
    isOur;
    constructor(obj) {
        this.projectId = obj.projectId;
        this.userId = obj.userId;
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.value = obj.value;
        this.tokenId = obj.tokenId;
        this.isOur = obj.isOur;
    }
}
exports.TransactionExtended = TransactionExtended;
//То что main отправляет апишке через кафку
class TransactionBSON {
    projectId;
    userId;
    token;
    value;
    usd;
    txid;
    chain;
    constructor(obj) {
        this.projectId = obj.projectId;
        this.token = obj.token;
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.chain = obj.chain;
        if (typeof obj.userId === "bigint") {
            this.userId = new bson_1.Decimal128(obj.userId.toString());
        }
        else
            this.userId = obj.userId;
        this.value = obj.value;
    }
}
exports.TransactionBSON = TransactionBSON;
//То что main отправляет апишке через кафку
class WalletBSON {
    projectId;
    userId;
    address;
    constructor(obj) {
        this.projectId = obj.projectId;
        this.address = obj.address;
        if (typeof obj.userId === "bigint" || typeof obj.userId === "string") {
            this.userId = new bson_1.Decimal128(obj.userId.toString());
        }
        else
            this.userId = obj.userId;
    }
}
exports.WalletBSON = WalletBSON;
