import Image from 'next/image';
import React from 'react';
import LogoSilder from "@/components/home/LogoSilder";

function Know() {
    return (
        <section className='bg-[#34b4fc] pt-20  mt-16 pb-3'> 
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center justify-center'>
                    <div className='order-2 md:order-1 flex justify-center -mt-35'> 
                          <Image
                            src="/images/know.png"
                            alt="Illustration of doctors looking at a screen"
                            width={500}
                            height={500}
                            layout="responsive" 
                            objectFit="contain" 
                            className="max-w-xs sm:max-w-sm md:max-w-md"
                          />
                    </div>
                    <div className='order-1 md:order-2 text-center md:text-left max-w-[75%]'> 
                        <h2 className='text-3xl sm:text-4xl lg:text-[44px] text-[#004361] font-bold pb-3 leading-tight'> 
                            In the know
                        </h2>
                        <p className='text-base sm:text-lg  leading-relaxed md:max-w-none'> 
                            Clinically guided by healthcare professionals that live and breathe the everyday problems that Urgent and Emergency Care are facing. Alongside them our team of skilled professionals bring a deep understanding of the technical development necessary to create a secure, user friendly cutting edge platform.
                        </p>
                    </div>
                </div>
                <LogoSilder />
            </div>
        </section>
    );
}

export default Know;