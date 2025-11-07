import React from 'react';
import delivery from "../../assets/delivary/delivery.png";

const Delivery = () => {
    return (
        <>
            <div className='container mx-auto px-16 mb-10'>
                <div className='bg-[#00bc7d] px-10  py-16 rounded-lg'>
                    <div className='flex justify-between items-center bg-white px-10  rounded-lg'>
                        <div className='py-10 space-y-2 w-2xl'>
                            <p className='text-lg'>Organic Products and Food</p>
                            <h2 className='text-2xl font-bold'>Quick Delivery to Your Home</h2>
                            <p className='text-xs'>There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers. See Our latest discounted products from here and get a special discount.</p>
                            <button className='text-xs text-white bg-[#00bc7d] hover:bg-[#009e68] px-14 py-2.5 rounded-full'>Download App</button>
                        </div>
                        <div>
                            <img className='w-50 h-35' src={delivery} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Delivery;