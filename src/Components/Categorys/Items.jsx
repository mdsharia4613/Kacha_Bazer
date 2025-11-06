import { FaShoppingBag } from "react-icons/fa";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { TiArrowLeft } from "react-icons/ti";
import { useOutletContext } from "react-router-dom";


const Items = ({ selectedSub, onBack, }) => {
    const { handleAddToCart } = useOutletContext();
  
    return (
        <div className="container mx-auto px-6 py-5">
            <button
                onClick={onBack}
                className="flex items-center gap-1 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-200 mb-6"
            >
                <TiArrowLeft size={20} /> Back
            </button>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {selectedSub.name}
            </h2>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
                {selectedSub.items.map((item) => {
                    const stars = item.rating;
                    const fullStars = Math.floor(stars);
                    const halStar = stars % 1 >= 0.5;
                    return (
                        <div
                            key={item.id}
                            className="border relative border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 bg-white w-64"
                        >
                            <img
                                className="w-full h-44 pt-2 object-contain rounded-lg mb-3"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">
                                {item.name}
                            </h3>

                            <p className="text-lg font-bold text-cyan-600">${item.price}</p>
                            <p
                                className={`absolute -top-1 text-xs font-medium mt-1 text-white px-0.5 py-0.5 left-0  rounded-tl-xl rounded-br-xl ${item.stockStatus === "In Stock"
                                    ? "bg-green-500"
                                    : "bg-red-500"
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
        </div>
    );
};

export default Items;
