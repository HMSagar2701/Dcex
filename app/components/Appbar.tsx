"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { PrimaryButton } from "./Button";

const Appbar = () => {
    const { data: session, status } = useSession();

    console.log("Session Status:", status);
    console.log("Session Data:", session);

    return (
        <div className='border-b px-2 py-2 flex justify-between text-center items-center'>
            <div className="flex flex-inline"> 
                <div className="text-3xl font-bold flex justify-center text-blue-500 px-2">
                DCEX
                </div> 
                <div className="p-2 text-lg text-black/80 space-x-4 px-6">
                <a href="#">Products</a>
                <a href="#">API & Docs</a>
                <a href="#">FAQ</a>
                <a href="#">Company</a>
                </div>
            </div>
            <div>
                {session?.user ? (
                    <PrimaryButton onClick={() => signOut()}>Logout</PrimaryButton>
                ) : (
                    <PrimaryButton onClick={() => signIn()}>Sign In</PrimaryButton>
                )}
            </div>
        </div>
    );
};

export default Appbar;
