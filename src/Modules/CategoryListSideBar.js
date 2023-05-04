
import { memo } from "react";
import Category from "./Category";


function CategoryListSideBar({ categories }) {

    return (
        <div className="row">
            {
                categories.map((category) => (
                    <Category key={category.id} {...category} />
                ))
            }
        </div>
    )
}
export default memo(CategoryListSideBar);