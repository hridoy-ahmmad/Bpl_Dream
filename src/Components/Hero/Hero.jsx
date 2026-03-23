import React from 'react';
import bgimg from '../../assets/bg-shadow.png'
import heroImg from '../../assets/banner-main.png'

const Hero = () => {
    return (
        <div className='container mx-auto h-[560px]'
            style={{
                background: `url(${bgimg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'black',

            }}>
            <div className='flex flex-col gap-4 items-center justify-center h-full text-white'>
                <img src={heroImg} height={200} width={250} alt="" />
                <h1 className='font-bold text-4xl '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='font-light'>Beyond Boundaries Beyond Limits</p>
                <div className='p-2 border-2 rounded-xl border-[#E7FE29]'>
                    <button className="btn bg-[#E7FE29] border-0">Claim Free Credit</button>
                </div>

            </div>
        </div >
    );
};

export default Hero;