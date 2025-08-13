import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";


export default function Footer() {
    return (
        <div className="bg-gray-900 w-screen min-h-[400px] pt-10 lg:pt-0 pb-10 lg:pb-0 flex justify-center text-center lg:text-left
         items-center ">
            <footer className="flex flex-col lg:flex-row justify-around items-center mx-auto w-full px-[10%] space-y-4 lg:space-y-0">
                <div className="flex flex-col space-y-4 lg:space-y-15 min-w-[40%]">
                    <h3 className="text-white text-[24px]">BookVentory.com</h3>
                    <p className="text-[#8e8e84]">A collection of books for you to read and go beyond the curve.</p>
                    <div className="flex gap-4 items-center text-[#8e8e84] text-xl mx-auto lg:mx-0">
                        <SlSocialInstagram className="cursor-pointer"></SlSocialInstagram>
                        <TiSocialFacebook className="cursor-pointer"></TiSocialFacebook>
                        <SlSocialYoutube className="cursor-pointer"></SlSocialYoutube>
                        <SlSocialLinkedin className="cursor-pointer"></SlSocialLinkedin>
                    </div>
                </div>
                <div className="flex flex-col w-full md:min-w-[20%] space-y-4">
                    <h3 className="text-white text-[24px]">Product</h3>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Overview</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Pricing</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Marketplace</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Features</a>
                </div>
                <div className="flex flex-col w-full md:min-w-[20%] space-y-4">
                    <h3 className="text-white text-[24px]">Company</h3>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">About</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Team</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Blog</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Careers</a>
                </div>
                <div className="flex flex-col w-full md:min-w-[20%] space-y-4">
                    <h3 className="text-white text-[24px]">Resources</h3>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Help</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Sales</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Advertise</a>
                    <a href="#" className="text-[#8e8e84] hover:underline hover:text-red-400">Privacy</a>
                </div>
            </footer>
        </div>
    );
}