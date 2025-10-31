"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

interface ContactFormProps {
    setIsOpen: (isOpen: boolean) => void;
}

const ContactForm = ({ setIsOpen }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobRole: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                setStatus("Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    jobRole: "",
                    message: "",
                });
            } else {
                setStatus(result.error || "Failed to send message.");
            }
        } catch {
            setStatus("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

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
                <h2 className="md:text-[40px] text-2xl font-bold text-center text-primary">
                    We’d love to hear from you
                </h2>
                <p className="text-center text-white mt-2 mb-8">
                    Please enter your details below
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-5">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            name="company"
                            type="text"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                        />

                        <input
                            name="jobRole"
                            type="text"
                            placeholder="Job role"
                            value={formData.jobRole}
                            onChange={handleChange}
                            className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full text-xs font-medium text-white placeholder:text-white border border-white rounded outline-none focus:border-primary px-4 py-3.5"
                    />

                    {/* Submit */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="text-sm bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-theme_red transition-colors disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>

                        {status && (
                            <p
                                className={`mt-3 text-sm font-semibold ${status.includes("successfully") ? "text-white" : "text-red-600"
                                    }`}
                            >
                                {status}
                            </p>
                        )}

                        <span className="text-white mt-3 font-semibold">OR</span>
                        <ul>
                            <li className="text-sm font-bold text-white">
                                Email us:{" "}
                                <Link
                                    href="mailto:info@optohealth.co.uk"
                                    target="_blank"
                                    className="inline-flex text-primary hover:text-theme_red"
                                >
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
