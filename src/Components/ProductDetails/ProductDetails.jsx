import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import productData from "../../../public/category_data.json";

const ProductDetails = () => {
    const {id} = useParams();
    const {handleAddToCart} = useOutletContext();
    const allitems = productData.flatMap(cat => cat.subcategories.flatMap(sub => sub.items));

    const product = allitems.find(item => item.id.toString() === id);
    if(!product){
       return <p className='text-center'>Product not found</p>
    }

    return (
        <div className='container mx-auto py-8 px-6'>
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-72 h-72 object-contain mx-auto"
                />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                    <p className="text-xl text-cyan-600 font-bold mb-4">${product.price}</p>
                    <p className="text-gray-600">{product.description}</p>
                    <button onClick={() => handleAddToCart(product)} className="mt-4 bg-[#00bc7d] text-white w-full py-2 rounded-md hover:bg-[#00a86b] transition duration-200">
                        Add to Cart
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetails;