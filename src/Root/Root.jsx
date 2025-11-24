import { useState } from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import QuickViewProvider from '../Components/QuickView/QuickView'; 
import FooterTop from '../Components/FooterTop/FooterTop';
import Swal from 'sweetalert2';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems(prevItem => {
            const itemExists = prevItem.find(item => item.id === product.id);
            if(itemExists){
                Swal.fire("SweetAlert2 is working!");

                return prevItem;
            }
            return [...prevItem, {...product, quantity: 1}]
        })
    };

    const handleIncrease = (product) => {
        setCartItems(prevItem => 
            prevItem.map(item => item.id === product.id ? {
                ...item, quantity: item.quantity + 1
            } : item)
        )
    };

    const handleDecrease = (product) => {
        setCartItems(prevItem => 
            prevItem.map(item => item.id === product.id ? {
                ...item, quantity: item.quantity - 1
            } : item)
            .filter(item => item.quantity > 0)
        )
    }
    const handleRemove = (product) => {
        setCartItems(prevItem => 
            prevItem.filter(item => item.id !== product.id)
        )
    }

    const productCount = cartItems.length;
    
    return (
        <div className='overflow-hidden'>
            <Navber productCount={productCount} cartItems={cartItems} handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleRemove={handleRemove}></Navber>
            
            <QuickViewProvider handleAddToCart={  handleAddToCart}>
                <Outlet context={{ handleAddToCart }} />
                <Toaster></Toaster>
            </QuickViewProvider>
            <FooterTop></FooterTop>
            <Footer></Footer>
        </div>
    );
};

export default Root;