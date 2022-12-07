"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletBSON = exports.TransactionBSON = exports.MerchantTransaction = exports.Transaction = void 0;
const bson_1 = require("bson");
//То что получает юзер
class Transaction {
    id;
    userId;
    token;
    value;
    usd;
    txid;
    chain;
    constructor(obj) {
        this.id = obj.id;
        this.userId = obj.userId.toString();
        this.token = obj.token;
        this.value = obj.value.toString();
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.chain = obj.chain;
    }
}
exports.Transaction = Transaction;
//То что эмитит платежка (перед отправкой на апишку)
class MerchantTransaction {
    id;
    userId;
    usd;
    txid;
    value;
    tokenId;
    token;
    projectId;
    isOur;
    blockNumber;
    constructor(obj) {
        this.id = obj.id;
        this.projectId = obj.projectId;
        this.userId = obj.userId;
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.value = obj.value;
        this.tokenId = obj.tokenId;
        this.token = obj.token;
        this.isOur = obj.isOur;
        this.blockNumber = obj.blockNumber;
    }
}
exports.MerchantTransaction = MerchantTransaction;
//То что main отправляет апишке через кафку
class TransactionBSON {
    id;
    projectId;
    userId;
    token;
    value;
    usd;
    txid;
    chain;
    constructor(obj) {
        this.id = obj.id;
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
