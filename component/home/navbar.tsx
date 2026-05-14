import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white-200 h-[calc(15vh-50px)] w-full px-20">
            <div className="flex justify-center items-center w-14 h-10 m-10">
                <Image src="/Link.png" alt="logo" width={100} height={100} />
            </div>
            <div className="navlinks flex justify-center items-center text-[#6A7282]">
                <Link href="/home" className="m-5">
                    Home
                </Link>
                <Link href="/about" className="m-5">
                    About
                </Link>
                <Link href="/projects" className="m-5">
                    Projects
                </Link>
                <Link href="/freelance" className="m-5">
                    Freelance
                </Link>
                <Link href="/template" className="m-5">
                    Templates
                </Link>
                <Link href="/contacts" className="m-5">
                    Contacts
                </Link>
                <button className="bg-[#9810FA] w-32 h-10 rounded-full text-white hover:bg-purple-800 cursor-pointer ">Get Started</button>
            </div>
        </div>
    );
}