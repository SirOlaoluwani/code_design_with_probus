import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="section side">
        <div className="logo" />
      </div>
      <div className="section content">
        <div className="mobile-header" />
        <div className="content">
          <p className="description">
            Code + Design with Probus is designed to provide participants with
            the basic skillsets needed to get started in tech.
          </p>
          <p className="description">
            Our mission is simple: to make opportunity for as many Nigerians as
            possible by training and empowering them with design and coding
            skills. The trainings are done online and are 100% free.
          </p>
          <p className="description">
            Code + Design with Probus is an initiative of{" "}
            <a
              href="https://www.probusinnovations.com"
              target="_blank"
              rel="noreferrer"
            >
              Probus Technologies
            </a>
            .
          </p>
          <h4>
            <a href="#register">Register Now {">"}</a>
          </h4>
          <h3>Who should apply?</h3>
          <p className="description">
            Anybody with a keen interest in starting a career in tech.
          </p>
          <p className="description">
            This training is for beginners, advanced learners are also welcome.
          </p>
          <p className="description">
            The training is a fun-filled and practical experience and will
            propel you to want to learn more advanced concepts and become a good
            designer or developer.
          </p>
          <h3>Course available in the training</h3>
          <ul>
            <li>Website Design</li>
            <li>Laravel</li>
            <li>Flutter</li>
            <li>React Native</li>
            <li>UI/UX</li>
            <li>Graphic Design</li>
          </ul>

          <h3>Register below to get started</h3>
          <div id="register">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfbuNSGpaRTpkLwSWF7n8I0cjTg8bC6SEy1AS6VD2Q3bu6RKQ/viewform?embedded=true"
              width="640"
              height="995"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              hspace="0"
              vspace="0"
              className="iframe"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
