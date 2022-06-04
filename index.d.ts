import { Decimal128 } from "bson";
import { Log as LogOrig } from "web3-core";

export type Log = LogOrig & {
	id: string;
	removed: boolean;
}

//То что получает юзер
export class Transaction {
	userId: string;
	token: string;
	value: string;
	usd: number;
	txid: string;

	constructor(obj: (Transaction | TransactionBSON | TransactionExtended) & { [key: string]: any }) {
		this.userId = obj.userId.toString();
		this.token = obj.token;
		this.value = obj.value.toString();
		this.usd = obj.usd;
		this.txid = obj.txid;
	}
}

//То что передают между собой checker и main
export class TransactionExtended {
	userId: bigint;
	usd: number;
	txid: string;
	value: bigint;
	tokenId: number;
	projectId: number;
	isOur: boolean;

	constructor(obj: TransactionExtended & { [key: string]: any }) {
		this.projectId = obj.projectId;
		this.userId = obj.userId;
		this.usd = obj.usd;
		this.txid = obj.txid;
		this.value = obj.value;
		this.tokenId = obj.tokenId;
		this.isOur = obj.isOur;
	}
}

//То что main отправляет апишке через кафку
export class TransactionBSON {
	projectId: number;
	userId: Decimal128;
	token: string;
	value: Decimal128;
	usd: number;
	txid: string;

	constructor(obj: (TransactionBSON | TransactionExtended) & { [key: string]: any }) {
		this.projectId = obj.projectId;
		this.token = obj.token;
		this.usd = obj.usd;
		this.txid = obj.txid;

		if (typeof obj.userId === "bigint") {
			this.userId = new Decimal128(obj.userId.toString());
		}
		else this.userId = obj.userId;

		if (typeof obj.value === "bigint") {
			this.value = new Decimal128(obj.value.toString());
		} else this.value = obj.value;
	}
}

//То что main отправляет апишке через кафку
export class WalletBSON {
	projectId: number;
	userId: Decimal128;
	address: string;

	constructor(obj: { userId: string | bigint, projectId: number, address: string } & { [key: string]: any }) {
		this.projectId = obj.projectId;
		this.address = obj.address;

		if (typeof obj.userId === "bigint" || typeof obj.userId === "string") {
			this.userId = new Decimal128(obj.userId.toString());
		}
		else this.userId = obj.userId;
	}
}