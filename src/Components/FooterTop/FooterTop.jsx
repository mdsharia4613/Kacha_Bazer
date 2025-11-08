import { FaApple } from "react-icons/fa6";
import left from "../../assets/delivary/left.jpg";
import right from "../../assets/delivary/right.jpg";

const FooterTop = () => {
    return (
        <div className="bg-[#eef2ff] py-10 md:py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">

                {/* Left Image */}
                <div className="hidden md:block w-1/4">
                    <img
                        src={left}
                        alt="Left Banner"
                        className="w-72"
                    />
                </div>

                {/* Main Content */}
                <div className="text-center flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                        Get Your Daily Needs From Our{" "}
                        <span className="text-[#00bc7d]">KachaBazar</span> Store
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                        There are many products you will find in our shop. Choose your daily
                        necessary product from our KachaBazar store and enjoy special offers
                        every day.
                    </p>

                    {/* App Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        {/* App Store */}
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-14"
                            />
                        </a>

                        {/* Google Play */}
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Get it on Google Play"
                                className="h-14"
                            />
                        </a>
                    </div>
                </div>


                {/* Right Image */}
                <div className="hidden md:block w-1/4">
                    <img
                        src={right}
                        alt="Right Banner"
                        className="w-72"
                    />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
