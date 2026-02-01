<template>
  <div class="create-page">
    <!-- Back Button -->
    <div class="container">
      <button class="back-btn" @click="goBack">
        <span>←</span> Back to Dashboard
      </button>

      <div class="form-card">
        <div class="card-header">
          <div class="header-icon">🏀</div>
          <div>
            <h1>Create New Session</h1>
          </div>
        </div>
        <!-- Showing list of sports through iterating the sport array  -->
        <form @submit.prevent="createSession">
          <div class="form-group">
            <label>Choose Your Sport*</label>
            <div class="sport-grid">
              <div
                v-for="sport in sports"
                :key="sport.name"
                class="sport-card"
                :class="{ active: form.sport === sport.name }"
                @click="selectSport(sport.name)"
              >
                <span class="sport-icon">{{ sport.icon }}</span>
                <span class="sport-name">{{ sport.name }}</span>
              </div>
            </div>
          </div>

          <!-- Title -->
          <div class="form-group">
            <label>
              <span class="label-icon">📝</span>
              Session Title*
            </label>
            <input
              v-model="form.title"
              type="text"
              placeholder="e.g., Evening Pickup Game"
              required
            />
          </div>

          <!-- Venue with Location Icon -->
          <div class="form-group">
            <label>
              <span class="label-icon">📍</span>
              Venue*
            </label>
            <input
              v-model="form.venue"
              type="text"
              placeholder="e.g., Brooklyn Bridge Park Court 3"
              required
            />
          </div>

          <!-- Date & Time in Cards -->
          <div class="row">
            <div class="form-group">
              <label>
                <span class="label-icon">📅</span>
                Date*
              </label>
              <input v-model="form.date" type="date" required />
            </div>

            <div class="form-group">
              <label>
                <span class="label-icon">🕐</span>
                Time*
              </label>
              <input v-model="form.time" type="time" required />
            </div>
          </div>

          <!-- Players & Skill -->
          <div class="row">
            <div class="form-group">
              <label>
                <span class="label-icon">👥</span>
                Max Players*
              </label>
              <input
                v-model="form.maxPlayers"
                type="number"
                min="2"
                max="50"
                placeholder="10"
                required
              />
            </div>

            <div class="form-group">
              <label>
                <span class="label-icon">⭐</span>
                Skill Level
              </label>
              <select v-model="form.skill">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <!-- Cost (Optional) -->
          <div class="form-group">
            <label>
              <span class="label-icon">💰</span>
              Entry Fee (Optional)
            </label>
            <div class="input-with-prefix">
              <span class="prefix">$</span>
              <input
                v-model="form.cost"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
              />
            </div>
            <small>Leave blank if free</small>
          </div>

          <!-- Description -->
          <div class="form-group">
            <label>
              <span class="label-icon">📋</span>
              Description (Optional)
            </label>
            <textarea
              v-model="form.description"
              rows="4"
              placeholder="Add details about the game, rules, what to bring, etc..."
            ></textarea>
            <small>{{ form.description.length }}/500 characters</small>
          </div>

          <!-- Action Buttons -->
          <div class="form-actions">
            <button type="button" class="btn-secondary" @click="resetForm">
              Clear Form
            </button>
            <button type="submit" class="btn-create">
              <span>✓</span> Create Session
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Custom Sport Modal -->
    <div
      v-if="showCustomSportModal"
      class="modal-overlay"
      @click="closeCustomSportModal"
    >
      <div class="modal-content" @click.stop>
        <h2>Enter Sport Name</h2>
        <p>What sport are you playing?</p>

        <input
          v-model="customSportName"
          type="text"
          placeholder="e.g., Ultimate Frisbee, Handball"
          class="modal-input"
          @keyup.enter="saveCustomSport"
          autofocus
        />

        <div class="modal-actions">
          <button @click="closeCustomSportModal" class="btn-cancel">
            Cancel
          </button>
          <button @click="saveCustomSport" class="btn-save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
defineOptions({
  name: "CreatePost",
});

const userId = ref(null);
onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    userId.value = JSON.parse(storedUser);
  }
});

const router = useRouter();

const sports = [
  { name: "Basketball", icon: "🏀" },
  { name: "Soccer", icon: "⚽" },
  { name: "Tennis", icon: "🎾" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Badminton", icon: "🏸" },
  { name: "Cricket", icon: "🏏" },
  { name: "Pickleball", icon: "🥎" },
  { name: "Other", icon: "➕" },
];

const showCustomSportModal = ref(false);
const customSportName = ref("");

//making the form reactive so it catches changes, re-renders all the time when a change is made
const form = reactive({
  sport: "",
  title: "",
  venue: "",
  date: "",
  time: "",
  maxPlayers: "",
  skill: "All Levels",
  cost: "",
  description: "",
});

const selectSport = (sportName) => {
  if (sportName === "Other") {
    showCustomSportModal.value = true;
  } else {
    form.sport = sportName;
  }
};

const saveCustomSport = () => {
  if (customSportName.value.trim()) {
    form.sport = customSportName.value.trim();
    showCustomSportModal.value = false;
    customSportName.value = "";
  }
};

const closeCustomSportModal = () => {
  showCustomSportModal.value = false;
  customSportName.value = "";
};

const createSession = async () => {
  const response = await fetch("http://localhost:6969/createPost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sport: form.sport,
      title: form.title,
      venue: form.venue,
      date: form.date,
      time: form.time,
      maxPlayers: form.maxPlayers,
      skill: form.skill,
      cost: form.cost ? form.cost : 0,
      description: form.description ? form.description : "",
      createdBy: userId.value.id,
    }),
  });
  //waiting and getting information from backend server
  const data = await response.json();

  if (response.ok) {
    alert(`${data.message}, with the id ${data.sessionInfo.sessionId}`);
    router.push("/dashboard");
  }
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = key === "skill" ? "All Levels" : "";
  });
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.create-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 32px 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.back-btn {
  background: white;
  border: 1px solid #e5e7eb;
  color: #6b7280;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.back-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.form-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid #e5e7eb;
  margin-bottom: 20px;
}

.card-header {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.header-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.card-header h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111827;
}

.card-header p {
  color: #6b7280;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #374151;
  display: block;
}

.label-icon {
  margin-right: 4px;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
  background: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #4f46e5;
}

.form-group small {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #9ca3af;
}

.sport-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.sport-card {
  padding: 14px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.sport-card:hover {
  border-color: #4f46e5;
  background: #f9fafb;
}

.sport-card.active {
  border-color: #4f46e5;
  background: #4f46e5;
  color: white;
}

.sport-icon {
  font-size: 28px;
  display: block;
  margin-bottom: 6px;
}

.sport-name {
  font-size: 12px;
  font-weight: 600;
  display: block;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.input-with-prefix {
  position: relative;
  display: flex;
  align-items: center;
}

.prefix {
  position: absolute;
  left: 12px;
  font-weight: 600;
  color: #6b7280;
  pointer-events: none;
  font-size: 14px;
}

.input-with-prefix input {
  padding-left: 28px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.btn-secondary {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.btn-create {
  flex: 2;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #4f46e5;
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn-create:hover {
  background: #4338ca;
}

/* Responsive */
@media (max-width: 640px) {
  .form-card {
    padding: 20px;
  }

  .sport-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .row {
    grid-template-columns: 1fr;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 28px;
  width: 90%;
  max-width: 400px;
  border: 1px solid #e5e7eb;
}

.modal-content h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111827;
}

.modal-content p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 20px;
}

.modal-input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
  margin-bottom: 20px;
}

.modal-input:focus {
  border-color: #4f46e5;
}

.modal-actions {
  display: flex;
  gap: 10px;
}

.btn-cancel {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: white;
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.btn-save {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #4f46e5;
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-save:hover {
  background: #4338ca;
}
</style>
