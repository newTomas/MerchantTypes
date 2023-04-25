import { Decimal128 } from "bson";
import { Log as LogOrig } from "web3-core";

export type Log = LogOrig & {
	id: string;
	removed: boolean;
}

//То что получает юзер
export class Transaction {
	id: number;
	walletId: string;
	walletSubId: number;
	userId?: string;
	token: string;
	value: string;
	usd: number;
	txid: string;
	chain: number;
	timestamp: number;

	constructor(obj: (Transaction | TransactionBSON | MerchantTransaction & { token: string, chain: number }) & { [key: string]: any }) {
		this.id = obj.id;
		this.walletId = obj.walletId.toString();
		this.walletSubId = obj.walletSubId;
		this.userId = obj.userId;
		this.token = obj.token;
		this.value = obj.value.toString();
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.chain = obj.chain;
		this.timestamp = obj.timestamp;
	}
}

//То что эмитит платежка (перед отправкой на апишку)
export class MerchantTransaction {
	id: number;
	walletId: bigint;
	walletSubId: number;
	walletUserId: number | null;
	usd: number;
	txid: string;
	value: string;
	tokenId: number;
	token: string;
	projectId: number;
	blockNumber: number;
	timestamp: number;

	constructor(obj: MerchantTransaction & { [key: string]: any }) {
		this.id = obj.id;
		this.projectId = obj.projectId;
		this.walletId = obj.walletId;
		this.walletSubId = obj.walletSubId;
		this.walletUserId = obj.walletUserId;
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.value = obj.value;
		this.tokenId = obj.tokenId;
		this.token = obj.token;
		this.blockNumber = obj.blockNumber;
		this.timestamp = obj.timestamp;
	}
}

//То что main отправляет апишке через кафку
export class TransactionBSON {
	id: number;
	projectId: number;
	walletId: Decimal128;
	walletSubId: number;
	walletUserId: number | null;
	token: string;
	value: string;
	usd: number;
	txid: string;
	chain: number;
	timestamp: number;

	constructor(obj: (TransactionBSON | (MerchantTransaction & { chain: number })) & { [key: string]: any }) {
		this.id = obj.id;
		this.projectId = obj.projectId;
		this.token = obj.token;
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.chain = obj.chain;
		this.timestamp = obj.timestamp;

		if (typeof obj.walletId === "bigint") {
			this.walletId = new Decimal128(obj.walletId.toString());
		}
		else this.walletId = obj.walletId;
		this.walletSubId = obj.walletSubId;
		this.walletUserId = obj.walletUserId;

		this.value = obj.value;
	}
}

//То что main отправляет апишке через кафку
export class WalletBSON {
	projectId: number;
	id: Decimal128;
	subId: number;
	address: string;

	constructor(obj: { id: string | bigint | Decimal128, subId: number, projectId: number, address: string } & { [key: string]: any }) {
		this.projectId = obj.projectId;
		this.address = obj.address;

		if (typeof obj.id === "bigint" || typeof obj.id === "string") {
			this.id = new Decimal128(obj.id.toString());
		}
		else this.id = obj.id;

		this.subId = obj.subId;
	}
}