import Image from "next/image";

export default function TestimonialSection() {
    return (
        <div className="w-full h-screen  flex justify-around items-center p-[60px] bg-[#DAB2FF1A] ">
            <div className="w-[70vw] min-h-[70vh] bg-[#F9FAFB] p-10 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center "><p className="text-[#9810FA] text-sm">Testimonial</p>
                    <h1 className="text-3xl font-bold">What Our Clients Say </h1>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col justify-center items-center  w-[45vh] h-[30vh] border-[1px] border-[#E5E7EB] rounded-[12px] gap-5 px-5"><Image src="/Featured/star.png" alt="client" width={200} height={100} /><h1 className="text-sm">"NovaTech completely transformed our online presence. The attention to detail in both design and development was exceptional. Our conversion rate increased by 180%."</h1></div>
                    <div className="flex flex-col justify-center items-center  w-[45vh] h-[30vh] border-[1px] border-[#E5E7EB] rounded-[12px] gap-5 px-5"><Image src="/Featured/star.png" alt="client" width={200} height={100} /><h1 className="text-sm">"NovaTech completely transformed our online presence. The attention to detail in both design and development was exceptional. Our conversion rate increased by 180%."</h1></div>
                    <div className="flex flex-col justify-center items-center  w-[45vh] h-[30vh] border-[1px] border-[#E5E7EB] rounded-[12px] gap-5 px-5"><Image src="/Featured/star.png" alt="client" width={200} height={100} /><h1 className="text-sm">"NovaTech completely transformed our online presence. The attention to detail in both design and development was exceptional. Our conversion rate increased by 180%."</h1></div>

                </div>
            </div>

        </div >

    );
}

