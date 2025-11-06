import { useOutletContext } from 'react-router-dom';
import productData from '../../../public/category_data.json';
import { useState } from 'react';
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";



const TopRating = () => {
    const { handleAddToCart } = useOutletContext();

    const allItems = productData.flatMap(cat =>
        cat.subcategories.flatMap(sub => sub.items)
    );
    const topRating = allItems.filter(item => item.rating > 4.5);

    const [visibleCount, setVisibleCount] = useState(12);
    console.log('visibleCount', visibleCount);

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
            <div className='mb-10 max-w-2xl container mx-auto  '>
                <h2 className="text-2xl font-semibold text-center mb-8">
                    Popular Products for Daily Shopping
                </h2>
                <p className='text-[16px] text-center text-gray-500'>
                    See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.
                </p>
            </div>

            {/* Product Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {topRating.slice(0, visibleCount).map(item => {

                    const stars = item.rating;
                    const fullStars = Math.floor(stars);
                    const halStar = stars % 1 >= 0.5;
                    return (
                        <div
                            key={item.id}
                            className="border relative border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 bg-white w-72"
                        >
                            <img
                                className="w-full h-44 pt-2 object-contain rounded-lg mb-3"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">
                                {item.name}
                            </h3>

                            <p className="text-lg font-bold text-cyan-600">৳{item.price}</p>
                            <p className="text-gray-500 text-sm">Rating: ⭐{item.rating}</p>

                            <p
                                className={`absolute -top-1 text-xs font-medium mt-1 text-white px-0.5 py-0.5 left-0 rounded-tl-xl rounded-br-xl ${item.stockStatus === 'In Stock'
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                                    }`}
                            >
                                {item.stockStatus}
                            </p>

                            <div className="flex justify-between items-center">
                                <button className="" onClick={() => handleAddToCart(item)} className="mt-4 bg-[#00bc7d] text-white  py-2 px-2 rounded-full hover:bg-[#00a86b] transition duration-200">
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

            {/* Show More / Show Less Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleShowMore}
                    className="bg-[#00bc7d] text-white px-6 py-2 rounded-md font-medium hover:bg-[#009e68] transition duration-200"
                >
                    {visibleCount < topRating.length ? 'Show More' : 'Show Less'}
                </button>
            </div>
        </div>
    );
};

export default TopRating;
