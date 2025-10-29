"use client";
import Image from "next/image";
import React from "react";

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-12 items-center">
          
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/images/solutions.png"
              alt="Solutions Illustration"
              width={500}
              height={500}
              className="rounded-3xl w-full max-w-md md:max-w-lg"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#34B4FC] font-bold mb-6">
              The Solutions
            </h2>

            {/* Solution Items */}
            <div className="space-y-4 text-[#004361]">
              <div>
                <h3 className="text-[#34B4FC] font-semibold text-lg">
                  Faster Care
                </h3>
                <p>Bid farewell to long waiting times.</p>
              </div>

              <div>
                <h3 className="text-[#34B4FC] font-semibold text-lg">
                  Smarter Triage
                </h3>
                <p>Benefit from intelligent risk assessment.</p>
              </div>

              <div>
                <h3 className="text-[#34B4FC] font-semibold text-lg">
                  Safer Outcomes
                </h3>
                <p>
                  Rest assured with the enhanced capabilities within Opto’s
                  product.
                </p>
              </div>

              <div>
                <h3 className="text-[#34B4FC] font-semibold text-lg">
                  Cost-efficiency
                </h3>
                <p>
                  Opto Health benefits patients and healthcare institutions by
                  optimising resource allocation.
                </p>
              </div>

              <div>
                <h3 className="text-[#34B4FC] font-semibold text-lg">
                  Quick Implementation
                </h3>
                <p>8 weeks from contract to go live.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
