import { Decimal128 } from "bson";
import { Log as LogOrig } from "web3-core";

export type Log = LogOrig & {
	id: string;
	removed: boolean;
}

//То что получает юзер
export class Transaction {
	id: number;
	userId: string;
	token: string;
	value: string;
	usd: number;
	txid: string;
	chain: number;

	constructor(obj: (Transaction | TransactionBSON | MerchantTransaction & { token: string, chain: number }) & { [key: string]: any }) {
		this.id = obj.id;
		this.userId = obj.userId.toString();
		this.token = obj.token;
		this.value = obj.value.toString();
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.chain = obj.chain;
	}
}

//То что эмитит платежка (перед отправкой на апишку)
export class MerchantTransaction {
	id: number;
	userId: bigint;
	usd: number;
	txid: string;
	value: string;
	tokenId: number;
	token: string;
	projectId: number;
	isOur: boolean;
	blockNumber: number;

	constructor(obj: MerchantTransaction & { [key: string]: any }) {
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

//То что main отправляет апишке через кафку
export class TransactionBSON {
	id: number;
	projectId: number;
	userId: Decimal128;
	token: string;
	value: string;
	usd: number;
	txid: string;
	chain: number;

	constructor(obj: (TransactionBSON | (MerchantTransaction & { chain: number })) & { [key: string]: any }) {
		this.id = obj.id;
		this.projectId = obj.projectId;
		this.token = obj.token;
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.chain = obj.chain;

		if (typeof obj.userId === "bigint") {
			this.userId = new Decimal128(obj.userId.toString());
		}
		else this.userId = obj.userId;

		this.value = obj.value;
	}
}

//То что main отправляет апишке через кафку
export class WalletBSON {
	projectId: number;
	userId: Decimal128;
	address: string;

	constructor(obj: { userId: string | bigint | Decimal128, projectId: number, address: string } & { [key: string]: any }) {
		this.projectId = obj.projectId;
		this.address = obj.address;

		if (typeof obj.userId === "bigint" || typeof obj.userId === "string") {
			this.userId = new Decimal128(obj.userId.toString());
		}
		else this.userId = obj.userId;
	}
}