// eslint-disable-next-line no-unused-vars
import React from 'react';

const Features = () => {
    return (
        <section className='w-full h-[840px]'>
            <div className="wrapper text-center">
                <h2 className='text-[60px]'>How it works</h2>
                <p className='text-[18px] text-neutral-grey2-100 mb-[100px]' >Track your progress with our free My Learning program. Log in to your account, and start earning points!</p>
                <div className="w-full h-[300px] flex justify-between items-start">
                        <div className="w-[310px] h-[170px]">
                            <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                                <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f1-removebg-preview.png" alt="" />
                                <h3 className='text-[17px]'>Learn for free</h3>
                            </div>
                        </div>
                        <div className="w-[310px] h-[170px]">
                            <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                                <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f2-removebg-preview.png" alt="" />
                                <h3 className='text-[17px]'>Update knowledge continuously</h3>
                            </div>
                        </div>
                        <div className="w-[310px] h-[170px]">
                            <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                                <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f3-removebg-preview.png" alt="" />
                                <h3 className='text-[17px]'>High accuracy</h3>
                            </div>
                        </div>
                </div>
                <div className="w-full h-[300px] flex justify-between items-start">
                    <div className="w-[310px] h-[170px]">
                        <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                            <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f4-removebg-preview.png" alt="" />
                            <h3 className='text-[17px]'>Group study</h3>
                        </div>
                    </div>
                    <div className="w-[310px] h-[170px]">
                        <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                            <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f5-removebg-preview.png" alt="" />
                            <h3 className='text-[17px]'>Easy exchange</h3>
                        </div>
                    </div>
                    <div className="w-[310px] h-[170px]">
                        <div className="w-[310px] h-[170px] transition ease shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/100 py-[10px] rounded-[10px]">
                            <img className="w-[100px] h-[114px] mx-[auto] my-0" src="./f6-removebg-preview.png" alt="" />
                            <h3 className='text-[17px]'>Develop in stages</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;