import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../fetchHook/UseFetch";
import { Context } from "../../utils/Context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const { id } = useParams()
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const product = data?.data[0]?.attributes;
    // console.log(product)
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(prevState => prevState + 1)
    }

    const decrement = () => {
        setQuantity(prevState => {
            if (prevState == 1) return 1
            return prevState - 1
        })
    }
    const { handleAddToCart } = useContext(Context)


    return (
        <div className="pd-section container">
            <div className="prod-detail-section">
                <div className="img-panel">
                    <img src={process.env.REACT_APP_DEV_BASE_URL + product?.image?.data[0]?.attributes?.url} alt="test" />

                </div>
                <div className="prod-text-section">
                    <h2>{product?.title}</h2>
                    <p>
                        {product?.desc}
                    </p>
                    <div className="additional-detail">
                        <h5><span> Price: </span>{product?.price}</h5>
                        <h6></h6>
                    </div>
                    <div className="quantity-action">
                        <span onClick={() => increment()} className="control">+</span>
                        &nbsp;
                        <span className="quantity">{quantity}</span>
                        &nbsp;
                        <span onClick={() => decrement()} className="control">-</span>
                        <button onClick={() =>{
                        handleAddToCart(data?.data[0], quantity)
                        setQuantity(1)
                    }} className="add-to-cart-btn"> Add To Cart </button>
                    </div>

                
                </div>

            </div>
            <RelatedProducts productId={id} categoryId={product?.categories?.data[0]?.id} />
        </div>
    )
}

export default SingleProduct;
