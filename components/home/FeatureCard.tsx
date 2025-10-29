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
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={400}
                  className="w-full h-auto mx-auto"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#00476b] mb-3 max-w-xs">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#00476b] text-sm sm:text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
