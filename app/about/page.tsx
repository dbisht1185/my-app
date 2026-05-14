import Image from "next/image";

export default function ServiceSection() {
    return (
        <div className="w-full h-screen  flex justify-around bg-[#DAB2FF1A]  flex-col px-[50px]">
            <div className="w-full h-[calc(30vh-48px)]  flex flex-col justify-around items-center bg-[#F9FAFB] p-[20px]">
                <h1 className="text-center">What We Do</h1>
                <h1 className="text-2xl font-bold text-center">Services We Offer</h1>
                <p className="text-center text-sm">End-to-end digital solutions tailored to transform your vision into reality.</p>
            </div>
            <div className="w-full h-[calc(80vh-48px)] bg-[#F9FAFB] flex  flex-col justify-around items-center grid grid-cols-3 grid-rows-2 gap-4 p-[20px]">

                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/ui.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>UI/UX Design</h1>
                            <p className="text-xs">Crafting intuitive, user-centered experiences that delight users and drive engagement through research-backed design.</p>
                        </div>


                    </div>

                </div>
                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/gd.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>Graphic Design</h1>
                            <p className="text-xs">Visual storytelling through stunning brand identities, marketing assets, and creative designs that stand out.</p>
                        </div>


                    </div>

                </div>
                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/fd.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>Frontend Development</h1>
                            <p className="text-xs">Pixel-perfect, responsive interfaces built with modern frameworks for blazing-fast performance.</p>
                        </div>


                    </div>

                </div>
                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/bd.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>Backend Development</h1>
                            <p className="text-xs">Robust, scalable server architectures and APIs that power your applications reliably.</p>
                        </div>


                    </div>

                </div>
                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/oos.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>Code Architecture</h1>
                            <p className="text-xs">Clean, maintainable, and modular code architectures following object-oriented best practices.</p>
                        </div>


                    </div>

                </div>
                <div className="w-[45vh] h-[30vh] bg-red-100 flex flex-col justify-center items-center mx-[20px] px-[20px] rounded-[12px]">
                    <div>
                        <Image src="/sm.png" alt="service" width={20} height={100} />
                        <div className="flex flex-col justify-center "><h1>Support & Maintenence</h1>
                            <p className="text-xs">Ongoing support, maintenance, and updates to keep your systems running at peak performance.</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}
