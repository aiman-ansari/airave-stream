import { Link } from "react-router-dom";
import { useCategory, useFilter } from "../../Context";
import "./Category.css";
export const Category = () => {
  const { categories } = useCategory();
  const { dispatch } = useFilter();
  return (
    <div className='category'>
      {categories.map((item) => (
        <Link to='/video'>
          <div
            key={item._id}
            className='category-item'
            onClick={() => {
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: item.categoryName,
              });
            }}
          >
            <img src={item.image} alt={item.categoryName} />
            <div className='category-name'>{item.categoryName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
