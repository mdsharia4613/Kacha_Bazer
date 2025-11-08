import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { FaBagShopping, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa6";
import visa from "../../assets/delivary/visa_card.png";
import master from "../../assets/delivary/masrter.png";
import paypal from "../../assets/delivary/paypal.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white  border-gray-200 pt-10 text-gray-700">
            {/* ======= Top Footer Section ======= */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
                {/* Company */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-[#00bc7d]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Contact Us</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Careers</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Latest News</a></li>
                        
                    </ul>
                </div>

                {/* Latest News */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Latest News</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#00bc7d]">Fish & Meat</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Soft Drink</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Milk & Dairy</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Beauty & Health</a></li>
                    </ul>
                </div>

                {/* My Account */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">My Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#00bc7d]">Dashboard</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">My Orders</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Recent Orders</a></li>
                        <li><a href="#" className="hover:text-[#00bc7d]">Update Profile</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <FaBagShopping fontSize={24}></FaBagShopping>
                        <h2 className="text-xl font-bold text-[#00bc7d]">
                            KACHA <span className="text-gray-800">BAZAR</span>
                        </h2>
                    </div>
                    <p className="text-sm mb-2">
                        987 Andre Plain Suite High Street 838, Lake Hestertown, USA
                    </p>
                    <p className="text-sm">Tel : 02.356.1666</p>
                    <p className="text-sm">Email : ccruidk@test.com</p>
                </div>
            </div>

            {/* ======= Bottom Section ======= */}
            <div className="bg-[#f9fafb] py-6 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">Follow Us</span>
                        <div className="flex gap-2 text-white">
                            <a href="#" className="bg-blue-600 p-2 rounded-full hover:scale-105"><FaFacebookF /></a>
                            <a href="#" className="bg-black p-2 rounded-full hover:scale-105"><FaTwitter /></a>
                            <a href="#" className="bg-red-600 p-2 rounded-full hover:scale-105"><FaPinterestP /></a>
                            <a href="#" className="bg-sky-700 p-2 rounded-full hover:scale-105"><FaLinkedinIn /></a>
                            <a href="#" className="bg-green-500 p-2 rounded-full hover:scale-105"><FaWhatsapp /></a>
                        </div>
                    </div>

                    {/* Call Us */}
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Call Us</p>
                        <p className="text-[#00bc7d] font-bold text-lg">+6599887766</p>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-2 text-3xl text-gray-600">
                        <img className=" cursor-pointer h-8" src={visa} alt="" />
                        <img className=" cursor-pointer h-8" src={master} alt="" />
                        <img className=" cursor-pointer h-8" src={paypal} alt="" />
                    </div>
                </div>
            </div>

            {/* ======= Copyright ======= */}
            <div className="bg-white py-4 text-center text-gray-500 text-sm border-t border-gray-100">
                Copyright © 2025 <span className="text-[#00bc7d] font-semibold">HtmlLover</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
