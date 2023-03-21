import "./App.scss";
import Contect from "./component/contect/Contect";
import Intro from "./component/intro/Intro";
import Menu from "./component/menu/Menu";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonial from "./component/testimonial/Testimonial";
import Topbar from "./component/topbar/Topbar";
import Work from "./component/work/Work";
function App() {
  return (
    <div className="app">
      <Topbar />
      <Menu />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contect />
      </div>
    </div>
  );
}

export default App;
