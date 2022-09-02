import "./App.css";
import Navbar from "./Component/Navbar";
import ImgHead from "./Component/ImgHead";
import MainTop from "./Component/MainPage/MainTop";
import SendBox from "./Component/MainPage/SendBox";
import Deals from "./Component/MainPage/Deals";
function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <ImgHead />
      <MainTop />
      <SendBox/>
      <Deals/>
    </div>
  );
}

export default App;
