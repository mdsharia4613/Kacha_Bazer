import {  useState } from "react";
import { FaAngleRight } from "react-icons/fa6"; import Items from "./Items";
import { useNavigate } from "react-router-dom";
import UseCategory from "../../Hook/UseCategory";


const Categorys = () => {
    const [selectedSub, setSelectedSub] = useState(null);
    const navigate = useNavigate();
    const categorys = UseCategory();
  
    return (
        <div className="container mx-auto px-10 -py-5 mt-10 mb-10">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>
            <div>
                {!selectedSub ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 );
                    ">
                        {
                            categorys.map((category) => (
                                <div key={category.id} className="border border-gray-200 p-4 rounded-lg shadow space-y-1 flex items-center gap-6 transition-all duration-500 hover:shadow-xl hover:bg-gray-50 ">
                                   <div className="flex justify-center ">
                                        <img className="w-15 h-auto" src={category.categoryImage} alt="" />
                                        
                                   </div>
                                   <div>
                                        <h3 onClick={() => navigate(`/category/${category.category}`)} className="text-xl cursor-pointer font-semibold mb-3">{category.category}</h3>

                                        {/* loop subCategory */}
                                        <ul>
                                            {
                                                category.subcategories.map((sub, index) => (

                                                    <li key={index}
                                                        onClick={() => setSelectedSub(sub)} className="text-gray-500 flex items-center gap-2 cursor-pointer transition-transform duration-200 hover:translate-x-3"><FaAngleRight />{sub.name}</li>
                                                ))
                                            }
                                        </ul>
                                   </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <Items selectedSub={selectedSub} 
                     onBack={() => setSelectedSub(null)}>

                    </Items>
                )}
            </div>
        </div>
    );
};

export default Categorys;