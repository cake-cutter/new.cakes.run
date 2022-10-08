/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div className='px-20 py-15 z-[2] flex'>
            <style>{`
                .text-boilerplate-mp {
                    background: linear-gradient(269.76deg, #F472B6 1.16%, #6366F1 99.93%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            `}</style>
            
            <div className='flex-1'>
                <h1 className='text-boilerplate-mp font-extrabold text-6xl'>The Boilerplate Marketplace</h1>
            </div>

            <div className="flex-1 bg-black rounded-md border-[5px] border-purple-500">
                <img src="/hero-1.png" className='hero-1-img' alt="hero-1" />
            </div>
            
        </div>
    )
}

export default Hero