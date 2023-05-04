import { memo } from "react";


function Category(props) {
    return (
        <label class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="" />
            <span class="form-check-label"> {props.name} </span>
        </label>
    )
}
export default memo(Category);