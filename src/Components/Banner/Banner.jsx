import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import bannerData from "../../../public/banner.json";
import couponData from "../../../public/copon.json";

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 my-6 px-10">
            {/* Left side slider */}
            <div className="md:w-2/3 w-full">
                <Swiper
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ dynamicBullets: true }}
                    loop={true}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    className="rounded-xl overflow-hidden shadow-md"
                >
                    {bannerData.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[400px] lg:h-[460px] object-cover rounded-xl"
                            />

                            {/* Text overlay */}
                            <div className="absolute max-w-xl space-y-2 inset-0 text-black flex flex-col justify-center items-start  px-10 md:px-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-sm md:text-base mb-4 opacity-90 text-gray-500">
                                    {slide.description}
                                </p>
                                <button className="bg-[#00bc7d] hover:bg-[#009e68] text-white transition duration-200 px-5 py-2 rounded-md text-sm font-medium shadow-md">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right side coupons */}
            <div className="md:w-1/3 w-full flex flex-col gap-4 border-2 border-orange-500 rounded-xl ">
                <h2 className="bg-[#ffedd4] font-medium py-2.5 text-center text-sm rounded-t-xl">
                    Latest Super Discount Active Coupon Code
                </h2>
                <div className="p-5">
                    {couponData.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden relative mb-4"
                        >
                            <div className="flex items-center">
                                {/* Left image & offer */}
                                <div className="flex items-center flex-1 p-3">
                                    <img
                                        src={coupon.image}
                                        alt={coupon.title}
                                        className="w-20 h-20 object-cover rounded-xl"
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
        </div>
    );
};

export default Banner;
