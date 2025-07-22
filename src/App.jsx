
import './App.css';
import { cityImages } from './assets/cityImages';

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
        <div className="nav-actions">
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
    </div>
  );
}
