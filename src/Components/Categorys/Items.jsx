import { TiArrowLeft } from "react-icons/ti";
import { useOutletContext } from "react-router-dom";


const Items = ({ selectedSub, onBack , }) => {
    const {handleAddToCart} = useOutletContext();
    return (
        <div className="container mx-auto px-6 py-8">
            <button
                onClick={onBack}
                className="flex items-center gap-1 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-200 mb-6"
            >
                <TiArrowLeft size={20} /> Back
            </button>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {selectedSub.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                {selectedSub.items.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 bg-white w-72"
                    >
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
        </div>
    );
};

export default Items;
