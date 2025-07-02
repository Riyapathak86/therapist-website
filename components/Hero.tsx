import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/img.webp')] bg-cover bg-center text-white brightness-80">
      {/* Light overlay */}
      <div className="absolute inset-0  bg-opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 rightness-110">
        {/* Top Location Info */}
        <p className="text-sm md:text-base text-gray-200 mb-2">
          Christian Counseling Services in Richmond & Central Virginia
        </p>

        {/* ✅ Headline */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Professional Counseling for Christian Healing and Growth
        </h1>

        {/* ✅ Sub-headline */}
        <h2 className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
          Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
        </h2>

        {/* Extra Emotional Line (optional) */}
        <p className="mt-6 text-xl md:text-2xl font-semibold">
          I want to work with you for...
        </p>
        <p className="text-[#9fd9ff] font-bold text-xl md:text-2xl mt-1">
          💙 Greater Peace in Your Heart
        </p>

        {/* Ratings/Info line */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-300 font-medium">
          <span>⭐ Top Rated</span>
          <span>• 40+ Years Experience</span>
          <span>• Testimonials</span>
          <span>• Media Mentions</span>
        </div>

        {/* ✅ CTA Button */}
        <div className="mt-6 p-[2px] rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full text-blue-800 font-semibold bg-white hover:bg-gray-100 transition-all duration-300">
            <span className="text-lg">✨</span>
            <span>Book a Free Consult</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
