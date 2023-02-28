import HeaderButton from "../UI/Buttons/HeaderButton";
import Brand from "../UI/Logo/Brand";
import SearchForm from "../UI/SearchForm/SearchForm";
function HeaderMain() {
    return (
        <section class="header-main">
            <div class="container">
                <div class="row gy-3 align-items-center">
                    <Brand />
                    <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                        <div class="float-end">
                            <HeaderButton name="Sign in" logo="fa fa-user" />
                            <HeaderButton name="Favorites" logo="fa fa-heart" />
                            <HeaderButton name="My Cart" logo="fa fa-shopping-cart" />
                        </div>
                    </div>
                    <SearchForm />
                </div>
            </div>
        </section>
    );
}
export default HeaderMain;