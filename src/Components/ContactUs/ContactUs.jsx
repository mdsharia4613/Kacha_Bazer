
import { MdOutlineEmail, MdOutlineWifiCalling3 } from 'react-icons/md';
import bammer from '../../assets/about/banner.jpg';
import { IoLocationOutline } from 'react-icons/io5';
import logo from "../../assets/delivary/logo.png";


const ContactUs = () => {
    return (
        <>
            <div className='bg-[#ffffff]'>
                <div className="relative container mx-auto mt-50 px-10">
                    <img
                        src={bammer}
                        alt="About Banner"
                        className="w-full h-[300px] object-cover brightness-100"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10 text-gray-800">
                        About Us
                    </h2>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto my-10 px-10'>
                    <div className='border border-gray-200  flex
                flex-col justify-center items-center p-10 rounded-2xl'>
                        <MdOutlineEmail fontSize={48} className='text-[#00bc7d]'></MdOutlineEmail>
                        <h2 className='text-xl font-semibold'>Email Us</h2>
                        <p className='text-center text-gray-600'>
                            <a
                                href="mailto:info@kachabazar.com"
                                className='text-[#00bc7d] hover:underline'
                            >
                                info@kachabazar.com
                            </a>
                            Interactively grow empowered for process-centric total linkage.
                        </p>
                    </div>
                    <div className='border border-gray-200 flex
                flex-col justify-center items-center p-10 rounded-2xl'>
                        <MdOutlineWifiCalling3 fontSize={48} className='text-[#00bc7d]'></MdOutlineWifiCalling3>
                        <h2 className='text-xl font-semibold'>Call Us</h2>
                        <p className='text-center text-gray-600'><span className='text-[#00bc7d]'>012 2353 3535</span> Distinctively disseminate focused solutions clicks-and-mortar ministate.</p>
                    </div>
                    <div className='border border-gray-200 flex
                flex-col justify-center items-center p-10 rounded-2xl'>
                        <IoLocationOutline fontSize={48} className='text-[#00bc7d]'></IoLocationOutline>
                        <h2 className='text-xl font-semibold'>Location</h2>
                        <div className='text-center text-gray-600'>
                            <h2>Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.</h2>
                            <p>561-4535 Nulla LA</p>
                            <p>Bangladesh 15435</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-28 py-12  rounded-2xl shadow-lg ">
                    {/* Left Image Section */}
                    <div className="hidden md:block flex-1">
                        <img
                            className="h-[420px] object-contain drop-shadow-md"
                            src={logo}
                            alt="Contact Support"
                        />
                    </div>

                    {/* Right Form Section */}
                    <div className="flex-1 bg-white p-8 rounded-2xl shadow-md">
                        <div className="text-center md:text-left mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                For any support just send your query
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Collaboratively promote client-focused convergence vis-a-vis
                                customer-directed alignments via strategic users and standardized infrastructures.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <form action="" className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="text-gray-700 border border-gray-300 px-5 py-2 w-full rounded-xl outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] transition-all duration-200"
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="text-gray-700 border border-gray-300 px-5 py-2 w-full rounded-xl outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] transition-all duration-200"
                            />
                            <input
                                type="text"
                                placeholder="Enter Your Subject"
                                className="text-gray-700 border border-gray-300 px-5 py-2 w-full rounded-xl outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] transition-all duration-200"
                            />
                            <textarea
                                placeholder="Write your message here"
                                className="text-gray-700 border border-gray-300 px-5 py-2 w-full rounded-xl outline-none focus:border-[#00bc7d] focus:ring-1 focus:ring-[#00bc7d] transition-all duration-200 resize-none"
                                rows="6"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-[#00bc7d] text-white py-2 rounded-xl hover:bg-[#00a86b] transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>


           </div>
        </>
    );
};

export default ContactUs;