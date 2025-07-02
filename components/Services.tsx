import React from "react";

const services = [
  {
    title: "Anxiety & Stress Management",
    desc: "Learn to manage overwhelming thoughts and emotions through evidence-based therapy techniques.",
    image: "https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCouplesHappyHoldingBible.225997a3.jpg&w=1920&q=75",
  },
  {
    title: "Relationship Counseling",
    desc: "Strengthen communication and emotional connection in your relationships with guided sessions.",
    image:"https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCouplesHappyHoldingBible.225997a3.jpg&w=1920&q=75",
  },
 
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-white ">
        
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-green-900 ">How I Help</h1>
    
        <div className=" grid bg-blue-100 bg-white md:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <div key={index} className="  border border-black  bg-[#BEE8ED]
 shadow-lg rounded-lg p-6 text-black">
              <img src={s.image} alt={s.title} className="rounded-md h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-black">{s.desc}</p>
         <button className="mt-4 w-full py-2 px-4 bg-[#BEE8ED] border border-gray-800 rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-100 transition duration-200">
   
  Learn More
</button>
              
            </div>
          ))}

       <img src="\plant.webp" alt="" />
        </div>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default Services;
