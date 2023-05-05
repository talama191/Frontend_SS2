import { memo, useEffect, useState } from "react";


function Category(props) {
    const [isChecked, setChecked] = useState(false);
    let searchFilter = props.searchFilter;
    function addCategory() {
        if (!isChecked) {
            searchFilter.category_ids.push(props.id);

        } else {
            for (let i = 0; i < searchFilter.category_ids.length; i++) {
                if (searchFilter.category_ids[i] === props.id) {
                    searchFilter.category_ids.splice(i, 1);
                    break;
                }
            }
        }
        setChecked(!isChecked);
    }
    return (
        <label class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" checked={isChecked} onClick={() => {
                addCategory();
                props.setProductPageUpdate();
            }

            } />
            <span class="form-check-label"> {props.name} </span>
        </label>
    )
}
export default memo(Category);