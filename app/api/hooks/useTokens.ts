import { TokenDetails } from "@/app/lib/token";
import axios from "axios";
import { useEffect, useState } from "react";

export interface TokenWithBalance extends TokenDetails {
    balance: string,
    usdBalance: string;
}
export function useTokens(address: string) {
    const [tokenBalances, setTokenBalances] = useState<{
        totalBalance: number,
        tokens: TokenWithBalance[]
    } | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`/api/tokens?address=${address}`)
            .then(res => {
                setTokenBalances(res.data);
                setLoading(false);
            })
    }, [address])
    return {
        loading, 
        tokenBalances
    }
}