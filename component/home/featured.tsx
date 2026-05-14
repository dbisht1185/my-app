import Image from "next/image";

export default function FeaturedSection() {
    return (
        <div className="w-full h-screen  flex justify-around items-center p-[60px] bg-[#DAB2FF1A] ">
            <div className="w-[70vw] min-h-[70vh] bg-[#F9FAFB] p-10 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center "><p className="text-[#9810FA] text-sm">Our Work </p>
                    <h1 className="text-4xl font-bold">Featured Projects </h1>
                    <p className="text-xs text-[#6A7282]">A glimpse into the digital experiences we've crafted for our clients.</p></div>
                <div className="grid grid-cols-2 gap-10">
                    <Image src="/Featured/1.png" alt="project" width={320} height={320} />
                    <Image src="/Featured/2.png" alt="project" width={320} height={320} />
                    <Image src="/Featured/3.png" alt="project" width={320} height={320} />
                    <Image src="/Featured/4.png" alt="project" width={320} height={320} />
                </div>
            </div>

        </div >

    );
}