import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full h-screen bg-[#DAB2FF1A] flex">
            <div className="w-full h-screen bg-[#F9FAFB] mx-[50px] flex justify-center  items-center">
                <div className="ml-[30] pr-[300] flex flex-col justify-between  h-100vh">
                    <button className="rounded-full px-2 py-1 bg-white w-fit text-[#9810FA] text-sm  ">Trusted by 200+ companies worldwide</button>
                    <h1 className="text-5xl font-bold">We Build Digital </h1>
                    <h1 className="text-5xl font-bold">Products That</h1>
                    <p className="text-xl">From UI/UX design to full-stack development, we </p><p className="text-xl">craft scalable solutions that elevate your brand and </p><p className="text-xl font-inter"> accelerate business results.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="rounded-full px-4 py-2 bg-red-300 text-white">Get Started</button>
                        <button className="rounded-full px-4 py-2 bg-red-300 text-white">View Work</button>
                    </div>
                </div>
                <div className="mr-[20] ">
                    <Image src="/Image (Dashboard).png" alt="heroimage" width={360} height={200} className="rounded-[16]" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
