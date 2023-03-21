import { useEffect, useState } from "react";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";
import LIst from "./LIst";
import "./portfolio.scss";
const lists = [
  {
    id: 1,
    li: "Featured",
  },
  {
    id: 2,
    li: "Mobile App",
  },
  {
    id: 3,
    li: "Desing",
  },
  {
    id: 4,
    li: "Branding",
  },
  {
    id: 5,
    li: "Web App",
  },
];
const Portfolio = () => {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Web App":
        setData(webPortfolio);
        break;
      case "Mobile App":
        setData(mobilePortfolio);
        break;
      case "Desing":
        setData(designPortfolio);
        break;
      case "Branding":
        setData(contentPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <div className="text">
          <h1>Portfolio</h1>
        </div>
        <div className="menu">
          <ul>
            {lists.map((list) => (
              <LIst
                li={list.li}
                active={selected === list.li}
                setSelected={setSelected}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img width={200} src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
