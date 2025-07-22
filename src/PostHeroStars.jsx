import React from "react";
import "./PostHeroStars.css";

const STAR_COUNT = 60;

export default function PostHeroStars() {
  return (
    <div className="post-hero-stars" aria-hidden="true">
      {Array.from({ length: STAR_COUNT }).map((_, i) => (
        <div
          key={i}
          className="post-hero-star"
          style={{
            top: `${Math.random() * 200}vh`, // fill the container (0-200vh)
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
