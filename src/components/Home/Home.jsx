import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
import FullBanner from "./FullBanner/FullBanner";
import FullbannerImg from '../../assets/banner-img.png'
const Home = () => {

    const { categories, setCategories, products, setProducts } = useContext(Context)

    useEffect(() => {

        getCategories()
        getProducts()

    }, []);

    const getCategories = () => { 
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
        console.log(res)
        setCategories(res)
    })
}
    const getProducts = () => { 
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res)
            setProducts(res)
        })
    }
    return (
        <main>
            <Carousel />
            <div className="category-panel container">
                <Category categories={categories} />
                
            </div>
            <div className="full-banner-panel">
                <FullBanner  bannerImgSrc={FullbannerImg}/>
            </div>
            <div className="product-panel container">
                <Products products={products}  />
            </div>

        </main>

    )
};

export default Home;
