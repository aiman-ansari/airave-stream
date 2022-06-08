import { Link } from "react-router-dom";
import { useCategory } from "../../Context/CategoryContext";
import { useFilter } from "../../Context/FilterContext";
import "./Category.css";
export const Category = () => {
  const { categories } = useCategory();
  const { dispatch } = useFilter();
  return (
    <div className='category'>
      {categories.map((item) => (
        <Link to='/video'>
          <div
            className='category-item'
            onClick={() => {
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: item.categoryName,
              });
            }}
          >
            <img src={item.image} />
            <div className='category-name'>{item.categoryName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
