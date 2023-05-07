import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import HeaderButton from "../UI/Buttons/HeaderButton";
import PageBrand from "../UI/Logo/Brand";
import SearchForm from "../UI/SearchForm/SearchForm";
function Header({ isAuthenticated, setIsAuthenticated, onLogout }) {
    return (
        <header class="section-header">
            <section class="header-main">
                <div class="container">
                    <div class="row  align-items-center">
                        <PageBrand />
                        <div class="col align-self-end ">
                            <div class="float-end">

                                {isAuthenticated ? <span>{localStorage.getItem('username')} <button onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('username')
                                    setIsAuthenticated(false);
                                }}>Log out</button></span> : <Link to="/login"> <HeaderButton name="Sign in" logo="fa fa-user"></HeaderButton></Link>}
                                <HeaderButton name="Favorites" logo="fa fa-heart" />
                                <Link to='/cart'> <HeaderButton name="My Cart" logo="fa fa-shopping-cart" /></Link>
                            </div>
                        </div>
                        {/* <SearchForm /> */}
                    </div>
                </div>
            </section>
            <Navbar />
        </header>
    );
}
export default Header;