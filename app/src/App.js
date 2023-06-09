import logo from './logo.svg';
import './App.css';
import img from "./img.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 id="m">m</h1>
        <div className="links">
          {/* <h1 id="linkedin">in</h1> 
           <h1 id="github">g</h1> */}
          <i class="devicon-linkedin-plain header-logo"></i>
          <i class="devicon-github-original header-logo"></i>
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
                  <i class="devicon-javascript-plain colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="python tech">
                  <i class="devicon-python-plain colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="react tech">
                  <i class="devicon-react-original colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="git tech">
                  <i class="devicon-git-plain colored"></i> 
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="node tech">
                  <i class="devicon-nodejs-plain colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="express tech">
                  <i class="devicon-express-original"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="mongodb tech">
                  <i class="devicon-mongodb-plain colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                <div className="html tech">
                  <i class="devicon-html5-plain colored"></i>
                  <p id="tech-name">javascript</p>
                </div>           
                  <i class="devicon-css3-plain colored"></i>
                  <p id="tech-name">javascript</p>
                <div className="css tech">
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
