
import bammer from '../../assets/about/banner.jpg';
import img1 from '../../assets/about/img-1.jpeg';
import img2 from '../../assets/about/img-2.jpeg';
import img3 from '../../assets/about/img-3.jpeg';
import img4 from '../../assets/about/img-4.jpg'
import ourTeam from "../../../public/OurTeam.json";
import { iterate } from 'localforage';

const About_Us = () => {
    return (
        <>
            <div className="relative container mx-auto mt-50 px-10">
                <img
                    src={bammer}
                    alt="About Banner"
                    className="w-full h-[300px] object-cover brightness-100"
                />
                <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10 text-gray-800">
                    About Us
                </h2>
            </div>
            <div className="container mx-auto mt-10 p-8">
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>

                    {/* Text Section */}
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h2 className='text-3xl md:text-4xl font-extrabold mb-5 text-gray-800'>
                            Welcome to our KachaBazar Shop
                        </h2>
                        <p className='text-xs md:text-xl text-gray-700 leading-relaxed'>
                            Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
                        </p>
                        <div className='flex flex-col md:flex-row justify-between gap-4 mt-5'>
                            <div className="stats shadow ">
                                <div className="stat space-y-3 bg-gray-200">
                                    <div className="stat-title text-3xl font-extrabold text-stone-600">10K</div>
                                    <div className="text-xl text-black font-semibold">Listed Products</div>
                                    <div className="text-sm">Dynamically morph team driven partnerships after vertical</div>
                                </div>
                            </div>
                            <div className="stats shadow">
                                <div className="stat space-y-3 bg-gray-200">
                                    <div className="stat-title text-3xl font-extrabold text-stone-600">8K</div>
                                    <div className="text-xl text-black font-semibold">Lovely Customers</div>
                                    <div className="text-sm">Competently productize virtual models without performance.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                        <img className='w-full h-64 object-cover rounded-lg shadow-lg' src={img1} alt="About Us" />
                        <img className='row-span-1 md:row-span-2 w-full h-[530px] object-cover rounded-lg shadow-lg' src={img2} alt="About Us" />
                        <img className='w-full h-64 object-cover rounded-lg shadow-lg' src={img3} alt="About Us" />
                    </div>
                </div>
                {/* text Section */}
                <div className='text-base md:text-lg mt-10 text-gray-800'>
                    <p className='leading-9 font-medium'>
                        Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.
                    </p>
                    <p className='leading-9 font-medium mt-6'>
                        Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
                    </p>
                </div>

                <div className='mt-10 mb-10'>
                    <img className='w-full  object-contain rounded-xl ' src={img4} alt="About Us" />
                </div>
            </div>
            <div className='bg-[#f9fafb]'>
                <div className=" text-center  container mx-auto mb-7 py-6">
                    <h2 className="text-3xl font-semibold mb-2">Our Team</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        We’re impartial and independent, and every day we create distinctive, world-class reintermediate backend supply programmes.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-8 justify-center ">
                        {ourTeam.map((team) => (
                            <div key={team.id} className="space-y-2 text-center">
                                <img
                                    className="h-64  object-cover rounded-2xl shadow-md mx-auto"
                                    src={team.img}
                                    alt={team.name}
                                />
                                <h2 className="text-xl font-semibold">{team.name}</h2>
                                <p className="text-gray-500">{team.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
           </div>

        </>
    );
};

export default About_Us;