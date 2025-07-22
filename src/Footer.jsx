import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copyright">
          © {new Date().getFullYear()} AskHimalaya. All rights reserved.
        </div>
        {/* Social icons removed as requested */}
      </div>
    </footer>
  );
}
