// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A1F44",
        brightPink: "#FF008A",
        fadedPink: "#E6007E",
        navy: "#001f3f",
        pink: "#ff3399",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "16px": "16px",
      },
      spacing: {
        3.75: "15px",
        7.5: "30px",
      },
      letterSpacing: {
        "0.32px": "0.32px",
      },
      lineHeight: {
        150: "150%",
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  // ... tumhara existing content rahega
  theme: {
    extend: {
      colors: {
        navy: "#001f3f",
        pink: "#ff3399",
        brightPink: "#ff008a",
        darkPink: "#e6007e",
        darkBlue: "#0a1f44",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        fontFamily: {
          oswald: ["Oswald", "sans-serif"],
        },
      },
    },
  },
};
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.callamandademanda.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;