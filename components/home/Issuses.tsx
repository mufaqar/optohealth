"use client";

export default function Issues() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 flex md:flex-row flex-col gap-10 items-center">
        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h2 className='md:text-5xl text-3xl font-bold text-theme_red mb-6'>
            The Issues
          </h2>

          <p className="text-base font-medium text-white max-w-[475px] mb-4">
            <span className="text-theme_red font-semibold">
              Crowded Emergency Departments:
            </span>{" "}
            Many emergency departments around the world face issues of crowding,
            leading to longer wait times and delays in care.
          </p>

          <p className="text-base font-medium text-white max-w-[475px] mb-4">
            <span className="text-theme_red font-semibold">
              Lack of Standardised Protocols:
            </span>{" "}
            Standardised triage and treatment protocols are essential for
            effective emergency care.
          </p>

          <p className="text-base font-medium text-white max-w-[475px]">
            <span className="text-theme_red font-semibold">
              Communication Barriers:
            </span>{" "}
            Effective communication is crucial in urgent and emergency care
            settings. Language barriers, cultural differences, and inadequate
            communication tools can hinder the delivery of timely and
            appropriate care.
          </p>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2 w-full"></div>
      </div>
    </section>
  );
}
