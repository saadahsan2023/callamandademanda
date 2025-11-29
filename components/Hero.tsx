// components/HeroSection.tsx ← FINAL 100% PERFECT
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://www.callamandademanda.com/content/uploads/2025/08/Broll_AD_update_1080_hero_h264.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content – Left Side, Exact Original Size */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="max-w-lg text-white">

          {/* $500+ Million – Real site jaisa size */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
            $500+ Million
          </h1>

          {/* Won for Our Clients – Perfect size */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-light mt-2 md:mt-4">
            Won for Our Clients
          </p>

          {/* Button – Exact original button */}
          <Link
            href="/contact"
            className="inline-block mt-8 bg-[#ff008a] hover:bg-[#e6007e] 
                     text-white font-bold text-lg md:text-xl 
                     px-10 py-5 rounded-full uppercase tracking-wider 
                     transition duration-300 hover:scale-105 shadow-xl"
          >
            Start Your Free Consultation
          </Link>

        </div>
      </div>
    </section>
  );
}