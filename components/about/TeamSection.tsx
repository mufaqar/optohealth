"use client";

import { TeamMember } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Props {
    custom_Class?: string;
    data: TeamMember[];
    title: string;
}

export default function TeamSection({ custom_Class = "", data, title }: Props) {
    const [selected, setSelected] = useState<TeamMember>(data[0]);
    const [activeMobile, setActiveMobile] = useState<number | null>(null);

    return (
        <section className="bg-theme_red py-16 transition-all duration-500">
            <div
                className={`${custom_Class} container mx-auto px-4 flex flex-col md:flex-row md:items-start items-center md:gap-16 gap-10`}
            >
                {/* ========== DESKTOP VIEW ========== */}
                <div className="hidden md:block md:w-1/2">
                    <h2 className="md:text-[42px] text-3xl font-bold text-white text-center mb-8">
                        {title}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {data.map((member) => (
                            <div
                                key={member.id}
                                onMouseEnter={() => setSelected(member)}
                                className={`shrink-0 w-[150px] h-[150px] 2xl:w-[110px] 2xl:h-[110px] rounded-full overflow-hidden border-4 border-primary transition-all duration-300 cursor-pointer ${selected.id === member.id
                                        ? ""
                                        : ""
                                    }`}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={116}
                                    height={116}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ========== DESKTOP INFO PANEL ========== */}
                <div className="hidden md:flex md:w-1/2 flex-col text-center transition-opacity duration-300 ease-in-out">
                    <h3 className="md:text-3xl text-2xl text-white font-bold mb-3">
                        {selected.name}
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-4">
                        {selected.title}
                    </p>

                    <div
                        className="team_content mb-6"
                        dangerouslySetInnerHTML={{ __html: selected.description }}
                    />

                    <div className="flex space-x-4 justify-center">
                        {selected.linkedin && (
                            <Link
                                href={selected.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl text-white hover:text-primary transition"
                            >
                                <FaLinkedin />
                            </Link>
                        )}
                        {selected.email && (
                            <Link
                                href={`mailto:${selected.email}`}
                                className="text-2xl text-white hover:text-primary transition"
                            >
                                <FaEnvelope />
                            </Link>
                        )}
                    </div>
                </div>

                {/* ========== MOBILE VIEW ========== */}
                <div className="block md:hidden w-full">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">
                        {title}
                    </h2>
                    <div className="flex flex-col items-center gap-8">
                        {data.map((member) => (
                            <div
                                key={member.id}
                                className="w-full flex flex-col items-center text-center"
                            >
                                {/* Member Image */}
                                <div
                                    onClick={() =>
                                        setActiveMobile(
                                            activeMobile === member.id ? null : member.id
                                        )
                                    }
                                    className={`relative w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-primary cursor-pointer transition-all duration-300 ${activeMobile === member.id ? "" : ""
                                        }`}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Name + Title */}
                                <h3 className="text-2xl text-white font-bold mt-4">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold mb-3">
                                    {member.title}
                                </p>

                                {/* Description (toggle on click) */}
                                {activeMobile === member.id && (
                                    <div
                                        className="team_content mb-6"
                                        dangerouslySetInnerHTML={{ __html: member.description }}
                                    />
                                )}

                                {/* Social Links */}
                                <div className="flex space-x-4 justify-center">
                                    {member.linkedin && (
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-2xl text-white hover:text-primary transition"
                                        >
                                            <FaLinkedin />
                                        </Link>
                                    )}
                                    {member.email && (
                                        <Link
                                            href={`mailto:${member.email}`}
                                            className="text-2xl text-white hover:text-primary transition"
                                        >
                                            <FaEnvelope />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
