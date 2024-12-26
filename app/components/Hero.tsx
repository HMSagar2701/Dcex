"use client";
import React from 'react'
import { PrimaryButton, Secondary } from './Button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const Hero = () => {
    const session = useSession();
    const router = useRouter();
    return (
    <div className='text-center'>
        <div className='text-6xl font-bold pt-5'>
            The crypto of tomorrow, 
            <span className='text-blue-800/85'>
            today
            </span>
        </div>
        <div className='text-2xl text-slate-800 text-center pt-8'>
            Create a frictionless wallet with just a Google Account
        </div>
        <div className='text-2xl text-slate-800 text-center pt-2'>
            In India convert INR to CryptoCurrency !!!
        </div>
        <div className='pt-9'>
            {session.data?.user?<PrimaryButton onClick={ () => {
                router.push("/dashboard")
            }}>
                Go to DashBoard
            </PrimaryButton>:<Secondary>
                Sign Up with Google
            </Secondary>}
            
        </div>

    </div>
  )
}

export default Hero