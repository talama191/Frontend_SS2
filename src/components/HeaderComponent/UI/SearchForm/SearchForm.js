import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { globalSearchFilter } from "../../../../GlobalVariables";

function SearchForm() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const searchFilter = useContext(globalSearchFilter);
    const onKeywordChange = (event) => {
        setKeyword(event.target.value);
    }
    const handleSearch = (event) => {
        // history.push(`/products/1/10/${keyword}`);
        navigate(`/products/1/${searchFilter.perPage}/${keyword}`);
    }
    return (
        <div class="col-lg-5 col-md-12 col-12">
            <div class="input-group">
                <input value={keyword} type="search" class="form-control" style={{ width: "55%" }} placeholder="Search" onChange={onKeywordChange} />
                <button class="btn btn-primary">
                    <NavLink to={`/products/1/${searchFilter.perPage}/${keyword}`}>
                        <i class="fa fa-search" onClick={handleSearch}></i>
                    </NavLink>

                </button>
            </div>
        </div>
    );
}
export default SearchForm;