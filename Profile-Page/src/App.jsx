import Profilecard from "./components/Profilecard";
import "./App.css"
function App() {
  return (
    <div>
      <Profilecard>
        <img className="avatar" />
        <h1 className="role">Sara Ehrari</h1>
        <h4 className="bio">React Developer</h4>
        <p className="divider">I enjoy turning ideas into clean and interactive interfaces while continuously improving my skills through real projects and hands-on learning. I’m always excited to learn new technologies, solve problems, and build websites that are both beautiful and functional.</p>
      </Profilecard>
    </div>
  );
}

export default App;