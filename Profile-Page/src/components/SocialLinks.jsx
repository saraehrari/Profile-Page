  
export default function SocialLinks({ linkedin, github, x }) {
  return (
    <nav className="social-links" aria-label="Social links">
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>

      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>

      <a href={x} target="_blank" rel="noopener noreferrer">
        X
      </a>
    </nav>
  );
}

