import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/my_img/My_pic.png"

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const user = {
        name: "MD Sharia",
        email: "sharia@example.com",
        phone: "+880 123456789",
        membership: "Premium",
        profilePicture: "https://i.pravatar.cc/150?img=12"
    };

    const orders = [
        { id: 1, product: "Product A", date: "2025-11-20", status: "Delivered", price: "$25" },
        { id: 2, product: "Product B", date: "2025-11-22", status: "Processing", price: "$40" },
    ];

    const addresses = [
        { id: 1, label: "Home", details: "Dhaka, Bangladesh" },
        { id: 2, label: "Office", details: "Chittagong, Bangladesh" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-10 mt-44">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

                {/* Sidebar */}
                <div className="md:w-1/4 bg-white rounded-2xl shadow-lg p-5 space-y-4">
                    <div className="flex flex-col items-center space-y-3">
                        <img src={img} alt="Profile" className="w-24 h-24 rounded-full shadow-md" />
                        <h2 className="font-bold text-xl">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.membership} Member</p>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-5 flex flex-col space-y-2">
                        {[
                            { id: "profile", label: "Profile" },
                            { id: "orders", label: "Orders" },
                            { id: "settings", label: "Settings" },
                            { id: "payment", label: "Payment Methods" },
                            { id: "addresses", label: "Addresses" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left px-4 py-2 rounded-lg hover:bg-green-100 transition-all ${activeTab === tab.id ? "bg-green-200 font-semibold" : "text-gray-700"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <Link to="/login"><button className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-red-600 font-semibold mt-3">
                            Logout
                        </button></Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4 bg-white rounded-2xl shadow-lg p-6">
                    {activeTab === "profile" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Profile Info</h2>
                            <div className="space-y-2">
                                <p><span className="font-semibold">Name:</span> {user.name}</p>
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "orders" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
                            <div className="space-y-3">
                                {orders.map(order => (
                                    <div key={order.id} className="p-4 bg-gray-50 rounded-xl shadow-sm flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{order.product}</p>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"} font-semibold`}>{order.status}</p>
                                            <p className="text-gray-700">{order.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "settings" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                            <p className="text-gray-600">Here you can change password, email preferences, privacy settings, etc.</p>
                        </div>
                    )}

                    {activeTab === "payment" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
                            <p className="text-gray-600">Saved credit/debit cards, Paypal, etc.</p>
                        </div>
                    )}

                    {activeTab === "addresses" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">My Addresses</h2>
                            <div className="space-y-3">
                                {addresses.map(addr => (
                                    <div key={addr.id} className="p-4 bg-gray-50 rounded-xl shadow-sm flex justify-between">
                                        <p className="font-semibold">{addr.label}</p>
                                        <p className="text-gray-500">{addr.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
