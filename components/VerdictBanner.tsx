// components/VerdictBanner.tsx ← ULTRA COMPACT VERSION (Half se bhi kam height)
import Link from 'next/link';

export default function VerdictBanner() {
  return (
    <section className="bg-white py-4 md:py-6">  {/* Pehle py-12 tha, ab sirf py-6! */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center md:text-left">

          {/* Text Part */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <span className="text-[#0a1f44] text-4xl md:text-5xl lg:text-6xl font-bold font-['Oswald'] leading-none">
              $43,000,000
            </span>
            <span className="text-[#0a1f44] text-lg md:text-xl lg:text-2xl font-medium font-['Oswald']">
              Car Accident Jury Verdict
            </span>
          </div>

          {/* Button – Chhota aur tight */}
          <Link
            href="https://www.law.com/dailybusinessreview/2023/07/21/43-million-verdict-for-miami-attorneys-even-the-jury-was-in-tears/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff008a] hover:bg-[#e6007e] text-white px-8 py-3.5 
                     text-lg font-bold uppercase tracking-wider 
                     rounded-full transition hover:scale-105 shadow-md"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
}