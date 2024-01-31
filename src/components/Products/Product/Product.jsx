import "./product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({id, item}) => {

    const navigate = useNavigate()
 return (
<div className="card card-detailed-view" onClick={()=> navigate("/product/"+ id)}>
        <img src={process.env.REACT_APP_DEV_BASE_URL + item.image.data[0].attributes.url} alt="Product" />

        <p>{item.desc}</p>
        <br />
        <p className="price">${item.price}</p>
        <br />
        <p><button>View detail</button></p>
    </div>
     
    )
};

export default Product;
