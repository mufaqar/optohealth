"use client";
import React from "react";

export default function Issues() {
  return (
    <section className="bg-[#004361] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-10 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#ff4838] font-bold mb-6">
              The Issues
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed mb-4">
              <span className="text-[#ff4838] font-semibold">
                Crowded Emergency Departments:
              </span>{" "}
              Many emergency departments around the world face issues of crowding,
              leading to longer wait times and delays in care.
            </p>

            <p className="text-white text-base md:text-lg leading-relaxed mb-4">
              <span className="text-[#ff4838] font-semibold">
                Lack of Standardised Protocols:
              </span>{" "}
              Standardised triage and treatment protocols are essential for
              effective emergency care.
            </p>

            <p className="text-white text-base md:text-lg leading-relaxed">
              <span className="text-[#ff4838] font-semibold">
                Communication Barriers:
              </span>{" "}
              Effective communication is crucial in urgent and emergency care
              settings. Language barriers, cultural differences, and inadequate
              communication tools can hinder the delivery of timely and
              appropriate care.
            </p>
          </div>

          {/* Image or Illustration */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
