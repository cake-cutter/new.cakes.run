/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div className='px-20 lg:flex-nowrap flex-wrap-reverse py-15 z-[2] flex justify-between items-center'>
            <style>{`
                .text-boilerplate-mp {
                    background: linear-gradient(269.76deg, #F472B6 1.16%, #6366F1 99.93%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }

            `}</style>
            
            <div className='flex-1 flex flex-col gap-2 '>
                <span className='rounded-full border font-extralight tracking-widest border-purple-400 text-purple-400 inline w-fit px-2'>🎉 UPDATED</span>
                <h1 className='text-boilerplate-mp font-extrabold text-5xl'>The Boilerplate Marketplace</h1>
            
                <p className='text-purple-400 mt-5 text-xl w-2/3'>
                    Create projects from pre-built cakes (templates) in seconds!
                </p>

                <div className='rounded-full rainbow-bg p-[2px] mt-3 text-lg focus-within:scale-[1.01] transition-[transform] isolate w-2/3'>
                    <div className='w-full gap-2 flex justify-center px-3 py-2 items-center bg-black rounded-full opacity-1'>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275q-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                        </svg>
                        <input placeholder='CakeCutter...' className='bg-black w-full rounded-r-full bg-clip-text border-none focus:outline-none' />
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-black shadow-xl rounded-2xl border-[5px] border-purple-500">
                <img src="/hero-1.png" className='hero-1-img rounded-xl' alt="hero-1" />
            </div>
            
        </div>
    )
}

export default Hero