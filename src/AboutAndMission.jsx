import React from "react";
import "./AboutAndMission.css";
import about from './assets/about.jpg'; 

export default function AboutAndMission() {
  return (
    <section className="about-mission-section">
      <div className="about-mission-flex">
        <div className="about-mission-text">
          <h2>What Is AskHimalaya?</h2>
          <p>
            Askhimalaya is a local web-based travel assistant built for himalayas. Whether you’re a first-time visitor or a curious local, askhimalaya helps you discover the towns of himalayas like never before — from hidden cafés and peaceful hiking trails to the best taxi routes and homestays. Just send a message, and you’ll get instant, personal recommendations powered by real local knowledge.
          </p>
          <p style={{ color: '#bdbdbd' }}>
            What makes askhimalaya different? It doesn’t just pull information from Google — it’s designed and curated by people who actually live here. Everything is filtered with an insider’s perspective, making sure that what you find is authentic, up-to-date, and worth your time.
          </p>
          <p>
            The goal is simple: to make himalayas easier and more magical to explore. Whether you’re looking for the best place to watch the sunset, the cheapest way to reach Sandakphu, or a romantic dinner spot, askhimalaya has your back — no app, no downloads, just chat.
          </p>
        </div>
        <div className="about-mission-image">
          <img
            src={about}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
