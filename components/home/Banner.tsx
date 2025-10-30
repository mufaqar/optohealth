import Image from 'next/image';

function Banner() {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center">
                <div className="md:w-1/2 w-full">
                    <h1 className="md:text-[56px] text-4xl font-bold text-primary mb-6 max-w-[486px]">
                        Simple, smart, connected<span className="inline-flex bg-dot w-2.5 h-2.5 rounded-full"></span>
                    </h1>
                    <p className="text-base font-medium text-primary max-w-[486px]">
                        Opto is an intelligent new digital triage solution for Urgent and Emergency Care efficiently guiding patients to the appropriate level of care.
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex md:justify-end">
                    <Image src="/images/home-banner.png" alt="home-banner" width={528} height={440} />
                </div>
            </div>
        </section>
    );
}

export default Banner;