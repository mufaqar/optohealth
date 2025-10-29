import Image from 'next/image';
import React from 'react';

function Banner() {
    return (
        <section className='container mx-auto px-4'>
            <div className=" grid md:grid-cols-2 gap-4 items-center justify-center px-4 py-8 ">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-bold text-[#004361]  sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Simple, smart, connected</span>{' '}
                            <span className="block text-red-600 xl:inline">.</span>
                        </h1>
                        <p className="mt-3 text-base text-[#004361] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Opto is an intelligent new digital triage solution for Urgent and Emergency Care efficiently guiding patients to the appropriate level of care.
                        </p>
                    </div>
                </main>
                <div className='items-center justify-center flex'>
                    <Image src="/images/Homepage-image.png" alt="logo" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}

export default Banner;