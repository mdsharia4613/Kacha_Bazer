import { useState } from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import QuickViewProvider from '../Components/QuickView/QuickView'; // path ঠিক করুন


const Root = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems(prevItem => {
            const itemExists = prevItem.find(item => item.id === product.id);
            if(itemExists){
                alert('Item already in cart');
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
        <div>
            <Navber productCount={productCount} cartItems={cartItems} handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleRemove={handleRemove}></Navber>
            <QuickViewProvider>
                <Outlet context={{ handleAddToCart }} />
            </QuickViewProvider>

            <Footer></Footer>
        </div>
    );
};

export default Root;