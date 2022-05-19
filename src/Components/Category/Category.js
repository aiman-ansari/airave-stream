import { useCategory } from '../../Context/CategoryContext'
import './Category.css'
export const Category = () =>{
    const { categories} = useCategory()
    return(
        <div className="category">
            {categories.map((item) => 
            <div className='category-item'>
            <img src={item.image} />
            <div className='category-name'>{item.categoryName}</div>
        </div>
            )}
            
            
           
        </div>
    )
}