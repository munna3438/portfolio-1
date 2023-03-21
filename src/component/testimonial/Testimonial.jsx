import "./testomonial.scss";

const Testimonial = () => {
  return (
    <div className="testimonial" id="testomonial">
      <h1>Testimonials</h1>
      <div className="card">
        <div className="carditem1">
          <div className="img">
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/right-arrow.png"
              alt=""
            />
            <img
              width={70}
              className="mainimg"
              src="asset/image/Picsart_22-10-06_21-43-39-691.jpg"
              alt=""
            />
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/twitter.png"
              alt=""
            />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              repellendus, excepturi dolores facere unde quia?
            </p>
          </div>
          <div className="identity">
            <h3>M.R.M Munna</h3>
            <span>Secior Developer</span>
          </div>
        </div>
        <div className="carditem2">
          <div className="img">
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/right-arrow.png"
              alt=""
            />
            <img
              width={70}
              className="mainimg"
              src="asset/image/Picsart_22-10-06_21-43-39-691.jpg"
              alt=""
            />
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/youtube.png"
              alt=""
            />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              repellendus, excepturi dolores facere unde quia?
            </p>
          </div>
          <div className="identity">
            <h3>Martin Harold</h3>
            <span>CEO of ALBI</span>
          </div>
        </div>
        <div className="carditem3">
          <div className="img">
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/right-arrow.png"
              alt=""
            />
            <img
              width={70}
              className="mainimg"
              src="asset/image/Picsart_22-10-06_21-43-39-691.jpg"
              alt=""
            />
            <img
              width={30}
              height={30}
              className="sideimg"
              src="asset/image/linkedin.png"
              alt=""
            />
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              repellendus, excepturi dolores facere unde quia?
            </p>
          </div>
          <div className="identity">
            <h3>Alex Kalinski</h3>
            <span>Co-Founder of DELKA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
