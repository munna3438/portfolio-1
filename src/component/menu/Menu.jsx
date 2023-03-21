import "./menu.scss";

const Menu = (props) => {
  return (
    <div className={`menue ${props.handelManue}`}>
      <nav>
        <ul>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#testomonial">testomonial</a>
          </li>
          <li>
            <a href="#contect">contect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
