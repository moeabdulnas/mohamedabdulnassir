import logo from './logo.svg';
import './App.css';
import img from "./img.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 id="m">M.A</h1>
        <div className="links">
          <a href="https://www.linkedin.com/in/mohamedabdulnassir/">
            <i class="devicon-linkedin-plain header-icon"></i>
          </a>
          <a href="https://github.com/moeabdulnas">
            <i class="devicon-github-original header-icon"></i>
          </a>
        </div>
      </div>
        <div className="container">
          <div className="containerText">
            <h1 id="greeting">Hello <span id="wave">👋</span></h1>
            <h1 id="name">I'm Mohamed Abdulnassir</h1>
            <h3>Software developer</h3>
            <h5>Linköping, Sweden</h5>

            <div className="techContainer">
              <h1 id="techText">Technologies I mainly use</h1>
              <div className="stack"> 
                <div className="javascript tech">
                  <i class="devicon-javascript-plain colored tech-icon"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="python tech">
                  <i class="devicon-python-plain colored tech-icon"></i>
                  <p id="tech-name">python</p>
                </div>           
                <div className="react tech">
                  <i class="devicon-react-original colored tech-icon"></i>
                  <p id="tech-name">react</p>
                </div>           
                <div className="git tech">
                  <i class="devicon-git-plain colored tech-icon"></i> 
                  <p id="tech-name">git</p>
                </div>           
                <div className="node tech">
                  <i class="devicon-nodejs-plain colored tech-icon"></i>
                  <p id="tech-name">node.js</p>
                </div>           
                <div className="express tech">
                  <i class="devicon-express-original tech-icon"></i>
                  <p id="tech-name">express</p>
                </div>           
                <div className="mongodb tech">
                  <i class="devicon-mongodb-plain colored tech-icon"></i>
                  <p id="tech-name">mongodb</p>
                </div>           
                <div className="html tech">
                  <i class="devicon-html5-plain colored tech-icon"></i>
                  <p id="tech-name">html</p>
                </div>           
                <div className="css tech">
                  <i class="devicon-css3-plain colored tech-icon"></i>
                  <p id="tech-name">css</p>
                </div>           
              </div>
            </div>
          </div>
            <img src={img} alt="profile"></img>
        </div>
        {/*Container ends here */}
        <div id="buttonContainer">
          <button id="button">Get in touch</button>
        </div>
    </div>
  );
}

export default App;
