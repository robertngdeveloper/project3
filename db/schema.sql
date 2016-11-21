BEGIN;

-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  search TEXT,
  images TEXT
);


COMMIT;
