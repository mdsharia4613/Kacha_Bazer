
import { useEffect, useState } from "react";
import productData from "../../../public/category_data.json";
import { useOutletContext, useParams } from "react-router-dom";
import Items from "../Categorys/Items";

const CategoryProducts = () => {
    const {categoryName} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const category = productData.find(cat => cat.category.toLowerCase() === categoryName.toLowerCase());
        if(category){
            const allItems =category.subcategories.flatMap(sub => sub.items);
            setItems(allItems);
        }
    } ,[categoryName])
    const {handleAddToCart} = useOutletContext();
    return (
        <div>
            <h2 className="font-semibold text-2xl">{categoryName}</h2>
            <div>
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">No products found in this category.</p>
                ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                        {items.map(item => (
                            <div key={item.id} className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 bg-white w-72">
                                <img
                                    className="w-full h-52 object-contain rounded-lg mb-3"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                                    {item.name}
                                </h3>

                                <p className="text-lg font-bold text-cyan-600">${item.price}</p>
                                <p
                                    className={`text-sm mt-1 ${item.stockStatus === "In Stock"
                                        ? "text-green-500"
                                        : "text-red-500"
                                        }`}
                                >
                                    {item.stockStatus}
                                </p>

                                <button onClick={() => handleAddToCart(item)} className="mt-4 bg-[#00bc7d] text-white w-full py-2 rounded-md hover:bg-[#00a86b] transition duration-200">
                                    Add to Cart
                                </button>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;
  