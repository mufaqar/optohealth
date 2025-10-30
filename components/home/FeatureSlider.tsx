"use client";
import Slider from "react-slick";
import { FaLock, FaMedal, FaUserCheck } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom Arrow Components (No changes needed here based on the image)
const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -bottom-16 right-1/2 translate-x-14 bg-transparent border-2 border-white rounded-full w-12 h-12 flex items-center justify-center text-primary hover:bg-white hover:text-dot transition z-10" // Added z-10 to ensure arrows are above content
  >
    <IoChevronForwardOutline size={24} />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -bottom-16 left-1/2 -translate-x-14 bg-transparent border-2 border-white rounded-full w-12 h-12 flex items-center justify-center text-primary hover:bg-white hover:text-dot transition z-10" // Added z-10
  >
    <IoChevronBackOutline size={24} />
  </button>
);

const features = [
  {
    id: 1,
    icon: <FaLock size={40} className="text-primary" />,
    title: "Clinically-Validated Triage",
    description:
      "All health information and guidance in our triage system has been through a clinically governed and rigorous quality assurance review process.",
    iconBgColor: "bg-gray-200",
    iconBorderColor: "border-gray-400"
  },
  {
    id: 2,
    icon: <FaMedal size={40} className="text-primary" />,
    title: "Secure",
    description:
      "Our framework uses encryption to keep patients' details and interactions private. We are fully compliant with Data Protection & GDPR.",
    iconBgColor: "bg-white",
    iconBorderColor: "border-[#00476b]"
  },
  {
    id: 3,
    icon: <FaUserCheck size={40} className="text-primary" />,
    title: "Trusted Workforce",
    description:
      "We have partnered with the most reputable names in the business to ensure excellence in care for all patients.",
    iconBgColor: "bg-gray-200",
    iconBorderColor: "border-gray-400"
  },

  {
    id: 4,
    icon: <FaLock size={40} className="text-primary" />,
    title: "Continuous Improvement",
    description:
      "We regularly update our systems based on the latest clinical guidelines and user feedback for optimal performance.",
    iconBgColor: "bg-gray-200",
    iconBorderColor: "border-gray-400"
  },
];

export default function FeatureSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-theme_red py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative pb-20">
          <Slider {...settings}>
            {features.map((feature) => (
              <div key={feature.id} className="px-4 py-8 h-[350px]">
                <div className="border-2 border-white rounded-2xl text-center px-6 h-[250px] flex flex-col">
                  <div className={`  ${feature.iconBgColor}  border-6 border-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto -mt-8`}
                  >
                    {feature.icon}
                  </div>
                  {/* Text */}
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 mt-6">
                    {feature.title}
                  </h3>
                  <p className="text-base font-medi text-primary">

                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}