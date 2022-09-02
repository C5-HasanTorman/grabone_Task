import "./App.css";
import Navbar from "./Component/Navbar";
import ImgHead from "./Component/ImgHead";
import MainTop from "./Component/MainPage/MainTop";
import SendBox from "./Component/MainPage/SendBox";
import Deals from "./Component/MainPage/Deals";
import Collections from "./Component/MainPage/Collections";
function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <ImgHead />
      <MainTop />
      <SendBox/>
      <Deals/>
      <Collections/>
    </div>
  );
}

export default App;
