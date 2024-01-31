import { createContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

export const Context = createContext();

// For accessing data states globally throughout the app......

const AppContext = ({ children }) => {
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [cartItems, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [location])

    useEffect(() => {
        let subTotal = 0
        cartItems.map((item) => subTotal += item.attributes.price * item.attributes.quantity)
        setSubTotal(subTotal)
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems]
        let index = items.findIndex(p => p.id == product.id)

        if(index !== -1){
            items[index].attributes.quantity += quantity
            console.log(cartItems)
        }
        
        else{
            product.attributes.quantity = quantity
            
            items = [...items, product]
            console.log(items)

        }
        setCartItem(items)
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems]
        items = items.filter(p => p.id !== product.id)
        setCartItem(items)
    }
    const handleQuantity = (type, product) => {
        let items = [...cartItems]
        let index = items.findIndex(p => p.id == product.id)
        if(type == "increment"){
            items[index].attributes.quantity += 1
        }
        else if (type == "decrement"){
            if(items[index].attributes.quantity === 1){
          
                return;
            }
                
            items[index].attributes.quantity -= 1
        }
        setCartItem(items)
    }

    return <Context.Provider value={{
        products, setProducts, categories, setCategories, cartItems, setCartItem,
        cartCount, setCartCount, subTotal, setSubTotal,
        handleAddToCart, handleRemoveFromCart, handleQuantity

    }}
    >
        {children}</Context.Provider>
}

export default AppContext