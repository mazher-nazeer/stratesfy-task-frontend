import "./cart.scss";
import { MdClose } from "react-icons/md"
import CartItem from "./CartItem/CartItem"
import {  useContext } from "react";
import { Context } from "../../utils/Context";

const Cart = ({ setShowCart }) => {
    const handleClose = () => {
        setShowCart(false)
        document.body.style.overflow = "auto";
    }
    const { cartItems, subTotal } = useContext(Context);


    return (
        <div className={"cart-panel " + (setShowCart ? 'active' : 'inactive')}>
            <div className="overlay"></div>
            <div className="cart-content ">
                <div className="cart-header">
                    <h5>Shopping cart</h5>
                    <span className="close-btn" onClick={() => handleClose()}>
                        close  <MdClose />
                    </span>
                </div>
                <div className="cart-body">
                    {!cartItems.length && <div className="cart-items empty">
                        <h5>oh! Your cart is empty </h5>

                    </div>}
                    {!!cartItems.length && <div className="cart-items has-item">

                        <CartItem />
                    </div>}




                </div>
                <div className="cart-footer">
                    <div className="amt-panel">
                        <h3>Total</h3>
                        <h2>{subTotal === 0 ? ":(" : subTotal}</h2>
                    </div>
                    <button className="checkout-cta">Checkout</button>
                </div>
            </div>
        </div>
    )

};

export default Cart;
