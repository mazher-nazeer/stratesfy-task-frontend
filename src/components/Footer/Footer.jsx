import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
    return <footer>
        <div className="container">
            <div className="footer-left">

           <Link to="/">&nabla; WOODMART </Link> 
            </div>
            <div className="footer-right">
            <h2>All rights reserved &reg;</h2>

 </div>
        </div>
    </footer>
};

export default Footer;
