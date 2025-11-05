
import bammer from '../../assets/about/banner.jpg';
const About_Us = () => {
    return (
       <>
            <div className="relative w-full">
                <img
                    src={bammer}
                    alt="About Banner"
                    className="w-full h-[300px] object-cover brightness-90"
                />
                <h2 className="absolute inset-0 flex items-center justify-center  text-4xl md:text-5xl font-bold z-10">
                    About Us
                </h2>
            </div>
        <div className="container mx-auto my-10 p-5">
            
        </div>
       </>
    );
};

export default About_Us;