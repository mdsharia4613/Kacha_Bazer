import { createContext, useState } from 'react';

export const ProductContext = createContext();

const QuickViewProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export default QuickViewProvider;
