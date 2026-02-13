//importing the required modules
const express = require("express"); //importing express.js
const cors = require("cors"); //importing cors which allows frontend to communicate with backend
require("dotenv").config(); //importing dotenv to read the files inside the env file and inject em in here
const bcrypt = require("bcrypt");
//initializing the express
const app = express();
app.use(cors());
app.use(express.json());

const db = require("./db"); //importing the db

//main home page route
app.post("/signup", async (req, res) => {
  const { user_fname, user_lname, email, password } = req.body;

  //basic validation
  if (!user_fname || !user_lname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUserQuery =
      "INSERT INTO users (user_fname, user_lname, user_email, user_hshdpwd) VALUES (?, ?, ?, ?)";

    //inserting the user into the database
    const [result] = await db.query(insertUserQuery, [
      user_fname,
      user_lname,
      email,
      hashedPassword,
    ]);

    //sending out the confirmation message to frontend
    res
      .status(201)
      .json({ message: "User created Successfully", userId: result.insertId });
  } catch (err) {
    console.error("Full error:", err);
    res.status(500).json({ message: err.message });
  }
});

//user login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const selectUserForValidationQuery =
      "SELECT * FROM USERS WHERE user_email = ?";

    const [result] = await db.query(selectUserForValidationQuery, [email]);
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result[0];
    const userhashedpwdindb = user.user_hshdpwd;

    const pwdisMatch = await bcrypt.compare(password, userhashedpwdindb);
    if (pwdisMatch) {
      console.log("User login successful");
      return res.status(200).json({
        message: "Login successful",
        user: {
          id: user.user_id,
          user_fname: user.user_fname,
          user_lname: user.user_lname,
        },
      });
    } else {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (err) {
    return console.log(err);
  }
});

//post method to insert a new game session into the database
app.post("/createPost", async (req, res) => {
  try {
    const {
      sport,
      title,
      venue,
      date,
      time,
      maxPlayers,
      skill,
      cost,
      description,
      createdBy,
    } = req.body;

    console.log("createdBy received:", createdBy);

    const insertSessionQuery = `
    INSERT INTO sessions
    (sport, title, venue, session_date, session_time,
    max_players, skill_level,
    entry_fee, description, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [newSession] = await db.query(insertSessionQuery, [
      sport,
      title,
      venue,
      date,
      time,
      maxPlayers,
      skill,
      cost,
      description,
      createdBy,
    ]);

    return res.status(200).json({
      message: "New Session created Successfully",
      sessionInfo: { sessionId: newSession.insertId },
    });
  } catch (err) {
    return res.status(400).json({
      message: "issue while creating new session",
      error: err.message,
    });
  }
});

app.get("/getUserSessions", async (req, res) => {
  try {
    const getUserSessions = `
      SELECT * FROM sessions
      WHERE session_date >= CURDATE()
      ORDER BY session_date ASC, session_time ASC
    `;
    const [allUserSessions] = await db.query(getUserSessions);

    if (allUserSessions.length > 0) {
      return res.status(200).json({
        message: "Successfully fetched the data",
        allUserSessions: allUserSessions,
      });
    } else {
      return res
        .status(200)
        .json({
          message: "No Active data found",
          allUserSessions: "No sessions found",
        });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

//get method to fetch the user's sessions
app.get("/getUserSessions/:id", async (req, res) => {
  try {
    userId = req.params.id;
    const getUserSessionsQuery = "SELECT * FROM sessions where created_by = ? ";
    const [userSession] = await db.query(getUserSessionsQuery, [userId]);

    if (userSession.length > 0) {
      return res.status(200).json({
        message: "Successfully fetched the data",
        sessions: userSession,
      });
    } else {
      return res.status(200).json({ message: "No Sessions Available" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Issue while fetching the user sessions" });
  }
});
//initializing the port
const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
