
export default function Video() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
        <video
          className="h-[495px] w-full rounded-lg"
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://optohealth.co.uk/wp-content/uploads/2024/06/Asset-104@2x-online-video-cutter.com_-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
