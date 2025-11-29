"use client"
// components/FeaturedOnTV.tsx
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const videos = [
  { id: "dQw4w9WgXcQ", title: "Que Hacer Si Un Conductor Sin Seguro Te Choca" },
  { id: "abc123xyz", title: "Tomas Rotura de Accidente y Peligros" },
  { id: "xyz789abc", title: "Accidente Mortal" },
  // Apne real YouTube video IDs daal dena yahan
];

export default function FeaturedOnTV() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-black mb-12">
          FEATURED <span className="text-pink-600 relative">
            ON
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-pink-600/40 rounded-full"></span>
          </span>
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 py-8 justify-center min-w-max">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized // Optional: agar kabhi issue aaye
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-20 h-20 text-white drop-shadow-2xl" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl px-14 py-5 rounded-full transition hover:scale-105 shadow-xl">
            SEE MORE
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}