

import Profilecard from "./components/Profilecard";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <Profilecard>
        <div className="avatar">SE</div>

        <h1 className="role">Sara Ehrari</h1>

        <h2 className="bio">React Developer</h2>

        <p className="description">
          I enjoy turning ideas into clean and interactive interfaces while
          continuously improving my skills through real projects and
          hands-on learning. I’m always excited to learn new technologies
          and solve problems.
        </p>
      </Profilecard>

      <Skills>
        <h2>Skills</h2>

        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </Skills>

      <SocialLinks
        linkedin="https://www.linkedin.com/in/saraehrari"
        github="https://github.com/saraehrari"
        x="https://x.com/saraehrari"
      />
    </main>
  );
}

export default App;

