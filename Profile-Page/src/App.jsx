
import Profilecard from "./components/Profilecard";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <Profilecard>
        <img className="avatar" />

        <h1 className="role">Sara Ehrari</h1>

        <h4 className="bio">React Developer</h4>

        <p className="divider">
          I enjoy turning ideas into clean and interactive interfaces while
          continuously improving my skills through real projects and hands-on
          learning. I’m always excited to learn new technologies and solve
          problems.
        </p>
      </Profilecard>

      <Skills>
        <h1>Skills</h1>
        <p>HTML</p>
        <p>CSS</p>
        <p>BOOTSTRAP</p>
        <p>JAVASCRIPT</p>
        <p>REACT</p>
      </Skills>
    </div>
  );
}

export default App;
