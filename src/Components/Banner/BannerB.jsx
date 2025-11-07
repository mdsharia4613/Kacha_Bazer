import React from 'react';

const BannerB = () => {
    return (
       <>
            <div className='container mx-auto  '>
                <div className='  bg-[#ffedd4] flex justify-between items-center px-10 py-7  rounded-2xl ml-8 mr-8'>
                    <div className='space-y-2'>
                        <h2 className='text-xl font-bold text-green-600'>100% Natural Quality Organic Product</h2>
                        <p className='text-gray-400'>See Our latest discounted products from here and get a special discount product</p>
                    </div>
                    <button className='bg-[#00bc7d] hover:bg-[#009e68] text-white px-3 py-2 font-medium rounded-lg'>Shop Now</button>
                </div>
        </div>
       </>
    );
};

export default BannerB;