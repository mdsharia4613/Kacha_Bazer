import bammer from '../../assets/about/banner.jpg';

const Terms = () => {
    return (
        <div className='container mx-auto'>
            <div className="relative  mt-50 ">
                <img
                    src={bammer}
                    alt="About Banner"
                    className="w-full h-[300px] object-cover brightness-100"
                />
                <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10 text-gray-800">
                    Terms & Condition
                </h2>
            </div>
            <div className='my-5 space-y-3'>
                <h2 className='text-xl font-bold'>
                    Welcome to KachaBazar!
                </h2>
                <p className='text-sm text-gray-700 leading-6'>
                    These terms and conditions outline the rules and regulations for the use of KachaBazar's Website, located at https://kachabazar.com/. By accessing this website we assume you accept these terms and conditions. Do not continue to use KachaBazar if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p className='text-sm text-gray-700 leading-6' >
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: Client, You and Your refers to you, the person log on this website and compliant to the Company’s terms and conditions. The Company, refers to our CompanyPartParties or Us refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
            </div>
            <div className='my-5 space-y-2'>
                <h2 className='font-bold text-xl'>Cookies</h2>
                <p className='text-sm leading-6 text-gray-700 '>
                    We employ the use of cookies. By accessing KachaBazar, you agreed to use cookies in agreement with the KachaBazar's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
            </div>
            <div className='my-5 space-y-2'>
                <h2 className='text-xl font-bold'>Content Liability</h2>
                <p className='text-sm text-gray-700 leading-6'>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
            </div>
        </div>
    );
};

export default Terms;