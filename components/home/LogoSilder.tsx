"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function LogoSlider() {
  const logos = [
    { src: "/images/logo-1.svg", alt: "Client Logo 1" },
    { src: "/images/logo-2.svg", alt: "Client Logo 2" },
    { src: "/images/logo-3.svg", alt: "Client Logo 3" },
    { src: "/images/logo-4.svg", alt: "Client Logo 4" },
    { src: "/images/logo-5.svg", alt: "Client Logo 5" },
    { src: "/images/logo-6.svg", alt: "Client Logo 6" },
    { src: "/images/logo-4.svg", alt: "Client Logo 4" },
    { src: "/images/logo-5.svg", alt: "Client Logo 5" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="pt-12 ">
      <div className="container mx-auto px-4">

        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="opacity-75 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default LogoSlider;
