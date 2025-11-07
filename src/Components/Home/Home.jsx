
import Banner from '../Banner/Banner';
import BannerB from '../Banner/BannerB';
import Categorys from '../Categorys/Categorys';
import Delivery from '../Delivery/Delivery';
import Discount from '../Discount/Discount';
import TopRating from '../TopRating/TopRating';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <BannerB></BannerB>
            <Categorys></Categorys>
            <TopRating></TopRating>
            <Delivery></Delivery>
            <Discount></Discount>
            
        </div>
    );
};

export default Home;