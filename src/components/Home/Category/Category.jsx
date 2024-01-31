import { useNavigate } from 'react-router-dom'
import "./category.scss";
const Category = ({ categories }) => {
    const navigate = useNavigate()
    return (

        <>
            {categories?.data?.map(item => (
                <div key={item.id} className="card my-4" onClick={() => navigate(`/category/${item.id}`)}>

                    <img src={process.env.REACT_APP_DEV_BASE_URL + item.attributes.image.data.attributes.url} alt="Category" />
                    <h1>{item.attributes.title}</h1>                    
                    <p><button>View all {item.attributes.title}</button></p>

                </div>
            )

            )}
        </>

    )
}
export default Category;
