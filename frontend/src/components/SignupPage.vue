<template>
  <div class="signup">
    <h2>Signup</h2>

    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="user_fname" placeholder="First Name" />
      <input type="text" v-model="user_lname" placeholder="Last Name" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "Signup",
});
const user_fname = ref("");
const user_lname = ref("");
const email = ref("");
const password = ref("");

//Function to send the username and password to database. Triggers when user submits the form on the login page
const handleSignup = async () => {
  //sending the username and password to backend
  const response = await fetch("http://localhost:6969/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_fname: user_fname.value,
      user_lname: user_lname.value,
      email: email.value,
      password: password.value,
    }),
  });
  user_fname.value = "";
  user_lname.value = "";
  email.value = "";
  password.value = "";
};
</script>

<style scoped>
.signup {
  max-width: 380px;
  margin: 120px auto;
  padding: 32px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 28px;
  font-size: 1.9rem;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.5px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 13px 14px;
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: inherit;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.18);
}

button {
  padding: 13px;
  margin-top: 6px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

button:hover {
  box-shadow: 0 8px 18px rgba(79, 70, 229, 0.35);
}

button:active {
  transform: scale(0.97);
}
</style>
