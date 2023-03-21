import { useState } from "react";
import "./work.scss";

const data = [
  {
    id: "1",
    icon: "asset/image/mobile.png",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autnesciunt tenetur voluptas quasi eaque dolorem officia nemo voluptatum.",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "asset/image/globe.png",
    title: "Mobile Application",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autnesciunt tenetur voluptas quasi eaque dolorem officia nemo voluptatum.",
    img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "asset/image/writing.png",
    title: "Branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autnesciunt tenetur voluptas quasi eaque dolorem officia nemo voluptatum.",
    img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];

const span = [
  {
    id: 1,
    name: "zero",
  },
  {
    id: 2,
    name: "one",
  },
  {
    id: 3,
    name: "tow",
  },
];

/****************************************** */

const Work = () => {
  //arrow logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const handelClick = (way) => {
    if (way === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
      if (currentSlide === 1) {
        setCircle("zero");
      } else if (currentSlide === 2) {
        setCircle("one");
      } else if (currentSlide === 0) {
        setCircle("tow");
      }
    } else if (way === "right") {
      setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
      switch (currentSlide) {
        case 2:
          setCircle("zero");
          break;
        case 0:
          setCircle("one");
          break;
        case 1:
          setCircle("tow");
          break;
        default:
          break;
      }
    }
  };

  //circle logic
  const [circle, setCircle] = useState("one");

  const scircle = (num) => {
    switch (num) {
      case "zero":
        setCurrentSlide(0);
        setCircle("zero");
        break;
      case "one":
        setCurrentSlide(1);
        setCircle("one");
        break;
      case "tow":
        setCurrentSlide(2);
        setCircle("tow");
        break;

      default:
        break;
    }
  };

  /****************************************** */

  return (
    <div className="work" id="work">
      <div className="slidecircle">
        {span.map((item) => (
          <span
            key={item.id}
            onClick={() => scircle(item.name)}
            className={item.name === circle ? "circle" : ""}></span>
        ))}
      </div>
      <div className="slider" style={{ left: `-${currentSlide * 100}vw` }}>
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftimg">
                  <img src={item.icon} alt="" />
                </div>
                <div className="lefttext">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href=" ">project</a>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="asset/image/arrow.png"
        className="leftArrow"
        alt=""
        onClick={() => handelClick("left")}
      />
      <img
        src="asset/image/arrow.png"
        className="rightArrow"
        alt=""
        onClick={() => handelClick("right")}
      />
    </div>
  );
};

export default Work;
