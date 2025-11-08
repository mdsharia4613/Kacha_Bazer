import { useOutletContext } from 'react-router-dom';
import productData from '../../../public/category_data.json';
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { ProductContext } from '../QuickView/QuickView';
import { IoClose } from 'react-icons/io5';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';
import { TbCurrencyTaka } from 'react-icons/tb';
import img from "../../assets/delivary/line.png"

const TopRating = () => {
    const { handleAddToCart } = useOutletContext();
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

    const allItems = productData.flatMap(cat =>
        cat.subcategories.flatMap(sub => sub.items)
    );
    const topRating = allItems.filter(item => item.rating > 4.5);

    const [visibleCount, setVisibleCount] = useState(12);

    const handleShowMore = () => {
        if (visibleCount < topRating.length) {
            setVisibleCount(prev => prev + 8);
        } else {
            setVisibleCount(12);
        }
    };

    return (
        <div className="container mx-auto px-8 py-10">
            {/* Title */}
            <div className='mb-10 max-w-2xl container mx-auto'>
                <h2 className="text-2xl font-semibold text-center mb-8">
                    Popular Products for Daily Shopping
                </h2>

            </div>

            {/* Product Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {topRating.slice(0, visibleCount).map(item => {
                    const stars = item.rating;
                    const fullStars = Math.floor(stars);
                    const halStar = stars % 1 >= 0.5;

                    return (
                        <motion.div
                            key={item.id}
                            className="relative bg-amber-50 border border-gray-100 hover:border-[#00a86b] rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300  w-72 group overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Product Image */}
                            <div className="relative ">
                                <img
                                    className="w-full h-44 pt-2 object-contain rounded-xl mb-3 bg-gray-100 p-3"
                                    src={item.image}
                                    alt={item.name}
                                />

                                {/* Hover Quick View Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProduct(item);
                                    }}
                                    className="absolute inset-0 flex items-center justify-center gap-2 text-white font-medium text-sm bg-black/60 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                >
                                    <HiOutlineViewfinderCircle className="text-lg" />
                                    <span>Quick View</span>
                                </button>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.name}</h3>
                            <p className="text-lg font-bold text-cyan-600 flex items-center "><TbCurrencyTaka />{item.price}</p>

                            <p
                                className={`absolute -top-1 text-xs font-medium mt-1 text-white px-0.5 py-0.5 left-0 rounded-tl-xl rounded-br-xl ${item.stockStatus === 'In Stock'
                                    ? 'bg-[#00bc7d]'
                                    : 'bg-orange-400'
                                    }`}
                            >
                                {item.stockStatus}
                            </p>

                            {/* Rating & Cart */}
                            <div className="flex justify-between items-center">
                                
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, i) => {
                                            if (i < fullStars) return <FaStar key={i} className="text-yellow-400" />;
                                            else if (i === fullStars && halStar) return <FaStarHalf key={i} className="text-yellow-400" />;
                                            else return <FaRegStar key={i} className="text-yellow-400" />;
                                        })}
                                    </div>
                                    <span>{item.rating}</span>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent modal trigger
                                        handleAddToCart(item);
                                    }}
                                    className="mt-4 bg-[#00bc7d] text-white py-2 px-2 rounded-full hover:bg-[#00a86b] transition duration-200"
                                >
                                    <FaShoppingBag fontSize="20" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-3">
                                <img className="w-full" src={img} alt="" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Show More / Show Less Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleShowMore}
                    className="bg-[#00bc7d] text-white px-6 py-2 rounded-md font-medium hover:bg-[#009e68] transition duration-200"
                >
                    {visibleCount < topRating.length ? 'Show More' : 'Show Less'}
                </button>
            </div>

            {/* Modal (Animated) */}
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
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm brightness-50 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        ></motion.div>

                        {/* Actual Modal Box */}
                        <motion.div
                            className="relative bg-white rounded-lg shadow-lg p-6 w-full md:w-[700px] z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
                            >
                                <IoClose />
                            </button>

                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-48 h-48 object-contain mx-auto mb-4"
                            />

                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                {selectedProduct.name}
                            </h3>
                            <p className="text-center text-cyan-600 font-bold text-lg mb-2">
                                ৳{selectedProduct.price}
                            </p>
                            <p className="text-center text-gray-600 mb-4">
                                {selectedProduct.description || "No detailed description available."}
                            </p>

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
    );
};

export default TopRating;
