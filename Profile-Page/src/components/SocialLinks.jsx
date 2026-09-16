  

export default function SocialLinks({ linkedin, github, x }) {
  return (
    <section className="social-card">
      <h2>Connect With Me</h2>

      <div className="social-links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={x} target="_blank" rel="noopener noreferrer">
          X
        </a>
      </div>
    </section>
  );
}

