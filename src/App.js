import Header from './components/HeaderComponent/Header/Header';
import Footer from './components/FooterComponent/Footer/Footer';
import Main from './components/MainComponent/Main'
import Login from './components/login/login';
import Signup from './components/signup/signup';
import SignInOutContainer from './components/containers';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <SignInOutContainer /> */}
      {/* <Login></Login> */}
      <Header></Header>
      <Main></Main>
      <Footer></Footer> 
    </div>
  );
}
export default App;
