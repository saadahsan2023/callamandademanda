"use client"
// components/LogoMarquee.tsx
import Image from 'next/image';

export default function LogoMarquee() {
  const logos = [
    "https://www.callamandademanda.com/content/uploads/2024/08/The-A-List.webp",
    "https://www.callamandademanda.com/content/uploads/2024/08/The-National-Trial-Lawyers-Top-100.webp",
    "https://www.callamandademanda.com/content/uploads/2024/08/Miami-Dade-Favorites.webp",
    "https://www.callamandademanda.com/content/uploads/2024/01/florida-justice.webp",
    "https://www.callamandademanda.com/content/uploads/2024/01/miami-dade.webp",
    "https://www.callamandademanda.com/content/uploads/2024/03/supreme-court-florida.webp",
    "https://www.callamandademanda.com/content/uploads/2024/03/supreme-court-texas.webp",
    "https://www.callamandademanda.com/content/uploads/2024/04/AB-advocate-1.webp",
    "https://www.callamandademanda.com/content/uploads/2024/05/2024-personal-injury-lawyer.webp",
    "https://www.callamandademanda.com/content/uploads/2024/05/lawyers-of-distinction.webp",
    "https://www.callamandademanda.com/content/uploads/2024/01/aba.webp",
    "https://www.callamandademanda.com/content/uploads/2024/01/trial-lawyers.webp",
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-navy mb-8">
          Recognized By
        </h2>

        {/* Marquee Wrapper */}
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First Set */}
            {logos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-8 md:mx-12">
                <Image
                  src={logo}
                  alt="Award Logo"
                  width={180}
                  height={120}
                  className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
              </div>
            ))}

            {/* Duplicate Set for Infinite Loop */}
            {logos.map((logo, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 mx-8 md:mx-12">
                <Image
                  src={logo}
                  alt="Award Logo"
                  width={180}
                  height={120}
                  className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}