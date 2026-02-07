// repository.js
// All raw SQL queries are moved here as functions

export const getUnconfirmedUsers = () =>
    "SELECT * FROM users where confirmed_at is null ORDER BY id ASC;";

export const getGmailUsers = () =>
    "SELECT * FROM users where email like '%@gmail.com' ORDER BY id ASC;";

export const get2022Users = () =>
    "SELECT * FROM users WHERE strftime('%Y', created_at) = '2022';";

export const getUserCount = () =>
    "SELECT COUNT(*) FROM users";

export const getLastNameCount = () => `
  SELECT last_name, COUNT(*) AS count
  FROM users
  GROUP BY last_name
  ORDER BY last_name ASC
`;

export const getFirstUser = () => `
  SELECT *
  FROM users
  ORDER BY id ASC
  LIMIT 1
`;

export const getLastUser = () => `
  SELECT *
  FROM users
  ORDER BY id desc
  LIMIT 1
`;

export const get2023Activated = () =>
    "SELECT * FROM users WHERE strftime('%Y', confirmed_at) = '2023';";

export const getOutlookUsers = () =>
    "SELECT * FROM users where email like '%@outlook.com' ORDER BY id ASC;";
