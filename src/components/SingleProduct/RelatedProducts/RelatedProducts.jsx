import useFetch from "../../../fetchHook/UseFetch";
import Products from "../../Products/Products";
import './related.scss'

const RelatedProducts = ({ productId, categoryId }) => {
    const { data } = useFetch(`/api/products?populate=*&[filters][id][$ne]=${productId}&[filters][categories][id]=${categoryId}
    &[pagination][start]=0&[pagination][limit]=4`)
    return (

        <div className="related-products container">
            <h2> Related Products</h2>
            <Products products={data} />
        </div>

    )
};

export default RelatedProducts;
