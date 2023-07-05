// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../components/Button';
import Line from '../components/Line';

const Hero = () => {
    return (
        <section className='w-full h-[820px] mt-[100px] pt-[150px]'>
            <div className="wrapper flex">
                <div className="w-[615px]">
                    <h3 className='text-[15px] text-gradientgreencolor2 uppercase mb-[20px]'>Built on website. Powered by You.</h3>
                    <h1 className='text-[68px] font-normal mb-[20px]'>Learn to Code</h1>
                    <h2 className='text-[18px] text-neutral-grey2-100 font-normal mb-[40px]'>With the world largest web developer site. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.</h2>
                    <div className="flex gap-x-[30px]">
                        <Button className='button-36'>Start</Button>
                        <Button className='text-gradientgreencolor2 bg-transparent button-36'>Search now</Button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative">
                        <div className="absolute top-[-8px] left-[12px]"> 
                            <div className="w-[170px] h-[70px] bg-primary-green-40 rounded-[10px] flex justify-center items-center text-[18px] font-bold">
                                <img className='absolute w-[40px] h-[40px] left-[-20px] top-[15px]' src="/html.png" alt="HTML" />
                                Learn HTML
                            </div>
                            <div className="absolute left-[80px]">
                                <Line />
                            </div>
                        </div>
                        <div className="absolute top-[140px] right-[0px]">
                        <div className="w-[170px] h-[70px] bg-primary-green-40 rounded-[10px] flex justify-center items-center text-[18px] font-bold">
                                <img className='absolute w-[40px] h-[40px] left-[-20px] top-[15px]' src="/css.png" alt="CSS" />
                                Learn CSS
                            </div>
                            <div className="absolute left-[80px]">
                                <Line />
                            </div>
                        </div>
                        <div className="absolute">
                        </div>
                        <div className="absolute top-[200px] left-[200px]"> 
                            <div className="w-[210px] h-[70px] bg-primary-green-40 rounded-[10px] flex justify-center items-center text-[18px] font-bold">
                                <img className='absolute w-[40px] h-[40px] left-[-20px] top-[15px]' src="/js.png" alt="JS" />
                                Learn JavaScript
                            </div>
                            <div className="absolute left-[100px]">
                                <Line />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;