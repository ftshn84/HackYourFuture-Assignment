import express from "express";
import knex from "knex";
import { user_count } from "./page-content.js";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// /all-users responds with all users sorted by ID - this one is already done for you in the example!
app.get("/all-users", async (req, res) => {
  const rows = await db.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await db.raw(
    "SELECT * FROM users where confirmed_at is null ORDER BY id ASC;"
  );
  res.json(rows);
});

// /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await db.raw(
    "SELECT * FROM users where email like '%@gmail.com' ORDER BY id ASC;"
  );
  res.json(rows);
});

// /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await db.raw(
    "SELECT * FROM users WHERE strftime('%Y', created_at) = '2022';"
  );
  res.json(rows);
});

// /user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
  const rows = await db.raw("SELECT COUNT(*) FROM users");
  res.send(rows);
});

// /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await db.raw(`
      SELECT last_name, COUNT(*) AS count
      FROM users
      GROUP BY last_name
      ORDER BY last_name ASC
    `);
  res.json(rows);
});

// /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const rows = await db.raw(`
      SELECT *
      FROM users
      ORDER BY id ASC
      LIMIT 1
    `);

  if (rows.length === 0) {
    res.status(404).send("No users found");
  }
  res.json(rows[0]);
});



//Add 3 new routes
//Think of 3 new useful routes yourself, and implement them.

// /last-user should respond with the last user.
app.get("/last-user", async (req, res) => {
  const rows = await db.raw(`
      SELECT *
      FROM users
      ORDER BY id desc
      LIMIT 1
    `);
  res.json(rows[0]);
});

// /2023-activated should respond with users confirmed_at in 2023
app.get("/2023-activated", async (req, res) => {
  const rows = await db.raw(
    "SELECT * FROM users WHERE strftime('%Y', confirmed_at) = '2023';"
  );
  res.json(rows);
});


// /outlook-users should respond with users with an @outlook.com email
app.get("/outlook-users", async (req, res) => {
  const rows = await db.raw(
    "SELECT * FROM users where email like '%@outlook.com' ORDER BY id ASC;"
  );
  res.json(rows);
});

app.get("/", (req, res) => {
  res.send(`${user_count}`);
});
