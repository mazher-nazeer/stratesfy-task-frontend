import "./carousel.scss";
import cat1 from '../../../assets/cat-1.jpg'
import cat2 from '../../../assets/cat-2.jpg'
import cat3 from '../../../assets/cat-3.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Banner = () => {
    const images = [
        
        {
            original: cat1,
            thumbnail: cat1,
        },
        {
            original: cat2,
            thumbnail: cat2,
        },
        {
            original: cat3,
            thumbnail: cat3,
        },

    ];
    return (

        <section className="aside-menu-wrapper">
            <div className="container menu-container">

                <aside>
                    <h3>BROWSE CATEGORIES</h3>
                    <ul>
                        <li>Furniture </li>
                        <li>Cooking</li>
                        <li>Fashion</li>
                        <li>Cloth</li>
                        <li>Furniture </li>
                        <li>Cooking</li>
                        <li>Fashion</li>
                        <li>Cloth</li>
                        <li>Furniture </li>
                        <li>Cooking</li>
                    </ul>
                </aside>
                <div className="content">
                    <ImageGallery
                        items={images}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        originalClass="originalTestClass"
                        thumbnailClass="thumbnailClass"
                    />
                </div>
            </div>
        </section>
    )
};

export default Banner;
