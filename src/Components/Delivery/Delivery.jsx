import React from 'react';
import delivery from "../../assets/delivary/delivery.png";

const Delivery = () => {
    return (
        <>
            <div className='container mx-auto px-4 md:px-16 mb-10'>
                <div className='bg-[#00bc7d] px-4 md:px-10 py-10 md:py-16 rounded-lg'>
                    <div className='flex flex-col md:flex-row justify-between items-center bg-white px-4 md:px-10 py-8 md:py-10 rounded-lg gap-6'>
                        <div className='w-full md:w-2/3 py-4 space-y-3'>
                            <p className='text-base md:text-lg'>Organic Products and Food</p>
                            <h2 className='text-xl md:text-3xl font-bold'>Quick Delivery to Your Home</h2>
                            <p className='text-xs md:text-sm leading-relaxed'>There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers. See Our latest discounted products from here and get a special discount.</p>
                            <button className='text-xs md:text-sm text-white bg-[#00bc7d] hover:bg-[#009e68] px-8 md:px-14 py-2.5 rounded-full w-full md:w-auto'>Download App</button>
                        </div>
                        <div className='w-full md:w-1/3 flex justify-center'>
                            <img className='max-w-[240px] md:max-w-[300px] w-full h-auto' src={delivery} alt="Delivery" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Delivery;