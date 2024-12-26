import { NextRequest, NextResponse } from "next/server";
import { getAssociatedTokenAddress, getAccount } from "@solana/spl-token";
import { getSupportedTokens, connection } from "@/app/lib/constants";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { TokenDetails } from "@/app/lib/token";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const address = searchParams.get('address') as string;

    if (!address) {
        return NextResponse.json({ error: "Address parameter is required" }, { status: 400 });
    }

    const supportedTokens = await getSupportedTokens();
    const balances = await Promise.all(supportedTokens.map(token => getAccountBalance(token, address)));

    const tokens = supportedTokens.map((token, index) => ({
        ...token,
        balance: balances[index].toFixed(2),
        usdBalance: (balances[index] * Number(token.price)).toFixed(2),
    }));

    return NextResponse.json({
        tokens,
        totalBalance: tokens.reduce((acc, val) => acc + Number(val.usdBalance), 0).toFixed(2),
    });
}

async function getAccountBalance(token: TokenDetails, address: string) {
    if (token.native) {
        const balance = await connection.getBalance(new PublicKey(address));
        return balance / LAMPORTS_PER_SOL;
    }

    const ata = await getAssociatedTokenAddress(new PublicKey(token.mint), new PublicKey(address));

    try {
        const account = await getAccount(connection, ata);
        return Number(account.amount) / 10 ** token.decimals;
    } catch (e) {
        console.log(e);
        return 0; 
    }
}
