import Product from "./Product/Product";
import "./products.scss";

const Products = ({products, innerPage,  headingText}) => {
    return <>
        {!innerPage && <h2>{headingText}</h2>}
        
            {products?.data?.map((item) =>(   
                
              <Product key={item.id} id={item.id} item={item.attributes} />
             
             ))}
           
    </>
};

export default Products;
