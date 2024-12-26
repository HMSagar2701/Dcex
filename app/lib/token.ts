import { Connection } from "@solana/web3.js";
import axios from "axios";

// Token Interface
export interface TokenDetails {
    id: string; // Add this line
    name: string;
    mint: string;
    native: boolean;
    price: string;
    image: string;
    decimals: number;
}

// Supported Tokens
export const SUPPORTED_TOKENS: TokenDetails[] = [
    {
        id: "So11111111111111111111111111111111111111112", 
        name: "SOL",
        mint: "So11111111111111111111111111111111111111112",
        native: true,
        price: "0",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Solana_cryptocurrency_two.jpg",
        decimals: 9,
    },
    {   
        id: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        name: "USDC",
        mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        native: false,
        price: "0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vAKYEl0YffTpWSxrqEi_gmUsl-0BuXSKMQ&s",
        decimals: 6,
    },
    {   
        id: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        name: "USDT",
        mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        native: false,
        price: "0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSxrpym7ij1Hf6zQOltcDORlrJGyj1kPf3A&s",
        decimals: 6,
    },
];

// Solana Connection
export const connection = new Connection(
    "https://solana-mainnet.g.alchemy.com/v2/sgu6ygR6LQ5_uerOAR34EDYmeLK_IeMb"
);

// Price Cache
let LAST_UPDATED: number | null = null;
let prices: { [key: string]: { price: string } } = {};

const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000; // every 60s

// Fetch Supported Token Prices
export async function getSupportedTokens() {
    const currentTime = new Date().getTime();
    if (!LAST_UPDATED || currentTime - LAST_UPDATED > TOKEN_PRICE_REFRESH_INTERVAL) {
        try {
            const ids = SUPPORTED_TOKENS.map(token => token.mint).join(',');
            const response = await axios.get(
                `https://price.jup.ag/v4/price?ids=${ids}`
            );
            prices = response.data.data;
            LAST_UPDATED = currentTime;
        } catch (e) {
            console.error("Failed to fetch token prices:", e);
        }
    }

    return SUPPORTED_TOKENS.map(s => ({
        ...s,
        price: prices[s.mint]?.price || "0", // Use mint to map price
    }));
}
