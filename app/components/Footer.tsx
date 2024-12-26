import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/discord'
import 'react-social-icons/x'

const Footer = () => {
    return (
        <div className='w-full flex flex-row justify-between px-40'>
            <div className='space-y-3'>
                <div>Tiplinks</div>
                <div className='space-x-4 text-sm'>
                    <SocialIcon url="www.discord.com" 
                    style={{height:40, width:40}}/>
                    <SocialIcon url="www.x.com" 
                    style={{height:40, width:40}}/>                    
                </div>
                <div>
                    ©2024 Sagar. All rights reserved.
                </div>
            </div>
            <div className='flex flex-row space-x-24'>
                <div className='flex flex-col space-y-1'>
                    <a href="#" className='font-bold text-black/80 mb-2' >Product & Docs</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Create TipLink</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Documentation</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>API Reference</a>
                </div>
                <div className='flex flex-col space-y-1'>
                    <a href="#" className='font-bold text-black/80 mb-2'>Company</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>F.A.Q.</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Career</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Blog</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Brand Resources</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Terms of Service</a>
                    <a href="#" className='text-black/80 hover:underline hover:text-black/60'>Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default Footer