import { useState } from 'react';
import Navber from '../Components/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';


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
    }
    const productCount = cartItems.length;
    
    return (
        <div>
            <Navber productCount={productCount} cartItems={cartItems}></Navber>
            <Outlet context={{handleAddToCart}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;