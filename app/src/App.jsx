import logo from './logo.svg';
import './App.css';
import img from "./img.png";
import { useState } from 'react';
import Contact from './Contact';

function App() {
  const [contact, setContact] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <h1 onClick={() => {
          window.location.reload(false);
        }} id="m">M.A</h1>
        <div className="links">
          <a href="https://www.linkedin.com/in/mohamedabdulnassir/" target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain header-icon"></i>
          </a>
          <a href="https://github.com/moeabdulnas" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-original header-icon"></i>
          </a>
        </div>
      </div>
      {contact ? <Contact setContact={setContact}/>: <><div className="container">
        <div className="about">
          <div className="aboutText">
            <h1 id="greeting">Hello <span id="wave">👋</span></h1>
            <h1 id="myName">I'm Mohamed Abdulnassir</h1>
            <h3>Software developer</h3>
            <h5>Linköping, Sweden</h5>
          </div>
          <div className="imageContainer">
            <img src={img} alt="profile"></img>
          </div>
        </div>

        <div className="techContainer">
          <h1 id="techText">Technologies I mainly use</h1>
          <div className="stack">
            <div className="javascript tech">
              <i className="devicon-javascript-plain colored tech-icon"></i>
              <p id="tech-name">javascript</p>
            </div>
            <div className="python tech">
              <i className="devicon-python-plain colored tech-icon"></i>
              <p id="tech-name">python</p>
            </div>
            <div className="react tech">
              <i className="devicon-react-original colored tech-icon"></i>
              <p id="tech-name">react</p>
            </div>
            <div className="git tech">
              <i className="devicon-git-plain colored tech-icon"></i>
              <p id="tech-name">git</p>
            </div>
            <div className="node tech">
              <i className="devicon-nodejs-plain colored tech-icon"></i>
              <p id="tech-name">node.js</p>
            </div>
            <div className="express tech">
              <i className="devicon-express-original tech-icon"></i>
              <p id="tech-name">express</p>
            </div>
            <div className="mongodb tech">
              <i className="devicon-mongodb-plain colored tech-icon"></i>
              <p id="tech-name">mongodb</p>
            </div>
            <div className="html tech">
              <i className="devicon-html5-plain colored tech-icon"></i>
              <p id="tech-name">html</p>
            </div>
            <div className="css tech">
              <i className="devicon-css3-plain colored tech-icon"></i>
              <p id="tech-name">css</p>
            </div>
          </div>
        </div>
      </div><div id="buttonContainer">
          <button id="button" onClick={() => setContact(true)}>Get in touch</button>
        </div></>
      }
    </div>
  );
}

export default App;
