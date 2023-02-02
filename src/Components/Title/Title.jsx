import "./Title.css";
import aqua from '../Assets/Images/aqua.jpg'

const Title = () => {
  return (
    <div className="title">
      <div className="container">
        <div className="title-box">
          <div className="title-text">
            <h1>Hi, I am Nazar, Python Developer</h1>
            <p>
              Every day I was surprised. What is the best way to record vocals?
              After years of trying and failing, I realized that I needed the
              money to build a two-story recording studio. You will ask why I am
              programming, and I will answer - "you don't need to be fucked"
            </p>
          </div>
          <img src={aqua} alt="aqua" />
        </div>
      </div>
    </div>
  );
};

export default Title;
