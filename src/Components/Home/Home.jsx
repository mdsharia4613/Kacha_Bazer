
import Banner from '../Banner/Banner';
import BannerB from '../Banner/BannerB';
import Categorys from '../Categorys/Categorys';
import Delivery from '../Delivery/Delivery';
import Discount from '../Discount/Discount';
import TopInfoBar from '../TopInfoBar/TopInfoBar';
import TopRating from '../TopRating/TopRating';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <BannerB></BannerB>
            <Categorys className=""></Categorys>
            <div className='bg-[#f9fafb] py-5'>
                <TopRating></TopRating>
                <Delivery></Delivery>
                <Discount></Discount>
            </div>
            <TopInfoBar></TopInfoBar>
        </div>
    );
};

export default Home;