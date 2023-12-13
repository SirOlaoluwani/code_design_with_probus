import "./App.css";
import { useWindowSize } from "./utils/useWindowResize";

function App() {
  const [width] = useWindowSize();

  const getIFrameWidth = () => {
    if (width <= 380) {
      return width - 30;
    }
    if (width <= 800) {
      return "370";
    }
    return "640";
  };
  return (
    <>
      <div className="container">
        <div className="section side">
          <div className="logo" />
        </div>
        <div className="mobile-header">
          <div className="mobile-header-logo" />
        </div>
        <div className="section content">
          <div className="content">
            <p className="description">
            🚀 Elevate Your Skills with React Training by Probus Technologies in Partnership with <a href="https://ibadantechub.com.ng" target="_blank" rel="noreferrer">Ibadan Tech Hub!</a> 
            </p>
            <p className="description">
            Join us for an immersive and comprehensive React training course designed to equip you with the latest skills and insights into this powerful JavaScript library. Whether you're a beginner or an experienced developer, this course will take your expertise to new heights.
            </p>
            <p className="description">
            📅 <b>Training Starts:</b> January 27th, 2024
            </p>
            <h4>
              <a href="#register">Register Now {">"}</a>
            </h4>
            <h3>Course Details:</h3>
            <ul>
              <li><b>Cost:</b> NGN 120,000</li>
              <li><b>Early Bird Registration (Available until January 7th, 2024):</b> NGN 100,000</li>
              <li><b>Late Registration (After January 7th, 2024):</b> NGN 120,000</li>
            </ul>
            <p className="description"><b>
            Seize the opportunity to register early and save NGN 20,000!</b>
            </p>
            {/* <h3>Who should apply?</h3> */}
            <p className="description">
            This training program is a collaboration between Probus Technologies and Ibadan Tech Hub, bringing you top-notch education and industry insights directly from experts in the field.
            </p>
            <p className="description">
              This training is for beginners, advanced learners are also
              welcome.
            </p>
            <p className="description">
              The training is a fun-filled and practical experience and will
              propel you to want to learn more advanced concepts and become a
              good designer or developer.
            </p>
            <p className="description">
              Register now to secure your spot and advance your React skills. Limited seats available!
            </p>

            <h3 id="register">Register below to get started</h3>
            <p className="description">
              To fully secure your spot after filling the form. Click on the link to pay via <br />flutterwave - <strong><a href="https://flutterwave.com/pay/ibth-react-dev">PAY NOW</a></strong>
            </p>
            <small>Make sure to use the same name and email address added in the form when making payments</small>
            <div>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfuRCUhqy3opJMjopTI0xQpY09JBkXXCMT9DyhCQ8_DkaFlGQ/viewform?embedded=true"
                width={getIFrameWidth()}
                height="995"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                hspace="0"
                vspace="0"
                className="iframe"
                title="Registration Form" 
              >
                Loading…
              </iframe>
            </div>
            

            <p className="description">
              Don't miss out on this chance to expand your knowledge and thrive in the world of React development!
            </p>
            <p className="description">
            For inquiries, contact us at <b>+234 816 0438 614</b>.
            </p>

            <p>Explore a World of Learning Opportunities at <a href="https://ibadantechub.com.ng/" target="_blank" rel="noreferrer">Ibadan Tech Hub!</a> </p>
            <p>Click below to embark on a journey of continuous learning and discover the wealth of knowledge awaiting you. Expand your horizons with our range of expert-led workshops, seminars, and immersive training experiences.</p>
            <b><a href="http://bit.ly/ibth-training" target="_blank" rel="noreferrer">&rarr; Explore More Trainings</a></b>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
