"use client";
import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-3xl px-4">
         <Image src="/images/videoframe.png" alt="logo" width={500} height={500} className="w-full"/>      
      </div>
    </section>
  );
}
