import { createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export const ProductContext = createContext();

const QuickViewProvider = ({ children, handleAddToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <motion.div
                            className="relative bg-white rounded-lg shadow-lg p-6 w-full md:w-[700px] z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
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
                            </button>                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ProductContext.Provider>
    );
};

export default QuickViewProvider;
