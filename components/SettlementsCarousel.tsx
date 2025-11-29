// components/SettlementsCarousel.tsx
"use client"
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SettlementsCarousel() {
    return (
        <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://www.callamandademanda.com/content/uploads/2024/08/settlements-bg.jpg"
                    alt="Miami Skyline"
                    fill
                    className="object-cover brightness-90"
                    quality={95}
                />
                <div className="absolute inset-0 bg-white/80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-12">
                    <p className="text-pink-600 font-semibold text-lg tracking-wider">CASE RESULTS</p>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-2">Settlements</h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative group">
                    {/* Left Arrow */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ChevronLeft className="w-8 h-8 text-gray-700" />
                    </button>

                    {/* Right Arrow */}
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ChevronRight className="w-8 h-8 text-gray-700" />
                    </button>

                    {/* Scrollable Cards */}
                    <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 py-8 px-4 scroll-smooth">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div
                                key={item}
                                className="flex-shrink-0 w-80 snap-center bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100"
                            >
                                {/* Pink Justice Icon */}
                                <div className="text-pink-600 mb-6">
                                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 12h3v8h14v-8h3L12 2zM12 4.83L18.17 11H16v7h-8v-7H5.83L12 4.83z" />
                                    </svg>
                                </div>

                                {/* Settlement Amount */}
                                <h3 className="text-5xl md:text-6xl font-black text-gray-900">
                                    ${item === 1 ? '43' : item === 2 ? '25' : item === 3 ? '15' : '100'},000
                                    {item === 1 && <span className="text-4xl align-super">,000</span>}
                                </h3>

                                {/* Case Type */}
                                <p className="text-gray-600 font-medium mt-4 text-lg">
                                    {item === 1 ? "Car Accident Verdict" : "Personal Injury Settlement"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl px-12 py-5 rounded-full transition hover:scale-105 shadow-xl">
                        View All Case Results
                    </button>
                </div>
            </div>

            {/* Hide scrollbar but keep functionality */}
            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}