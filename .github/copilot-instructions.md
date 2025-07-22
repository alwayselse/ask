<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->


---

# 🏔️ AskHimalaya – Web App Design Instructions

This project is a **Vite + React** web application designed as a modern travel assistant for Himalayan towns. The web app allows users to select a city and interact with a local chatbot via a clean and intuitive interface. Below are detailed design and development instructions for building and maintaining consistency across the platform.

---

## 🌌 General Design Guidelines

* **Theme:** Dark theme by default (dark mode only).
* **Typography:** Use `Inter` as the primary font (via Google Fonts or local import).
* **Style Aesthetic:**

  * Rounded corners (`border-radius: 1rem` or `2xl`)
  * Soft shadows for depth
  * Hover and click animations (e.g., scale, fade, slide)
  * Minimalist UI, optimized for attention and exploration
* **Responsiveness:** Mobile-first layout with smooth scaling for tablets and desktops.
* **Accessibility:** High contrast, readable text, alt attributes, and keyboard navigation support where applicable.

---

## 📄 Page Structure

### 1. **Landing Page ("/")**

#### Hero Section

* Full-screen background image of the Himalayas (with a dark translucent overlay)
* Title: `Born in the Hills, Built for the World`
* Subtitle: `Your local guide to exploring the Himalayas, powered by real people.`
* CTA Button: `Explore Now` (scrolls to city section)

#### Navigation Bar

* Positioned top-right:

  * **Sign In**
  * **Sign Up**
* Navigation should not block city access — login is optional.

#### City Grid

* 5 featured cities:

  * Gangtok
  * Shillong
  * Aizawl
  * Manali
  * Leh
* Grid layout:

  * Use `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
  * Each city card:

    * Full background image (city-themed)
    * City name in large white text with shadow
    * On hover: darken overlay + "Chat Now" button fade in
    * Click action: Redirect to `/cityname` route (e.g., `/leh`)

---

## 💬 City Chat Pages (`/gangtok`, `/leh`, etc.)

> *Future routes where each city-specific chatbot will reside.*

* Each route loads the chatbot directly (via custom LLM endpoint or external embed).
* Design remains consistent:

  * Dark theme
  * Minimal navigation
  * Top-left: Logo + Back Home
  * Clean input box, message list with smooth animations

---

## 🧱 Tech Stack

* **Frontend:** Vite + React
* **Styling:** TailwindCSS (recommended), custom CSS modules optional
* **Routing:** React Router
* **Fonts:** Inter (Google Fonts)
* **Icons:** Lucide, Heroicons, or Feather Icons (outline only)

---

## 📱 Mobile Responsiveness

* Nav collapses into hamburger (if expanded later)
* City cards stack vertically with smooth scroll
* Button tap areas expanded for touch UX

---

## 🔒 Authentication

* **Sign In/Sign Up** via Clerk/Auth0/Firebase Auth (optional)
* Users can access city chat pages *without* signing in
* Auth will be used for features like bookmarking, saved trips, and custom itineraries (future scope)

---

## 📦 Folder Structure (Suggested)

```
src/
│
├── assets/              # images, icons, logos
├── components/          # reusable UI components (CityCard, Navbar, Hero)
├── pages/               # main pages like Home.jsx, CityPage.jsx
├── routes/              # routing config
├── styles/              # global or module styles
├── App.jsx
└── main.jsx
---

## 🧠 Future Features (Optional)

* Real-time feedback from locals
* Admin dashboard for city maintainers
* Itinerary planner & saved recommendations
* Local language toggles
* Progressive Web App (PWA) capability

