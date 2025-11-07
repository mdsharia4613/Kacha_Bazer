import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../assets/banner/img-1.jpeg";
import img2 from "../../assets/banner/img-2.jpeg";
import img3 from "../../assets/banner/img-3.jpg";
import couponData from "../../../public/copon.json";

const sliderImage = [img1, img2, img3];



const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 my-6 px-4 ">
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
                    {sliderImage.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} className="w-full object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right side coupons */}
            <div className="md:w-1/3 w-full flex flex-col gap-4 border-3 border-orange-500 rounded-xl">
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
                                <div className="relative h-24 border-l border-dashed border-gray-300 mx-2">
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
