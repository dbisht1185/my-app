import Image from "next/image";

export default function BuildSection() {
    return (
        <div className="w-full h-[100vh]  flex justify-around items-center p-[60px] bg-[#DAB2FF1A] ">
            <div className="w-[70vw] min-h-[70vh] bg-[#F9FAFB] p-10  grid grid-cols-2  items-center">
                <div className="w-full flex flex-col justify-center p-3 list-block gap-10">
                    <p className="text-[#9810FA] text-sm">WHY  CHOOSE US </p>
                    <h1 className="text-4xl font-bold">We Don't Just Build — <span className="text-[#9810FA]">We Partner</span> </h1>
                    <p className="text-sm">We combine cutting-edge technology with creative excellence to deliver solutions that not only meet your goals but exceed expectations.</p>
                    <div className="flex flex-col   items-start">
                        <ul className="list-none text-gray-600 flex flex-col   gap-4 ">
                            <li className="flex px-[20px] gap-4 items-center"><div className="bg-[#9810FA1A] rounded-lg p-2"><Image src="/build/ligthtning.png" alt="service" width={30} height={30} /></div>Lightning-fast delivery without compromising quality</li>
                            <li className="flex px-[20px] gap-4 items-center"><div className="bg-[#9810FA1A] rounded-lg p-2"><Image src="/build/security.png" alt="service" width={30} height={30} /></div>Enterprise-grade security and best practices</li>
                            <li className="flex px-[20px] gap-4 items-center"><div className="bg-[#9810FA1A] rounded-lg p-2"><Image src="/build/developers.png" alt="service" width={30} height={30} /></div>Dedicated team of senior developers and designers</li>
                            <li className="flex px-[20px] gap-4 items-center"><div className="bg-[#9810FA1A] rounded-lg p-2"><Image src="/build/record.png" alt="service" width={30} height={30} /></div>Proven track record with 200+ successful projects</li>
                            <li className="flex px-[20px] gap-4 items-center"><div className="bg-[#9810FA1A] rounded-lg p-2"><Image src="/build/workflow.png" alt="service" width={30} height={30} /></div>Transparent communication and agile workflow</li>
                        </ul>
                    </div> </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="border w-full min-h-[90px] rounded-[10px] flex justify-center items-center flex-col bg-[#FFFFFF]">
                        <h1 className="text-3xl font-bold">8+</h1>
                        <p className="text-sm">Years of Experience</p>
                    </div>
                    <div className="border w-full min-h-[90px] rounded-[10px] flex justify-center items-center flex-col bg-[#FFFFFF]">
                        <h1 className="text-3xl font-bold">200+</h1>
                        <p className="text-sm">Projects Completed</p>
                    </div>
                    <div className="border w-full min-h-[90px] rounded-[10px] flex justify-center items-center flex-col bg-[#FFFFFF]">
                        <h1 className="text-3xl font-bold">50+</h1>
                        <p className="text-sm">Team Members</p>
                    </div>
                    <div className="border w-full min-h-[90px] rounded-[10px] flex justify-center items-center flex-col bg-[#FFFFFF]">
                        <h1 className="text-3xl font-bold">15+</h1>
                        <p className="text-sm">Countries Served</p>
                    </div>
                </div>
            </div>


        </div>

    );
}
