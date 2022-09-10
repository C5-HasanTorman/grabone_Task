import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbarr from "./Component/Navbarr";
import ImgHead from "./Component/ImgHead";
import MainTop from "./Component/MainPage/MainTop";
import SendBox from "./Component/MainPage/SendBox";
import Deals from "./Component/MainPage/Deals";
import Collections from "./Component/MainPage/Collections";
import Escapes from "./Component/MainPage/Escapes";
import Activities from "./Component/MainPage/Activities";
import Store from "./Component/MainPage/Store";
import Restaurants from "./Component/MainPage/Restaurants";
import Beauty from "./Component/MainPage/Beauty";
import House from "./Component/MainPage/House";
import Fitness from "./Component/MainPage/Fitness";
import Automotive from "./Component/MainPage/Automotive";
import Footer from "./Component/Footer";

function App() {
  return (
    <div class="App">
      <Navbarr />
      <ImgHead />
      <MainTop />
      <SendBox />
      <Deals />
      <Collections />
      <Escapes />
      <Activities />
      <Store />
      <Restaurants />
      <Beauty />
      <House />
      <Fitness />
      <Automotive />
      <Footer />
    </div>
  );
}

export default App;
