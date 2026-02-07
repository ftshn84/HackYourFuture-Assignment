import express from "express";
import knex from "knex";
import {
  getAllUsers,
  getUnconfirmedUsers,
  getGmailUsers,
  get2022Users,
  getUserCount,
  getLastNameCount,
  getFirstUser,
  getLastUser,
  get2023Activated,
  getOutlookUsers
} from "./repository.js";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// /all-users responds with all users sorted by ID - this one is already done for you in the example!
app.get("/all-users", async (req, res) => {
  const rows = await db.raw(getAllUsers());
  res.json(rows);
});

// /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await db.raw(getUnconfirmedUsers());
  res.json(rows);
});

// /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await db.raw(getGmailUsers());
  res.json(rows);
});

// /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await db.raw(get2022Users());
  res.json(rows);
});

// /user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
  const rows = await db.raw(getUserCount());
  res.send(rows);
});

// /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await db.raw(getLastNameCount());
  res.json(rows);
});

// /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const rows = await db.raw(getFirstUser());
  if (rows.length === 0) {
    res.status(404).send("No users found");
  }
  res.json(rows[0]);
});



//Add 3 new routes
//Think of 3 new useful routes yourself, and implement them.

// /last-user should respond with the last user.
app.get("/last-user", async (req, res) => {
  const rows = await db.raw(getLastUser());
  res.json(rows[0]);
});

// /2023-activated should respond with users confirmed_at in 2023
app.get("/2023-activated", async (req, res) => {
  const rows = await db.raw(get2023Activated());
  res.json(rows);
});


// /outlook-users should respond with users with an @outlook.com email
app.get("/outlook-users", async (req, res) => {
  const rows = await db.raw(getOutlookUsers());
  res.json(rows);
});

app.get("/", (req, res) => {
  res.send(`${user_count}`);
});



app.post("/users", async (req, res) => {
  console.log('Request body:', req.body);
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).send("Missing required fields");
  }

  const [id] = await db("users").insert({ first_name, last_name, email });
  const newUser = await db("users").where({ id }).first();
  res.status(201).json(newUser);
});

// Update user by ID
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).send("Missing required fields");
  }

  const updated = await db("users")
    .where({ id })
    .update({ first_name, last_name, email });

  if (!updated) {
    return res.status(404).send("User not found");
  }

  const user = await db("users").where({ id }).first();
  res.json(user);
});

// Delete user by ID
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await db("users").where({ id }).del();
  if (!deleted) {
    return res.status(404).send("User not found");
  }
  res.status(204).send();
});