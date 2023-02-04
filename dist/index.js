"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletBSON = exports.TransactionBSON = exports.MerchantTransaction = exports.Transaction = void 0;
const bson_1 = require("bson");
//То что получает юзер
class Transaction {
    id;
    walletId;
    token;
    value;
    usd;
    txid;
    chain;
    timestamp;
    constructor(obj) {
        this.id = obj.id;
        this.walletId = obj.walletId.toString();
        this.token = obj.token;
        this.value = obj.value.toString();
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.chain = obj.chain;
        this.timestamp = obj.timestamp;
    }
}
exports.Transaction = Transaction;
//То что эмитит платежка (перед отправкой на апишку)
class MerchantTransaction {
    id;
    walletId;
    usd;
    txid;
    value;
    tokenId;
    token;
    projectId;
    isOur;
    blockNumber;
    timestamp;
    constructor(obj) {
        this.id = obj.id;
        this.projectId = obj.projectId;
        this.walletId = obj.walletId;
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.value = obj.value;
        this.tokenId = obj.tokenId;
        this.token = obj.token;
        this.isOur = obj.isOur;
        this.blockNumber = obj.blockNumber;
        this.timestamp = obj.timestamp;
    }
}
exports.MerchantTransaction = MerchantTransaction;
//То что main отправляет апишке через кафку
class TransactionBSON {
    id;
    projectId;
    walletId;
    token;
    value;
    usd;
    txid;
    chain;
    timestamp;
    constructor(obj) {
        this.id = obj.id;
        this.projectId = obj.projectId;
        this.token = obj.token;
        this.usd = obj.usd;
        this.txid = obj.txid;
        this.chain = obj.chain;
        this.timestamp = obj.timestamp;
        if (typeof obj.walletId === "bigint") {
            this.walletId = new bson_1.Decimal128(obj.walletId.toString());
        }
        else
            this.walletId = obj.walletId;
        this.value = obj.value;
    }
}
exports.TransactionBSON = TransactionBSON;
//То что main отправляет апишке через кафку
class WalletBSON {
    projectId;
    walletId;
    address;
    constructor(obj) {
        this.projectId = obj.projectId;
        this.address = obj.address;
        if (typeof obj.walletId === "bigint" || typeof obj.walletId === "string") {
            this.walletId = new bson_1.Decimal128(obj.walletId.toString());
        }
        else
            this.walletId = obj.walletId;
    }
}
exports.WalletBSON = WalletBSON;
