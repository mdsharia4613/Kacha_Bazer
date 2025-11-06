
import { useEffect, useState } from "react";
import productData from "../../../public/category_data.json";
import { useOutletContext, useParams } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const CategoryProducts = () => {
    const {categoryName} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const category = productData.find(cat =>
            cat.category
                .toLowerCase()
                .replace(/ & /g, '-')
                .replace(/\s+/g, '-') === categoryName.toLowerCase()
        );

        if (category) {
            const allItems = category.subcategories.flatMap(sub => sub.items);
            setItems(allItems);
        } else {
            setItems([]); // যদি কিছু না মেলে
        }
    }, [categoryName]);
    const {handleAddToCart} = useOutletContext();
    return (
        <div className="container mx-auto mt-10">
            <h2 className="font-semibold text-2xl">{categoryName}</h2>
            <div>
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">No products found in this category.</p>
                ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mt-8">
                        {items.map(item => {

                            const stars = item.rating;
                            const fullStars = Math.floor(stars);
                            const halStar = stars % 1 >= 0.5;
                            return (
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

                                    <div className="flex justify-between items-center">
                                        <button  onClick={() => handleAddToCart(item)} className="mt-4 bg-[#00bc7d] text-white  py-2 px-2 rounded-full hover:bg-[#00a86b] transition duration-200">
                                            <FaShoppingBag fontSize="20" />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <div className="flex ">
                                                {Array.from({ length: 5 }, (_, i) => {
                                                    if (i < fullStars) {
                                                        return <FaStar key={i} className="text-yellow-400"></FaStar>
                                                    }
                                                    else if (i === fullStars && halStar) {
                                                        return <FaStarHalf key={i} className="text-yellow-400"></FaStarHalf>
                                                    }
                                                    else {
                                                        return <FaRegStar key={i} className="text-yellow-400"></FaRegStar>
                                                    }

                                                })}
                                            </div>
                                            <span>{item.rating}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;
  