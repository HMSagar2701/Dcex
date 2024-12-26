import { getServerSession } from "next-auth";
import { ProfileCard } from "../components/ProfileCard";
import db from "@/app/db";
import { authConfig } from "../lib/auth";

async function getUserWallet() {
  const session = await getServerSession(authConfig);

  if (!session?.user?.uid) {
    return { error: "User session not found", userWallet: null };
  }

  const userWallet = await db.solWallet.findFirst({
    where: {
      userId: session.user.uid,
    },
    select: {
      publicKey: true,
    },
  });

  if (!userWallet) {
    return {
      error: "No Solana wallet found",
      userWallet: null,
    };
  }

  return { error: null, userWallet };
}

export default async function WalletPage() {
  const { error, userWallet } = await getUserWallet();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ProfileCard publicKey={userWallet?.publicKey || ""} />
    </div>
  );
}
