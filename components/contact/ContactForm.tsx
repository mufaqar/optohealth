import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface ContactFormProps {
    setIsOpen: (isOpen: boolean) => void;
}

const ContactForm = ({ setIsOpen }: ContactFormProps) => {
    return (
        <div className="sm:w-[90%] w-[97%] mx-auto px-4 py-10 bg-secondary rounded-[20px] relative">
            {/* Close button */}
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            >
                <IoMdClose size={28} />
            </button>
            <div className="max-w-[983px] mx-auto ">
                {/* Title */}
                <h2 className="md:text-[40px] text-2xl font-bold text-center text-primary">
                    We’d love to hear from you
                </h2>
                <p className="text-center text-white mt-2 mb-8">
                    Please enter your details below
                </p>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="First name"
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            type="text"
                            placeholder="Last name"
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            type="text"
                            placeholder="Company"
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            type="text"
                            placeholder="Job role"
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        rows={3}
                        className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:outline-none focus:border-primary px-4 py-3.5"
                    />
                    {/* Submit button */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4">
                        <button
                            type="submit"
                            className="text-sm bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-theme_red transition-colors"
                        >
                            Send
                        </button>
                        <span className="text-white mt-3 font-semibold">OR</span>
                        <ul>
                            <li className="text-sm font-bold text-white">
                                Email us:  <Link href="mailto:info@optohealth.co.uk" target="_blank" className="inline-flex text-primary hover:text-theme_red">
                                    info@optohealth.co.uk
                                </Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
