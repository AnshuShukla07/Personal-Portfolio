import React from "react";
import "./styles.css";
import Scene from "./components/Scene.jsx";
import Hud from "./components/Hud.jsx";
import { profile, experience, achievements } from "./data.js";

export default function App() {
  return (
    <div className="container">
      <Scene />
      <Hud text="Drag to orbit • Scroll to explore • Click cards to open" />

      <section className="hero">
        <div style={{ zIndex: 1 }}>
          <h1>Hi, I’m {profile.name}</h1>
          <p className="muted">{profile.role}</p>
          <p>{profile.blurb}</p>

          <div className="cta">
            <a className="btn primary" href={'mailto:${profile.email}'}>
              Contact Me
            </a>
            <a
              className="btn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="grid">
          {experience.map((e, i) => (
            <div key={i} className="card3d">
              <h3>
                {e.role} — {e.company}
              </h3>
              <p className="muted">{e.period}</p>
              <ul>
                {e.points.map((pt, j) => (
                  <li key={j} className="muted">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <ul className="muted">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} {profile.name} • {profile.email} • {profile.phone}
        </div>
      </footer>
    </div>
  );
}