import HeaderMain from "../HeaderMain/HeaderMain";
import './Header.css'
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import HeaderButton from "../UI/Buttons/HeaderButton";
import PageBrand from "../UI/Logo/Brand";
import Brand from "../UI/Logo/Brand";
import SearchForm from "../UI/SearchForm/SearchForm";
function Header({ isAuthenticated, setIsAuthenticated, onLogout }) {
    return (
        <header class="section-header">
            <section class="header-main">
                <div class="container">
                    <div class="row gy-3 align-items-center">

                        <Brand />
                        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                            <div class="float-end">

                                {isAuthenticated ? (

                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            <span>{localStorage.getItem('username')}</span>
                                        </button>
                                        <div class="dropdown-content">
                                            <Link to="/userdata">Edit profile</Link>
                                            <a className="text-danger" onClick={() => {
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('username')
                                                setIsAuthenticated(false);
                                            }}>Log out</a>
                                        </div>
                                    </div>


                                ) : <Link to="/login"> <HeaderButton name="Sign in" logo="fa fa-user"></HeaderButton></Link>}

                            </div>
                            <HeaderButton name="Favorites" logo="fa fa-heart" />
                            <Link to='/cart'> <HeaderButton name="My Cart" logo="fa fa-shopping-cart" /></Link>
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