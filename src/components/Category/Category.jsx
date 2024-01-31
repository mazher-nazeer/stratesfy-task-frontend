import { useParams } from "react-router-dom";
import "./category.scss";
import Products from "../Products/Products";
import useFetch from "../../fetchHook/UseFetch";
const Category = () => {
  const {id} = useParams();

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  console.log(data?.data)
  
  return (

       <div className="container">
         <h2>{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title} </h2>
         <div className="product-inner-detail">
       
       <Products  innerPage={true} products={data}/>

       </div>
       </div> 

   
    )
};

export default Category;
