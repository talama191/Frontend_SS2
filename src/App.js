import Header from './components/HeaderComponent/Header/Header';
import Footer from './components/FooterComponent/Footer/Footer';
import Main from './components/MainComponent/Main'
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Header></Header>

      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
export default App;
