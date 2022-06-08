import { Decimal128 } from "bson";
import { Log as LogOrig } from "web3-core";
export declare type Log = LogOrig & {
    id: string;
    removed: boolean;
};
export declare class Transaction {
    userId: string;
    token: string;
    value: string;
    usd: number;
    txid: string;
    chain: number;
    constructor(obj: (Transaction | TransactionBSON | TransactionExtended & {
        token: string;
        chain: number;
    }) & {
        [key: string]: any;
    });
}
export declare class TransactionExtended {
    userId: bigint;
    usd: number;
    txid: string;
    value: bigint;
    tokenId: number;
    projectId: number;
    isOur: boolean;
    constructor(obj: TransactionExtended & {
        [key: string]: any;
    });
}
export declare class TransactionBSON {
    projectId: number;
    userId: Decimal128;
    token: string;
    value: Decimal128;
    usd: number;
    txid: string;
    chain: number;
    constructor(obj: (TransactionBSON | (TransactionExtended & {
        chain: number;
        token: string;
    })) & {
        [key: string]: any;
    });
}
export declare class WalletBSON {
    projectId: number;
    userId: Decimal128;
    address: string;
    constructor(obj: {
        userId: string | bigint | Decimal128;
        projectId: number;
        address: string;
    } & {
        [key: string]: any;
    });
}
