// components/NoCostSection.tsx
import Image from 'next/image';

export default function NoCostSection() {
  return (
    <section className="relative bg-[#0A1F44] text-white overflow-hidden">
      {/* Curved Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
        <Image
          src="https://www.callamandademanda.com/content/uploads/2024/08/no-cost-bg-handshake.jpg"
          alt="Client handshake with attorney"
          fill
          className="object-cover object-left md:object-center"
          priority
        />
        {/* Dark overlay on image */}
        <div className="absolute inset-0 bg-[#0A1F44]/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side – Text + Stats */}
          <div className="max-w-xl">
            {/* Top Tag */}
            <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-2">
              MIAMI PERSONAL INJURY ATTORNEY
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              No Cost Unless We Win!
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-200 text-lg leading-relaxed">
              At Amanda Demanda Injury Lawyers, we believe access to justice should be free until we win your case. 
              That means no upfront fees, no hourly charges — you pay nothing unless we recover money for you. 
              We fight aggressively for maximum compensation because your recovery is our priority.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center md:text-left">
                <div className="text-pink-500 text-5xl md:text-6xl font-black">10+</div>
                <p className="text-gray-300 font-medium mt-2">Years of Experience</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-pink-500 text-5xl md:text-6xl font-black">1000+</div>
                <p className="text-gray-300 font-medium mt-2">Cases Won</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl md:text-2xl px-10 py-5 rounded-full uppercase tracking-wider shadow-2xl hover:shadow-pink-600/50 transition-all hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>

          {/* Right Side – Image (hidden on mobile, visible on md+) */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
}