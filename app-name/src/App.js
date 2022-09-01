import "./App.css";
import Navbar from "./Component/Navbar";
import ImgHead from "./Component/ImgHead";
import MainTop from "./Component/MainPage/MainTop";
import SendBox from "./Component/MainPage/SendBox";
function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <ImgHead />
      <MainTop />
      <SendBox/>
    </div>
  );
}

export default App;
