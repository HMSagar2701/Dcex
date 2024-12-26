import { Connection } from "@solana/web3.js";
import axios from "axios";
import { SUPPORTED_TOKENS } from "./token";

let LAST_UPDATED: number | null = null;
let prices: { [key: string]: { price: string } } = {};

const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000; // every 60s

export const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/sgu6ygR6LQ5_uerOAR34EDYmeLK_IeMb");

export async function getSupportedTokens() {
    if (!LAST_UPDATED || new Date().getTime() - LAST_UPDATED < TOKEN_PRICE_REFRESH_INTERVAL) {
        try {
            const response = await axios.get("https://api.jup.ag/price/v2?ids=So11111111111111111111111111111111111111112,EPjFWdd5AufqSSqeM2q8QHRA5u8BqN3gYkko2V7Wf1Q,Es9vMFrzaCERz1kq6wYQK8k9E8i9D6ou3Z6tFSR1sLL");
            prices = response.data.data;
            LAST_UPDATED = new Date().getTime();
        } catch (e) {
            console.error(e);
        }
    }
    return SUPPORTED_TOKENS.map(s => ({
        ...s,
        price: prices[s.mint]?.price || "0" // Default to "0" if price is undefined
    }));
}

getSupportedTokens();
