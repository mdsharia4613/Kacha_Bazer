import bammer from '../../assets/about/banner.jpg';


const Policy = () => {
    return (
        <div className='container mx-auto px-10'>
            <div className="relative  mt-50 ">
                <img
                    src={bammer}
                    alt="About Banner"
                    className="w-full h-[300px] object-cover brightness-100"
                />
                <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10 text-gray-800">
                    Privacy Policy
                </h2>
            </div>
            <div>
                <h2 className='text-xl font-bold mt-5 mb-3'>Last updated: February 15, 2022</h2>
                <p className='text-sm text-gray-600 leading-6'>
                    At KachaBazar, accessible from kachabazar dot com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by KachaBazar and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
                <p className='text-gray-700 mt-5 leading-6 text-sm mb-5'>
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in KachaBazar.we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
                </p>

               <div className='space-y-2 mb-5'>
                    <h2 className='text-xl font-bold'>Consent</h2>
                    <p className='text-sm text-gray-700'>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
               </div>

               <div className='mb-5 space-y-2'>
                    <h2 className='text-xl font-bold '>Information we collect</h2>
                    <p className='text-sm text-gray-700 leading-6'>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </p>
                    <p className='text-sm text-gray-700 mt-3 leading-6'>
                        Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the same to
                    </p>
               </div>
               <div className='space-y-2'>
                    <h2 className='text-xl font-bold'>
                        How we use your information
                    </h2>
                    <p className='text-sm text-gray-700 leading-6'>
                        We use the information we collect in various ways, including to:
                    </p>
                    <p className='text-sm text-gray-700 leading-6 mb-5'>
                        1. Provide, operate, and maintain our website, to provide you with updates and other information. <br />
                        2. Improve, personalize, and expand our website,and other information relating to the website. <br />
                        3. Understand and analyze how you use our website, to provide you with updates and other information relating to the website. <br />
                        4. Develop new products, services, features, and functionality,and other information relating to the website. <br />
                        5. Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates. <br />
                        6. Send you emails. To provide you with updates and other information relating to the website, and for marketing and promotional purposes. <br />
                        7. Find and prevent fraud. To provide you with updates and other information relating to the website, and for marketing and promotional purposes
                    </p>
               </div>
            </div>
        </div>
    );
};

export default Policy;