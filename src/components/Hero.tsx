/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div className='px-20 py-15 z-[2] flex justify-between items-center'>
            <style>{`
                .text-boilerplate-mp {
                    background: linear-gradient(269.76deg, #F472B6 1.16%, #6366F1 99.93%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }

                .rainbow-bg {
                    background: radial-gradient(50% 50% at 50% 50%, #292C34 0%, rgba(41, 44, 52, 0) 100%);
                    filter: blur(18px);
                }
            `}</style>
            
            <div className='flex-1 flex flex-col gap-2'>
                <span className='rounded-full border font-extralight tracking-widest border-purple-400 text-purple-400 inline w-fit px-2'>🎉 UPDATED</span>
                <h1 className='text-boilerplate-mp font-extrabold text-5xl'>The Boilerplate Marketplace</h1>
            
                <p className='text-purple-400 mt-5 text-xl w-2/3'>
                    Create projects from pre-built cakes (templates) in seconds!
                </p>

                <div className='w-full rainbow-bg p-2 rounded-full'>
                    <div className='w-full bg-black opacity-1'>
                        <input />
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-black shadow-xl rounded-md border-[5px] border-purple-500">
                <img src="/hero-1.png" className='hero-1-img' alt="hero-1" />
            </div>
            
        </div>
    )
}

export default Hero