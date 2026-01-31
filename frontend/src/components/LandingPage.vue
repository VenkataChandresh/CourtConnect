<template>
  <div class="Landing">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <div class="logo-wrapper">
            <span class="logo-icon">⚽</span>
            <h1 class="logo-text">CourtConnect</h1>
          </div>
          <span class="beta-tag">BETA</span>
        </div>
        <div class="nav-actions">
          <button class="btn-login" @click="router.push('/login')">
            Log In
          </button>
          <button class="btn-signup" @click="router.push('/signup')">
            Sign Up
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-left">
            <div class="welcome-badge">
              <span class="badge-dot"></span>
              Welcome to CourtConnect
            </div>
            <h2 class="hero-heading">
              Find Your Perfect
              <span class="highlight">Sports Game</span>
            </h2>
            <p class="hero-subtext">
              Join pickup games, connect with local players, and elevate your
              sports experience. Your next great match is just a click away.
            </p>
            <div class="cta-buttons">
              <button class="btn-cta primary" @click="router.push('/signup')">
                <span class="btn-icon">⚡</span>
                Get Started Free
              </button>
              <button class="btn-cta secondary" @click="scrollToFeatures">
                <span class="btn-icon">📖</span>
                Learn More
              </button>
            </div>
            <div class="quick-stats">
              <div class="quick-stat">
                <span class="stat-icon">🎮</span>
                <div class="stat-info">
                  <span class="stat-number">500+</span>
                  <span class="stat-label">Active Games</span>
                </div>
              </div>
              <div class="quick-stat">
                <span class="stat-icon">👥</span>
                <div class="stat-info">
                  <span class="stat-number">10K+</span>
                  <span class="stat-label">Players Worldwide</span>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-right">
            <div class="feature-card floating-1">
              <div class="card-icon purple">📍</div>
              <div class="card-content">
                <h4>Find Nearby Venues</h4>
                <p>Discover sports venues in your area</p>
              </div>
            </div>
            <div class="feature-card floating-2">
              <div class="card-icon blue">⚡</div>
              <div class="card-content">
                <h4>Instant Join</h4>
                <p>Jump into games instantly</p>
              </div>
            </div>
            <div class="feature-card floating-3">
              <div class="card-icon orange">🏆</div>
              <div class="card-content">
                <h4>Track Progress</h4>
                <p>View your stats & achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <div class="features-section" ref="featuresSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose CourtConnect?</h2>
          <p class="section-subtitle">
            Everything you need to find and join basketball games in one place
          </p>
        </div>

        <div class="features-grid">
          <!-- Feature 1 -->
          <div class="feature-box">
            <div class="feature-icon purple-gradient">🔍</div>
            <h3 class="feature-title">Find Games Easily</h3>
            <p class="feature-desc">
              Browse and join pickup games near you with just a few taps. Filter
              by skill level, location, and time.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-box">
            <div class="feature-icon blue-gradient">🏃</div>
            <h3 class="feature-title">Host Your Own</h3>
            <p class="feature-desc">
              Create and manage your own games. Set the rules, invite players,
              and build your sports community.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-box">
            <div class="feature-icon orange-gradient">📊</div>
            <h3 class="feature-title">Track Performance</h3>
            <p class="feature-desc">
              Monitor your stats, track your progress, and see how you stack up
              against other players in your area.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-box">
            <div class="feature-icon green-gradient">👥</div>
            <h3 class="feature-title">Connect with Players</h3>
            <p class="feature-desc">
              Build your sports network. Find regular teammates and expand your
              local community.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="feature-box">
            <div class="feature-icon purple-gradient">📍</div>
            <h3 class="feature-title">Venue Finder</h3>
            <p class="feature-desc">
              Discover sports venues near you with detailed info, photos, and
              real-time availability.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="feature-box">
            <div class="feature-icon blue-gradient">🔔</div>
            <h3 class="feature-title">Real-Time Updates</h3>
            <p class="feature-desc">
              Get instant notifications about new games, player confirmations,
              and last-minute changes.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="how-it-works-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Get started in three simple steps</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-icon">📝</div>
            <h3 class="step-title">Create Account</h3>
            <p class="step-desc">
              Sign up for free and set up your player profile in seconds
            </p>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-icon">🔍</div>
            <h3 class="step-title">Find Games</h3>
            <p class="step-desc">
              Browse available games in your area or create your own
            </p>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-icon">⚽</div>
            <h3 class="step-title">Play Your Sport</h3>
            <p class="step-desc">
              Show up and enjoy the game with your local sports community
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-text">
            Join thousands of athletes connecting through sports
          </p>
          <div class="cta-buttons-bottom">
            <button
              class="btn-cta primary large"
              @click="router.push('/signup')"
            >
              <span class="btn-icon">🚀</span>
              Sign Up Now
            </button>
            <button
              class="btn-cta secondary large"
              @click="router.push('/login')"
            >
              <span class="btn-icon">👤</span>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo-wrapper">
              <span class="logo-icon">🏀</span>
              <h3 class="logo-text">CourtConnect</h3>
            </div>
            <p class="footer-tagline">
              Connecting athletes and sports enthusiasts, one game at a time
            </p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4 class="footer-heading">Product</h4>
              <a href="#" class="footer-link">Features</a>
              <a href="#" class="footer-link">How it Works</a>
              <a href="#" class="footer-link">Pricing</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Company</h4>
              <a href="#" class="footer-link">About Us</a>
              <a href="#" class="footer-link">Contact</a>
              <a href="#" class="footer-link">Careers</a>
            </div>
            <div class="footer-column">
              <h4 class="footer-heading">Legal</h4>
              <a href="#" class="footer-link">Privacy Policy</a>
              <a href="#" class="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 CourtConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "Landing",
});

const router = useRouter();
const featuresSection = ref(null);

const scrollToFeatures = () => {
  featuresSection.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.Landing {
  min-height: 100vh;
  background: linear-gradient(to bottom, #fafbfc 0%, #f0f2f5 100%);
  font-family:
    -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
  color: #1a1d29;
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 28px;
}

/* Navbar */
.navbar {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 14px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 2.4rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo-text {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.beta-tag {
  padding: 4px 8px;
  background: #667eea;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-login {
  padding: 10px 24px;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-login:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

.btn-signup {
  padding: 10px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 70px 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="white" fill-opacity="0.1"/></svg>');
  opacity: 0.3;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.welcome-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.hero-heading {
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.highlight {
  display: block;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtext {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 540px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.btn-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cta.primary {
  background: #fff;
  color: #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-cta.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn-cta.secondary {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-cta.secondary:hover {
  background: rgba(255, 255, 255, 0.25);
}

.btn-cta.large {
  padding: 16px 36px;
  font-size: 1.1rem;
}

.btn-icon {
  font-size: 1.2rem;
}

.quick-stats {
  display: flex;
  gap: 32px;
}

.quick-stat {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2px;
}

.hero-right {
  position: relative;
  height: 400px;
}

.feature-card {
  position: absolute;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  max-width: 260px;
  animation: float 4s ease-in-out infinite;
}

.floating-1 {
  top: 20px;
  right: 40px;
  animation-delay: 0s;
}

.floating-2 {
  top: 160px;
  right: 200px;
  animation-delay: 1s;
}

.floating-3 {
  top: 280px;
  right: 20px;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.card-icon.purple {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}

.card-icon.blue {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.card-icon.orange {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.card-content h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.card-content p {
  font-size: 0.85rem;
  color: #6b7280;
}

/* Features Section */
.features-section {
  padding: 80px 0;
  background: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.feature-box {
  padding: 32px;
  background: #f9fafb;
  border-radius: 16px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.feature-box:hover {
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.purple-gradient {
  background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
}

.blue-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.orange-gradient {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
}

.green-gradient {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

/* How It Works Section */
.how-it-works-section {
  padding: 80px 0;
  background: linear-gradient(to bottom, #fafbfc 0%, #f0f2f5 100%);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.step-card {
  text-align: center;
  position: relative;
}

.step-number {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.step-icon {
  font-size: 4rem;
  margin: 40px 0 20px;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.step-desc {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="white" fill-opacity="0.1"/></svg>');
  opacity: 0.3;
}

.cta-content {
  position: relative;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
}

.cta-buttons-bottom {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Footer */
.footer {
  background: #1f2937;
  color: #fff;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand .logo-wrapper {
  margin-bottom: 16px;
}

.footer-brand .logo-text {
  font-size: 1.5rem;
  color: #fff;
  background: none;
  -webkit-text-fill-color: #fff;
}

.footer-tagline {
  color: #9ca3af;
  font-size: 0.95rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-heading {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #374151;
  color: #9ca3af;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .nav-actions {
    gap: 8px;
  }

  .btn-login,
  .btn-signup {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .hero-section {
    padding: 50px 0;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-heading {
    font-size: 2.4rem;
  }

  .hero-right {
    display: none;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-cta {
    width: 100%;
    justify-content: center;
  }

  .quick-stats {
    flex-direction: column;
    gap: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-buttons-bottom {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
