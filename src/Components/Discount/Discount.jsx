import { motion, AnimatePresence } from "framer-motion";
import discountData from "../../../public/discount.json";
import { FaBagShopping, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import img from "../../assets/delivary/line.png";
import { useContext } from "react";
import { ProductContext } from "../QuickView/QuickView";
import { useOutletContext } from "react-router-dom";

const Discount = () => {
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext);
    const { handleAddToCart } = useOutletContext();

    return (
        <>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-semibold">Latest Discounted Products</h2>
                <p className="text-sm text-gray-400">
                    See Our latest discounted products below. Choose your daily needs
                    from here and get a special discount with free shipping.
                </p>
            </div>

            <div className="container mx-auto my-10 ">
                <div className="flex flex-wrap gap-5 max-w-[1350px] mx-auto ">
                    {discountData.map((item) => {
                        const fullStar = Math.floor(item.rating);
                        const halfStar = item.rating % 1 >= 0.5;

                        return (
                            <motion.div
                                key={item.id}
                                className="relative bg-amber-50 border border-gray-100 shadow hover:shadow-lg p-4 rounded-lg space-y-1.5 text-xs group overflow-hidden"
                            >
                                {/* Product Image */}
                                <img
                                    className="w-full h-44 bg-gray-100 rounded-lg object-contain"
                                    src={item.img}
                                    alt={item.title}
                                />

                                {/* Hover Quick View Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProduct(item);
                                    }}
                                    className="absolute inset-0 flex items-center justify-center gap-2 text-white font-medium text-sm bg-black/60 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <HiOutlineViewfinderCircle className="text-lg" />
                                    <span>Quick View</span>
                                </button>

                                {/* Product Title */}
                                <h2 className="text-sm font-semibold">{item.title}</h2>

                                {/* Rating Section */}
                                <div className="flex gap-1.5">
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, i) => {
                                            if (i < fullStar)
                                                return (
                                                    <FaStar key={i} className="text-yellow-300"></FaStar>
                                                );
                                            else if (i === fullStar && halfStar)
                                                return (
                                                    <FaStarHalf
                                                        key={i}
                                                        className="text-yellow-300"
                                                    ></FaStarHalf>
                                                );
                                            else
                                                return (
                                                    <FaRegStar
                                                        key={i}
                                                        className="text-yellow-300"
                                                    ></FaRegStar>
                                                );
                                        })}
                                    </div>
                                    <p className="text-gray-400 text-xs">({item.rating})</p>
                                    <p className="text-gray-400 text-xs">{item.review}</p>
                                </div>

                                {/* Price Info */}
                                <div className="flex items-center justify-between ">
                                    <p className="text-gray-700 font-semibold">Originally</p>
                                    <p className="flex items-center line-through text-gray-400">
                                        <TbCurrencyTaka></TbCurrencyTaka> {item.originalPrice}
                                    </p>
                                </div>

                                {/* Divider Image */}
                                <div className="flex items-center justify-center">
                                    <img className="w-52" src={img} alt="" />
                                </div>

                                {/* Discount Price */}
                                <p className="flex items-center justify-center font-semibold text-[16px]">
                                    <TbCurrencyTaka></TbCurrencyTaka> {item.discountPrice}
                                </p>

                                {/* Offer Badge */}
                                <p className="bg-orange-400 absolute px-1.5 py-1 top-0 left-0 rounded-tl-lg rounded-br-lg text-white font-medium">
                                    {item.offer}
                                </p>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart({
                                            ...item,
                                            price: item.discountPrice, // 🟢 মূল দাম discountPrice থেকে পাঠানো হলো
                                        });
                                    }}
                                    className="bg-[#00bc7d] absolute right-2 bottom-28 text-white py-2 px-2 rounded-full hover:bg-[#00a86b] transition duration-200"
                                >
                                    <FaBagShopping fontSize={20} />
                                </button>

                            </motion.div>
                        );
                    })}
                </div>

                {/* ================= Modal Section ================= */}
                <AnimatePresence>
                    {selectedProduct && (
                        <motion.div
                            className="fixed inset-0 flex justify-center items-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Background Overlay */}
                            <motion.div
                                className="absolute inset-0 backdrop-blur-sm brightness-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            {/* Modal Box */}
                            <motion.div
                                className="relative bg-white rounded-lg shadow-lg p-6 w-full md:w-[700px] z-10"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
                                >
                                    <IoClose />
                                </button>

                                {/* Modal Product Info */}
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.title}
                                    className="w-48 h-48 object-contain mx-auto mb-4"
                                />

                                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                    {selectedProduct.title}
                                </h3>

                                <p className="text-center text-cyan-600 font-bold text-lg mb-2">
                                    ৳{selectedProduct.discountPrice}
                                </p>

                                <p className="text-center text-gray-600 mb-4">
                                    {selectedProduct.description ||
                                        "No detailed description available."}
                                </p>

                                {/* Add to Cart Button in Modal */}
                                <button
                                    onClick={() => {
                                        handleAddToCart(selectedProduct);
                                        setSelectedProduct(null);
                                    }}
                                    className="bg-[#00bc7d] text-white w-full py-2 rounded-md hover:bg-[#009e68] transition duration-200"
                                >
                                    Add to Cart
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Discount;
