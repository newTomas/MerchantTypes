import { Decimal128 } from "bson";
import { Log as LogOrig } from "web3-core";
export type Log = LogOrig & {
    id: string;
    removed: boolean;
};
export declare class Transaction {
    id: number;
    walletId: string;
    token: string;
    value: string;
    usd: number;
    txid: string;
    chain: number;
    timestamp: Date;
    constructor(obj: (Transaction | TransactionBSON | MerchantTransaction & {
        token: string;
        chain: number;
    }) & {
        [key: string]: any;
    });
}
export declare class MerchantTransaction {
    id: number;
    walletId: bigint;
    usd: number;
    txid: string;
    value: string;
    tokenId: number;
    token: string;
    projectId: number;
    isOur: boolean;
    blockNumber: number;
    timestamp: Date;
    constructor(obj: MerchantTransaction & {
        [key: string]: any;
    });
}
export declare class TransactionBSON {
    id: number;
    projectId: number;
    walletId: Decimal128;
    token: string;
    value: string;
    usd: number;
    txid: string;
    chain: number;
    timestamp: Date;
    constructor(obj: (TransactionBSON | (MerchantTransaction & {
        chain: number;
    })) & {
        [key: string]: any;
    });
}
export declare class WalletBSON {
    projectId: number;
    id: Decimal128;
    address: string;
    constructor(obj: {
        id: string | bigint | Decimal128;
        projectId: number;
        address: string;
    } & {
        [key: string]: any;
    });
}
