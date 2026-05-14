import Image from "next/image";

export default function FooterSection() {
    return (
        <footer >
            <div className="w-full h-full bg-white px-8 md:px-20 py-12 grid grid-cols-4 grid-rows-1 gap-4">
                <div className="w-full h-full flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">NovaTech</h1>
                    <p className="text-gray-500 max-w-[250px] leading-relaxed">
                        We build digital products that drive growth. From design to development, we've got you covered.
                    </p>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Services</h1>
                    <ul className="text-gray-500 text-sm gap-5 flex flex-col ">
                        <li>UI/UX Design</li>
                        <li>Frontend Dev</li>
                        <li>Backend Dev</li>
                        <li>OOPs Solutions</li>
                        <li>AMC Services</li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Company</h1>
                    <ul className="text-gray-500 text-sm gap-5 flex flex-col">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Support</h1>
                    <ul className="text-gray-500 text-sm gap-5 flex flex-col">
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="cursor-pointer"><Image src="/twitter.svg" alt="image" width={20} height={100} /></div>
                    <div className="cursor-pointer"> <Image src="/linkdin.svg" alt="image" width={20} height={100} /></div>
                    <div className="cursor-pointer"> <Image src="/git.svg" alt="image" width={20} height={100} /></div>
                    <div className="cursor-pointer"> <Image src="/insta.svg" alt="image" width={20} height={100} /></div>

                </div>
            </div>

            <div className=" w-full py-5 px-8 flex items-center justify-between text-sm text-[#6A7282]">

                <p>© 2026 NovaTech. All rights reserved.</p>
                <p>Designed & Built by Priya and Suman.</p>



            </div>

        </footer>

    );
}
