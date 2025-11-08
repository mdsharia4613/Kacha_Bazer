import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaShoppingBag, FaRegBell, FaQuestionCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import { BiSolidErrorAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import productData  from '../../../public/category_data.json';

const Navber = ({ productCount, cartItems, handleIncrease, handleDecrease, handleRemove }) => {
    const navLinkStyle = ({ isActive }) => isActive ? 'text-green-500 transition-all duration-500 bg-transparent' : 'hover:text-green-400 transition-all duration-500 hover:bg-transparent'
    const topLinks = (
        <>
            <li><NavLink to="about">About |</NavLink></li>
            <li><NavLink to="contact">Contact Us |</NavLink></li>
            <li><NavLink to="account">My Account</NavLink></li>
            <li className="flex items-center gap-1">
                <User size={14} />
                <NavLink to="login">Login</NavLink>
            </li>
        </>
    );

    const mainLinks = (
        <>
            <li className="dropdown dropdown-hover transition-all ">
                <NavLink to="/" className={navLinkStyle}>Categories < FaAngleDown /></NavLink>
                <ul className="dropdown-content menu bg-base-100 rounded-box w-60 p-2 shadow-lg text-gray-700 space-y-3 ">
                    <li>
                        <NavLink to="category/Fish-Meat" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                                    alt="Fish & Meat"
                                    className="w-5 h-5"
                                />
                                Fish & Meat
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/fruits-vegetables" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/415/415733.png"
                                    alt="Fruits & Vegetables"
                                    className="w-5 h-5"
                                />
                                Fruits & Vegetables
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/cooking-essentials" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3081/3081971.png"
                                    alt="Cooking Essentials"
                                    className="w-5 h-5"
                                />
                                Cooking Essentials
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/biscuits-cakes" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                                    alt="Biscuits & Cakes"
                                    className="w-5 h-5"
                                />
                                Biscuits & Cakes
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/household-tools" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3074/3074903.png"
                                    alt="Household Tools"
                                    className="w-5 h-5"
                                />
                                Household Tools
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/pet-care" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                                    alt="Pet Care"
                                    className="w-5 h-5"
                                />
                                Pet Care
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/beauty-health" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3771/3771417.png"
                                    alt="Beauty & Health"
                                    className="w-5 h-5"
                                />
                                Beauty & Health
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/jam-jelly" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/937/937944.png"
                                    alt="Jam & Jelly"
                                    className="w-5 h-5"
                                />
                                Jam & Jelly
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/milk-dairy" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3075/3075973.png"
                                    alt="Milk & Dairy"
                                    className="w-5 h-5"
                                />
                                Milk & Dairy
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/drinks" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/937/937909.png"
                                    alt="Drinks"
                                    className="w-5 h-5"
                                />
                                Drinks
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="category/breakfast" className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1046/1046786.png"
                                    alt="Breakfast"
                                    className="w-5 h-5"
                                />
                                Breakfast
                            </div>
                            <FaChevronRight className="text-gray-400 text-sm" />
                        </NavLink>
                    </li>
                </ul>

            </li>
            <li><NavLink to="/about" className={navLinkStyle}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink></li>
            <li className="dropdown dropdown-hover transition-all ">
                <NavLink to="/pages" className={navLinkStyle}>Pages < FaAngleDown /></NavLink>
                <ul className="dropdown-content menu bg-base-100 rounded-box w-60 p-2 shadow-lg text-gray-700 space-y-3 ">
                    <li>
                        <NavLink className='flex items-center text-[16px]'>

                            <BiSolidOffer />
                            <p>Offers</p>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-centertext-[16px]'>
                            <IoBagCheckOutline />
                            <p>Checkout</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center text-[16px]'>
                            <FaQuestionCircle />
                            <p>FAQ</p>
                        </NavLink>
                    </li>
                    <li>
                         <NavLink className='flex items-center text-[16px]'>
                            <User />
                            <p>About Us</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center text-[16px]'>
                            < MdOutlineWifiCalling3 />
                            <p>Contact Us</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center text-[16px]'>
                            < MdPrivacyTip />
                            <p>Privacy Polocy</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center text-[16px]'>
                            < FaFile />
                            <p>Terms & Condition</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center text-[16px]'>
                            < BiSolidErrorAlt />
                            <p>404</p>
                        </NavLink>
                    </li>

                </ul>
            </li>
            <li className="relative">
                <NavLink
                    to="/offers"
                    className={() =>
                        `relative inline-block px-5 py-1 rounded-lg font-semibold transition-all duration-300 bg-[#ffe2e2] text-rose-500 hover:text-green-500`
                    }
                >
                    Offers
                    {/* জ্বলন্ত বৃত্ত */}
                    <span className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </NavLink>
            </li>

        </>
    );

    const rightSide = (
        <>
            <li className="dropdown dropdown-hover transition-all ">
                <NavLink><span>🌐 GB</span> English</NavLink>
                <ul className="dropdown-content menu bg-base-100 rounded-box w-48 p-2 shadow-lg text-gray-700 space-y-3 ">
                    <li><NavLink>Hindi</NavLink></li>
                    <li><NavLink>Bangla</NavLink></li>
                </ul>
                </li>
            <li><NavLink to="/policy">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
        </>
    );

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        if(value.trim() === '') {
            setSearchResults([]);
            return;
        } 
        const allitems = productData.flatMap(cat => cat.subcategories.flatMap(sub => sub.items));
        const filtered = allitems.filter(item => item.name.toLowerCase().includes(value));
        setSearchResults(filtered);
    }


    const [showcart, setShowCart] = useState(false);
    return (
        <>
           <div className="fixed top-0 w-full z-50 bg-white">
                {/* 🔹 Top Info Bar */}
                <div className="bg-[#f3f4f6] hidden md:block">
                    <div className="container mx-auto  flex justify-between items-center text-xs text-gray-500 py-2 px-10 font-medium">
                        <p className="flex items-center gap-2">
                            <MdOutlineWifiCalling3 />
                            We are available 24/7, Need help?
                            <span className="text-green-500 font-semibold">+012345697</span>
                        </p>
                        <ul className="flex items-center gap-5">{topLinks}</ul>
                    </div>
                </div>

                {/* 🔹 Main Navbar */}
                <div className="bg-[#00bc7d]">
                    <div className="container mx-auto py-3 px-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">

                        {/* Logo */}
                        <Link to='/' className="cursor-pointer flex items-center justify-center md:justify-start">
                            <p className="flex items-center gap-3 font-bold text-2xl text-white">
                                <FaShoppingBag fontSize={30} />
                                <span className="leading-tight">
                                    KACHA <br /> BAZAR
                                    </span>
                                </p>
                        
                        </Link>

                        {/* Search Bar */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="flex items-center justify-between bg-white rounded-lg py-2.5 px-4 shadow-sm">
                                <input
                                    onChange={handleSearch} value={searchTerm}
                                    type="search"
                                    placeholder="Search for product (e.g. shirt, pant)"
                                    className="w-full bg-transparent px-2 outline-none border-none text-sm md:text-base"
                                />
                                <IoSearchOutline className="text-gray-400 text-lg md:text-xl" />
                            </div>
                            {/* search dropdown */}
                            {searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-1 z-50">
                                    {searchResults.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                navigate(`/product/${item.id}`);
                                                setSearchResults([]);
                                                setSearchTerm("");
                                            }}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-10 h-10 object-contain rounded"
                                            />
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-700">{item.name}</h4>
                                                <p className="text-xs text-gray-500">${item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Side Icons */}
                        <div className="hidden md:flex items-center gap-6 text-2xl text-white">
                            <div className="relative">
                                <HiMiniShoppingCart onClick={() => setShowCart(!showcart)} className="cursor-pointer hover:text-yellow-300 transition" />
                                {productCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{productCount}</span>
                                )}
                                {showcart && (
                                    <div className="absolute bg-white  -right-[136px] text-black top-8  p-3 rounded-lg shadow-lg z-50 w-72">
                                        {cartItems.length === 0 ? (
                                            <p className="text-center py-3">Your Cart is Empty</p>
                                        ) : (
                                            <>
                                                <h3 className=" font-semibold border-b pb-2 mb-4">Shopping Cart</h3>

                                                <ul className="">
                                                    {cartItems.map((item, index) => (
                                                        <li key={index} item={item} className="bg-gray-100  mb-3 flex items-center rounded gap-5 p-3">
                                                            <img className="w-10 h-12 object-contain rounded" src={item.image} alt="" />
                                                            <div className="text-sm flex-1 space-y-1.5">
                                                                <h3 className=" font-semibold">{item.name}</h3>
                                                                <p className="text-gray-600">
                                                                    ৳{item.price} * {item.quantity} = {" "}
                                                                    <span className="font-semibold text-black">৳{item.price * item.quantity}</span>
                                                                </p>
                                                                <div className="flex gap-3">
                                                                    <button className="bg-gray-300 rounded px-2" onClick={() => handleIncrease(item)}>+</button>
                                                                    <span>{item.quantity}</span>
                                                                    <button className="bg-gray-300 rounded px-2" onClick={() => handleDecrease(item)}>-</button>
                                                                </div>

                                                            </div>
                                                            <button className="text-red-500 hover:text-red-700 ml-auto" onClick={() => { handleRemove(item); setShowCart(false); }}> <TiDelete fontSize={20} /></button>

                                                        </li>
                                                    ))}
                                                </ul>
                                                    <div className="border-t pt-2 mt-2 flex justify-between text-sm font-semibold">
                                                        <span>Total:</span>
                                                        <span>
                                                            ৳{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                                        </span>
                                                    </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                            <FaRegBell className="cursor-pointer hover:text-yellow-300 transition" />
                            <User className="cursor-pointer hover:text-yellow-300 transition" />
                        </div>
                    </div>
                </div>

                {/* 🔹 Bottom Navigation (DaisyUI) */}
                <div className="shadow-sm ">
                    <div className="navbar px-6 container mx-auto">
                        <div className="navbar-start">
                            {/* Mobile Dropdown */}
                            <div className="dropdown">
                                <div tabIndex={0} role="" className=" lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                                <ul tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                                    {mainLinks}
                                </ul>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex">
                                <ul className="menu menu-horizontal px-1 font-medium text-gray-700 ">
                                    {mainLinks}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side (Bottom Bar) */}
                        <div className="navbar-end">
                            <ul className="flex items-center gap-6 text-sm text-gray-700 font-medium pr-3">
                                {rightSide}
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default Navber;
