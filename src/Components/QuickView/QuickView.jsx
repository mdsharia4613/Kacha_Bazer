import { createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export const ProductContext = createContext();

const QuickViewProvider = ({ children, handleAddToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}

           
        </ProductContext.Provider>
    );
};

export default QuickViewProvider;
