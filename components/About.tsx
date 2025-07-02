import React from "react";

const About = () => {
  return (
    <section className="bg-[#D9F3F4] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start px-6 md:px-10">
        
        {/* Image with badge inside */}
        <div className="relative w-fit rounded-2xl border-[6px] border-white shadow-xl overflow-hidden">
          <img
            src="/thp.avif" // ✅ Make sure this image is inside the `public` folder
            alt="Dr. Serena Blake"
            className="w-64 h-[400px] object-cover"
          />

          {/* Badge overlay inside image */}
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-md text-[12px] leading-tight shadow-md">
            <div className="text-black font-semibold">Dr. Serena Blake</div>
            <div className="text-gray-600">PsyD (Clinical Psychologist)</div>
            <div className="text-yellow-600 mt-1">⭐ Top Rated | 8 Years Experience</div>
          </div>
        </div>

        {/* Text content */}
        <div>
          {/* Badge */}
          <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full mb-3">
            About Dr. Serena Blake - Experienced Christian Therapist in Los Angeles, CA
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hi I'm Serena Blake</h2>

          {/* Paragraphs */}
          <p className="mb-4 text-gray-800 leading-relaxed">
            With over <strong>8 years of dedicated experience</strong> in individual and couples therapy, I truly enjoy working with a wide variety of people of different ages, backgrounds, and needs. My goal is to help you build confidence in your own journey and support you on pathways to healing.
          </p>

          <p className="mb-4 text-gray-800 leading-relaxed">
            My therapeutic approach is rooted in <strong>Christian principles</strong>, aiming to foster <strong>spiritual growth</strong>, the <strong>deepening of relationships</strong>, and a stronger sense of <strong>inner peace</strong>. I care deeply about helping clients grow in their capacity to love and trust in God's love for them.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Whether you're looking to heal from <strong>past wounds</strong>, discover your <strong>life's purpose</strong>, or prepare for what’s ahead, I offer a supportive space to explore these meaningful areas of life. Together, we’ll work toward achieving your goals with clarity and compassion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
