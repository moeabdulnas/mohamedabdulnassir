import logo from './logo.svg';
import './App.css';
import img from "./img.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 id="m">m</h1>
        <div className="links">
          <h1>in</h1>
          <h1>g</h1>
        </div>
      </div>

        <div className="container">

          <div className="containerText">
            <h1 id="greeting">Hello <span id="wave">👋</span></h1>
            <h1 id="name">I'm Mohamed Abdulnassir</h1>
            <h3>Software developer</h3>
            <h5>Linköping, Sweden</h5>

            <div className="techContainer">
              <h1 id="techText">Technologies I use</h1>
              <div id="tech">
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
                <h2>🥰</h2>
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
