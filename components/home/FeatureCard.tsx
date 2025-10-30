"use client";
import Image from "next/image";
import React from "react";

const features = [
  {
    id: 1,
    image: "/images/FeatureCard-3.svg",
    title: "Bookable appointments",
    description:
      'Patient redirection to alternative services including PharmacyFirst, Emergency Dental, SDEC and virtual services such as “Call-Back Clinics”.',
  },
  {
    id: 2,
    image: "/images/FeatureCard-2.svg",
    title: "Multi-lingual",
    description:
      "Opto is the first Urgent Care digital clinical tool to be available in multi-language.",
  },
  {
    id: 3,
    image: "/images/FeatureCard-1.svg",
    title: "Intuitive thinking",
    description:
      "Our intuitive flow of symptom related questions enables us to identify the patient’s ailment, categorise them and stream to the appropriate care.",
  },
];

export default function FeatureCard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={400}
                  className="w-full h-auto mx-auto"
                />
              </div>

              {/* Title */}
              <h3 className="md:text-[32px] md:leading-none text-2xl font-bold text-primary text-center mb-6">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base font-medium text-primary text-center max-w-[274px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
