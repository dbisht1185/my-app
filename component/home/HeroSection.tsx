import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#DAB2FF1A] flex">
      <div className="max-w-7xl mx-auto bg-[#F9FAFB] mx-[50px] flex justify-center  items-center gap-4 ">
        <div className="ml-[30] pr-[300] flex flex-col justify-between gap-8">
          <div className=""><button className="rounded-full px-2 py-1 bg-white w-fit text-[#9810FA] text-sm  ">Trusted by 200+ companies worldwide</button></div>
          <p className="text-6xl font-bold">We Build Digital Products That</p>
          <p className="text-lg font-inter">From UI/UX design to full-stack development, we craft scalable solutions that elevate your brand and accelerate business results.</p>
          <div className="flex gap-4 mt-4">
            <button className="rounded-full px-4 py-2 bg-[#9810FA] text-white hover:bg-purple-400 cursor-pointer ">Get Started</button>
            <button className="rounded-full px-4 py-2 bg-[#E5E7EB] text-black hover:bg-gray-400 cursor-pointer ">View Work</button>
          </div>
        </div>
        <div className="mr-[20] ">
          <Image src="/Image (Dashboard).png" alt="heroimage" width={1000} height={1000} className="rounded-[16]" />
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
