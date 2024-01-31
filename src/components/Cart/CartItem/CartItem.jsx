import "./cartItem.scss";
import { Context } from "../../../utils/Context";
import { useContext } from "react";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleQuantity } = useContext(Context)
    console.log(cartItems)
    return (

        <div className="cart-item-list">
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <p onClick={() => handleRemoveFromCart(item)} className="item-remove">X</p>
                    <div className="prod-img">
                        <img src={process.env.REACT_APP_DEV_BASE_URL + item?.attributes?.image?.data[0]?.attributes?.url} alt="" />
                    </div>

                    <div className="item-details">
                        <h5>{item.attributes.title}</h5>
                        <div className="quantity-action">
                            <span onClick={() => handleQuantity('increment', item)} className="control">+</span>
                            <span className="quantity">{item.attributes.quantity}</span>
                            <span onClick={() => handleQuantity('decrement', item)} className="control">-</span>
                        </div>

                        <div className="qty-pricing ">
                            <span>{item.attributes.price + "x" + item.attributes.quantity + " = " + item.attributes.price * item.attributes.quantity}</span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
