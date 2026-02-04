<template>
  <div class="dashboard">
    <nav class="top-nav">
      <div class="nav-left">
        <div class="app-logo">
          <span class="logo-icon">🏀</span>
          <span class="logo-text">CourtConnect</span>
        </div>
      </div>
      <div class="nav-right">
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <button class="icon-btn">
          <span class="notification-dot"></span>
          🔔
        </button>
        <div class="user-avatar">
          <!-- using the inital variable to display the user logo-->
          <img
            :src="`https://ui-avatars.com/api/?name=${initials}&background=4F46E5&color=fff`"
          />
        </div>
      </div>
    </nav>

    <div class="layout-wrapper">
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <a href="#" class="nav-item active">
            <span class="nav-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">🏀</span>
            <span>My Games</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">🏟️</span>
            <span>Courts</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">📅</span>
            <span>Schedule</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">👥</span>
            <span>Players</span>
          </a>
          <a href="#" class="nav-item" @click.prevent="logout">
            <span class="nav-icon">🚪</span>
            <span>Logout</span>
          </a>
        </nav>
      </aside>

      <main class="main-content">
        <div class="page-header">
          <div>
            <h1 v-if="user">Welcome, {{ user.user_fname }}</h1>
            <p>Manage your sessions</p>
          </div>
          <button class="btn-primary" @click="newPost">+ New Session</button>
        </div>

        <div class="content-section">
          <div class="section-header">
            <h2>Upcoming Sessions</h2>
            <div class="filter-group">
              <button class="filter-btn active">All</button>
              <button class="filter-btn">Today</button>
              <button class="filter-btn">This Week</button>
            </div>
          </div>

          <div class="sessions-list">
            <div
              v-for="session in userSessions"
              :key="session.id"
              class="session-card"
            >
              <div class="session-header">
                <div>
                  <h3>{{ session.title }}</h3>
                  <p class="session-location">📍 {{ session.venue }}</p>
                </div>
                <span class="badge badge-green">{{ session.status }}</span>
              </div>

              <div class="session-info">
                <div class="info-item">
                  <span class="label">Players</span>
                  <span class="value">
                    {{ session.current_players }} / {{ session.max_players }}
                  </span>
                </div>
                <div class="info-item">
                  <span class="label">Time</span>
                  <span class="value">{{ session.session_time }}</span>
                </div>
              </div>

              <button
                class="btn-join"
                :disabled="session.current_players >= session.max_players"
              >
                {{
                  session.current_players >= session.max_players
                    ? "Session is full"
                    : "Join Game"
                }}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, toRaw } from "vue";
import { useRouter } from "vue-router";

defineOptions({ name: "Dashboard" });

const user = ref(null);
var userId = ref(null);
var userSessions = ref([]);
const router = useRouter();

onMounted(async () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return;
  }
  user.value = JSON.parse(storedUser);
  console.log(user.value); //just for debugging and making sure we are getting the data

  const getUserSessions = await fetch(
    `http://localhost:6969/getUserSessions/${user.value?.id}`,
  );

  const data = await getUserSessions.json();
  userSessions.value = data.sessions || [];
  console.log("Raw sessions:", toRaw(userSessions.value));
});

/**
---------------------------------------------------------------------------------------------
 To make the user logo dynamic we are extracting the user fname, lname and storing them in caps
---------------------------------------------------------------------------------------------
 */
const initials = computed(() => {
  if (!user.value) return "";

  const f = user.value.user_fname?.charAt(0) || "";
  const l = user.value.user_lname?.charAt(0) || "";
  return `${f}${l}`.toUpperCase();
});

//logout function
const logout = () => {
  localStorage.removeItem("user");
  router.push("/login");
};

//function which pushes the user to create a session
const newPost = () => {
  router.push("/createPost");
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard {
  background: #f8f9fa;
  min-height: 100vh;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Top Navigation */
.top-nav {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 24px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
}

.app-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #111827;
}

.logo-icon {
  font-size: 24px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-bar {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 240px;
}

.search-bar input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #111827;
}

.search-bar input::placeholder {
  color: #9ca3af;
}

.icon-btn {
  background: transparent;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background 0.2s;
}

.icon-btn:hover {
  background: #f3f4f6;
}

.notification-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 6px;
  height: 6px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
}

.user-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
}

/* Layout */
.layout-wrapper {
  display: grid;
  grid-template-columns: 240px 1fr;
  height: calc(100vh - 64px);
}

/* Sidebar */
.sidebar {
  background: white;
  border-right: 1px solid #e5e7eb;
  padding: 24px 12px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f9fafb;
  color: #111827;
}

.nav-item.active {
  background: #4f46e5;
  color: white;
}

.nav-icon {
  font-size: 18px;
}

/* Main Content */
.main-content {
  padding: 32px;
  overflow-y: auto;
  background: #f8f9fa;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.page-header p {
  font-size: 14px;
  color: #6b7280;
}

.btn-primary {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #4338ca;
}

/* Content Section */
.content-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.filter-group {
  display: flex;
  gap: 8px;
}

.filter-btn {
  background: transparent;
  border: 1px solid #e5e7eb;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.filter-btn.active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

/* Sessions List */
.sessions-list {
  display: grid;
  gap: 16px;
}

.session-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.2s;
  background: white;
}

.session-card:hover {
  border-color: #4f46e5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.session-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.session-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.session-location {
  font-size: 14px;
  color: #6b7280;
}

.badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.badge-green {
  background: #d1fae5;
  color: #065f46;
}

.badge-yellow {
  background: #fef3c7;
  color: #92400e;
}

.badge-gray {
  background: #f3f4f6;
  color: #6b7280;
}

.session-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item .label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.info-item .value {
  font-size: 14px;
  color: #111827;
  font-weight: 600;
}

.btn-join {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background: #4f46e5;
  color: white;
  transition: background 0.2s;
}

.btn-join:hover:not(:disabled) {
  background: #4338ca;
}

.btn-join:disabled {
  background: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
}
</style>
