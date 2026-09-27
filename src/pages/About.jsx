import { useEffect } from "react";
import { aboutParagraph, profile, skills } from "../data/siteContent.js";

export default function About() {
  useEffect(() => {
    document.title = "About Me | Jude Anandaraj";
  }, []);

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">About me</p>
        <h1>{profile.legalName}</h1>
      </header>

      <div className="about-layout">
        <figure className="portrait">
          <img src="/portrait.svg" alt="Portrait of Jude Anandaraj" />
          <figcaption>{profile.legalName}</figcaption>
        </figure>
        <div>
          <p className="lede">{aboutParagraph}</p>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="hero-actions">
            <a className="button" href={profile.resumePath} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
            <a
              className="button button-ghost"
              href={profile.livePortfolio}
              target="_blank"
              rel="noreferrer"
            >
              Live portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
