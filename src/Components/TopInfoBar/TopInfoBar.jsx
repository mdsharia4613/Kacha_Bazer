import { FaTruck, FaPhoneAlt, FaLock, FaGift } from "react-icons/fa";

const TopInfoBar = () => {
    return (
        <div className="bg-[#ffffff]  border-b border-gray-200 py-7">
            <div className="max-w-7xl mx-auto  flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm">

                {/* Item 1 */}
                <div className="flex items-center gap-2 text-gray-700">
                    <FaTruck className="text-[#00bc7d]" />
                    <span className="font-medium">
                        Free Shipping From <span className="text-gray-900 font-semibold">€500.00</span>
                    </span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-5 bg-gray-300"></div>

                {/* Item 2 */}
                <div className="flex items-center gap-2 text-gray-700">
                    <FaPhoneAlt className="text-[#00bc7d]" />
                    <span className="font-medium">Support 24/7 At Anytime</span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-5 bg-gray-300"></div>

                {/* Item 3 */}
                <div className="flex items-center gap-2 text-gray-700">
                    <FaLock className="text-[#00bc7d]" />
                    <span className="font-medium">Secure Payment Totally Safe</span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-5 bg-gray-300"></div>

                {/* Item 4 */}
                <div className="flex items-center gap-2 text-gray-700">
                    <FaGift className="text-[#00bc7d]" />
                    <span className="font-medium">
                        Latest Offer <span className="text-[#00bc7d] font-semibold">Upto 20% Off</span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default TopInfoBar;
