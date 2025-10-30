import Image from 'next/image';
import React from 'react';
import LogoSilder from "@/components/home/LogoSilder";

function Know() {
    return (
        <section className='bg-secondary pt-20 mt-10 pb-3'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center justify-between'>
                <div className='md:w-1/2 w-full'>
                    <Image
                        src="/images/know.png"
                        alt="Illustration of doctors looking at a screen"
                        width={480}
                        height={445}
                        className="w-[80%] -mt-35"
                    />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-6'>
                        In the know
                    </h2>
                    <p className='text-base font-medium text-white max-w-[450px]'>
                        Clinically guided by healthcare professionals that live and breathe the everyday problems that Urgent and Emergency Care are facing. Alongside them our team of skilled professionals bring a deep understanding of the technical development necessary to create a secure, user friendly cutting edge platform.
                    </p>
                </div>
            </div>
            <LogoSilder />
        </section>
    );
}

export default Know;