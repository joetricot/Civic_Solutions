\c civic_solutions

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR (255) UNIQUE NOT NULL,
  first_name VARCHAR (255),
  last_name VARCHAR (255),
  password_digest TEXT
);
CREATE TABLE IF NOT EXISTS issues (
  id SERIAL PRIMARY KEY,
  description TEXT,
  address TEXT
);
