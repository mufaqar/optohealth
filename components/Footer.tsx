import React from 'react';
import Image from 'next/image'; // Assuming you are in a Next.js project
import Link from 'next/link'; // For navigation links
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // For social media icons

function Footer() {
    return (
        <footer className="bg-white text-primary py-10 ">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

                {/* Column 1: Links and Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <Link href="/terms" className="hover:underline hover:text-theme_red font-semibold">
                        Terms
                    </Link>
                    <Link href="/company-policies" className="hover:underline hover:text-theme_red font-semibold">
                        Company Policies
                    </Link>
                    <Link href="/patient-client-council" className="hover:underline hover:text-theme_red font-semibold">
                        Patient Client Council
                    </Link>
                    <Link href="/cookie-policy" className="hover:underline hover:text-theme_red font-semibold">
                        Cookie Policy
                    </Link>
                    <Link href="/privacy" className="hover:underline hover:text-theme_red font-semibold">
                        Privacy
                    </Link>
                    <p className="mt-6 text-sm md:text-base">© Opto Health Ltd.</p>
                </div>

                {/* Column 2: Logo, Social Media, and Badges */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Logo */}
                    <div className="w-28 h-auto">
                        <Image
                            src="/images/logo.png"
                            alt="Opto Health Logo"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Follow Us */}
                    <p className="text-sm md:text-base font-semibold hover:text-theme_red">Follow Us</p>
                    <div className="flex space-x-3 -mt-4">
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-theme_red transition-colors">
                            <FaTwitter size={35} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-theme_red transition-colors">
                            <FaLinkedin size={35} />
                        </Link>
                    </div>

                    {/* Badges/Certifications */}
                    <div className="flex flex-wrap justify-center gap-12 mt-8">
                        <Image src="/images/md.svg" alt="MD Badge" width={40} height={40} className="h-10 w-auto" />
                        <Image src="/images/ukca.svg" alt="UKCA Badge" width={40} height={40} className="h-10 w-auto" />
                        <Image src="/images/person-with-i-in-laptop.svg" alt="Laptop Badge" width={40} height={40} className="h-10 w-auto" />
                        <Image src="/images/shelton-street-building-logo.svg" alt="Graph Badge" width={40} height={40} className="h-10 w-auto" />
                    </div>
                </div>

                {/* Column 3: Address and Email */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2 ">
                    <p className="font-semibold hover:text-theme_red text-primary">Opto Health Ltd.</p>
                    <p className='hover:text-theme_red font-semibold'>71-75 Shelton St,</p>
                    <p className='hover:text-theme_red font-semibold'>London,</p>
                    <p className='hover:text-theme_red font-semibold'>WC2H 9JQ.</p>
                    <Link href="mailto:info@optohealth.co.uk" className="mt-6 text-primary hover:underline hover:text-theme_red font-semibold">
                        info@optohealth.co.uk
                    </Link>
                </div>

            </div>
        </footer>
    );
}

export default Footer;