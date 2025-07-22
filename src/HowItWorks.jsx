import React from "react";

const steps = [
  {
    title: "📍 Pick a Town",
    description: "Choose from a list of Himalayan towns.",
    bg: "https://images.unsplash.com/photo-1665394182880-7bd84c63ebc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGRhcmslMjBoaW1hbGF5YXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "💬 Start Chatting",
    description: "Ask anything, from routes to restaurants.",
    bg: "https://images.unsplash.com/photo-1687986018999-08d83bc4cf56?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "💡 Get Real Answers",
    description: "Responses are powered by locals and LLMs.",
    bg: "https://images.unsplash.com/photo-1660048072050-0e9cce055731?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <p id="how-it-works-subtext">
        AskHimalaya connects you to local knowledge with just a message.
      </p>
      <div className="howitworks-steps">
        {steps.map((step) => (
          <div
            key={step.title}
            className="howitworks-step-card"
            tabIndex={0}
            aria-label={step.title + ': ' + step.description}
            style={{
              background: `#1a1a1a url('${step.bg}') center/cover no-repeat`
            }}
          >
            <h3 className="howitworks-step-title">{step.title}</h3>
            <p className="howitworks-step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
