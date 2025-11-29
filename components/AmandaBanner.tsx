// components/AmandaBanner.tsx ← 100% EXACT MATCH (Final)
import Image from 'next/image';

export default function AmandaBanner() {
  return (
    <section className="bg-[#0A1F44] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid md:grid-cols-12 gap-8 items-center">

          {/* Amanda Photo - Left Side */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <Image
              src="https://www.callamandademanda.com/dist/images/generated.amanda-blue@646x790.7b8233d6eecc08a2.webp"
              alt="Amanda Demanda"
              width={580}
              height={710}
              className="w-72 sm:w-80 md:w-96 lg:w-full drop-shadow-2xl"
              priority
            />
          </div>

          {/* Text + Badge - Right Side */}
          <div className="md:col-span-7 text-center md:text-left">

            {/* ACCIDENT? */}
            <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none">
              Accident?
            </h2>

            {/* AMANDA DEMANDA - Big Pink */}
            <h1 className="text-[#ff008a] text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black uppercase leading-none mt-2 md:mt-4">
              Amanda<br />Demanda
            </h1>

            {/* Miami Herald Badge - Bottom Right */}
            <div className="flex justify-center md:justify-end mt-6 md:mt-10">
              <Image
                src="https://www.callamandademanda.com/dist/images/generated.miami-dade-tag-en@748x822.f021cc68a8ae7772.webp"
                alt="Miami Herald Winner 2023 & 2024 - Best Personal Injury Law Firm"
                width={620}
                height={682}
                className="w-80 sm:w-96 md:w-[520px] lg:w-[580px]"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}