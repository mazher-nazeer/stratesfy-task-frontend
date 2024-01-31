import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg"
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import "./header.scss";


const Header = () => {
    const { cartItems } = useContext(Context)
    const navigate = useNavigate()
    const [stickyHeader, setStickyHeader] = useState(false)
    const [showcart, setShowCart] = useState(false)

    const checkShowCartstatus = () => {
        setShowCart(true)
        document.body.style.overflow = "hidden";
    }
    const handleScroll = () => {

        const offset = window.scrollY;
        if (offset > 100) {
            setStickyHeader(true)
        }

        else {
            setStickyHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    return (
        <>
            <header className={`${stickyHeader ? 'sticky-header' : 'default-header'}`}>
                <div className="header-panel">

                    <div className=" left brand-panel"

                    ><Link to="/">&nabla; WOODMART </Link> </div>

                    <ul className=" navigation ">
                        <li onClick={() => navigate('/')}>Home </li>
                        <li>SHOP </li>
                        <li>BLOG</li>
                        <li>PAGES</li>
                        <li>ELEMENTS</li>
                        <li>BUY</li>
                    </ul>

                    <div className="right nav-panel">
                        <div className="icon-panel">
                            <div className="cart-icon">
                                <CgShoppingCart onClick={() => checkShowCartstatus()} />
                                {cartItems.length > 0 ?
                                    <span>{cartItems.length}</span> : ""}
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            {showcart && <Cart setShowCart={setShowCart} />}

        </>

    );
};

export default Header;
