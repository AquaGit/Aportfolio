import "./Works.css";
import imagestore from "../Assets/Images/iphone-store.png";

const Works = () => {
  return (
    <div className="works">
      <div className="container">
        <div className="works-box">
          <div className="works-title">
            <h1>Featured works</h1>
          </div>

          <div className="works-item">
            <div className="works-image">
              <img src={imagestore} alt="imagestore" />
            </div>
            <div className="works-text">
              <h1>Mega site</h1>
              <h3>2022</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="works-item">
            <div className="works-image">
              <img src={imagestore} alt="imagestore" />
            </div>
            <div className="works-text">
              <h1>Mega site</h1>
              <h3>2022</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          <div className="works-item">
            <div className="works-image">
              <img src={imagestore} alt="imagestore" />
            </div>
            <div className="works-text">
              <h1>Mega site</h1>
              <h3>2022</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Works;
