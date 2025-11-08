import bammer from '../../assets/about/banner.jpg';
import couponData from "../../../public/copon.json";


const Offer = () => {
    return (
        <div className='container mx-auto px-10'>
            <div className="relative  mt-50 ">
                <img
                    src={bammer}
                    alt="About Banner"
                    className="w-full h-[300px] object-cover brightness-100"
                />
                <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10 text-gray-800">
                    Mega Offers
                </h2>
            </div>
            <div className="p-5 flex flex-wrap justify-center gap-10 mt-5">
                {couponData.map((coupon) => (
                    <div
                        key={coupon.id}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden relative mb-4"
                    >
                        <div className="flex items-center">
                            {/* Left image & offer */}
                            <div className="flex items-center flex-1 py-10 px-10 gap-5">
                                <img
                                    src={coupon.image}
                                    alt={coupon.title}
                                    className="w-36 h-36 object-contain rounded-xl"
                                />
                                <div className="ml-3">
                                    <p className="text-red-500 font-bold text-lg">
                                        {coupon.discount} Off
                                    </p>
                                    <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full">
                                        {coupon.status}
                                    </span>
                                    <h3 className="text-gray-800 font-semibold text-[16px] mt-1">
                                        {coupon.title}
                                    </h3>
                                    <div className="flex gap-1 mt-2">
                                        {["00", "00", "00", "00"].map((t, i) => (
                                            <div
                                                key={i}
                                                className="bg-red-500 text-white text-xs font-bold rounded-md px-2 py-1"
                                            >
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Vertical dashed line */}
                            <div className="relative h-24 border-l border-dashed border-gray-400 mx-2">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-inner"></div>
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-inner"></div>
                            </div>

                            {/* Right coupon part */}
                            <div className="flex flex-col items-center justify-center pr-4">
                                <p className="border border-dashed border-green-400 text-green-500 font-bold px-4 py-1 rounded-md">
                                    {coupon.code}
                                </p>
                                <p className="text-gray-500 text-xs mt-1 text-center">
                                    * Apply on shopping over <br />
                                    <span className="font-semibold text-black">
                                        {coupon.minPurchase}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;