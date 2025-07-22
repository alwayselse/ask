


import './App.css';
import './NavbarSocials.css';
import { cityImages } from './assets/cityImages';
import HowItWorks from './HowItWorks';
import PostHeroStars from './PostHeroStars';
import AboutAndMission from './AboutAndMission';
import Footer from './Footer';

const cities = [
  { name: 'Gangtok', key: 'gangtok' },
  { name: 'Shillong', key: 'shillong' },
  { name: 'Aizawl', key: 'aizawl' },
  { name: 'Manali', key: 'manali' },
  { name: 'Leh', key: 'leh' },
  { name: 'Darjeeling', key: 'darjeeling' },
  { name: 'Shimla', key: 'shimla' },
  { name: 'Nainital', key: 'nainital' },
  { name: 'Mussoorie', key: 'mussoorie' },
  { name: 'Dehradun', key: 'dehradun' },
];

function scrollToCities() {
  const el = document.getElementById('city-grid');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  return (
    <div className="askhimalaya-root">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-text">AskHimalaya</div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="footer-socials" style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <a
              href="https://wa.me/14123078756"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ color: '#a3a3a3', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '1.3em', height: '1.3em', display: 'block' }}>
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.91A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ask.darj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: '#a3a3a3', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '1.3em', height: '1.3em', display: 'block' }}>
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.02 4.92 4.92 0 0 1 1.02 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.02 1.77 4.92 4.92 0 0 1-1.77 1.02c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.02 4.92 4.92 0 0 1-1.02-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.02-1.77 4.92 4.92 0 0 1 1.77-1.02c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54a6.92 6.92 0 0 0-2.5 1.63A6.92 6.92 0 0 0 .54 4.1c-.228.77-.412 1.67-.47 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.242 2.18.47 2.95a6.92 6.92 0 0 0 1.63 2.5 6.92 6.92 0 0 0 2.5 1.63c.77.228 1.67.412 2.95.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.242 2.95-.47a6.92 6.92 0 0 0 2.5-1.63 6.92 6.92 0 0 0 1.63-2.5c.228-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.242-2.18-.47-2.95a6.92 6.92 0 0 0-1.63-2.5A6.92 6.92 0 0 0 19.9.54c-.77-.228-1.67-.412-2.95-.47C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.844a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
              </svg>
            </a>
          </div>
          <button className="nav-btn outline">Sign In</button>
          <button className="nav-btn filled">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="night-sky">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="star" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.7 + Math.random() * 0.3
            }} />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Born in the Hills, Built for the World</h1>
          <p className="hero-sub">Your local guide to exploring the Himalayas, powered by real people.</p>
          <div className="hero-btn-group">
            <button className="hero-btn" onClick={scrollToCities}>
              Explore Now
            </button>
          </div>
        </div>

      </section>

      {/* Star field after hero section */}
      <PostHeroStars />



     

      {/* Spacing and City Grid */}
      <div style={{ height: '3.5rem' }} />
      <section className="city-section" id="city-grid">
        <div className="city-grid">
          {cities.map(city => (
            <a
              key={city.key}
              href={`/${city.key}`}
              className="city-card"
              style={{ backgroundImage: `url(${cityImages[city.key]})` }}
            >
              <span className="city-name">{city.name}</span>
              <span className="chat-now">Chat Now</span>
            </a>
          ))}
        </div>
      </section>
      {/* How It Works Section */}
      <HowItWorks />
      <AboutAndMission />
      <Footer />
    </div>
  );
}
