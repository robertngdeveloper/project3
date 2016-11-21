BEGIN;

-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS location;
-- DROP TABLE IF EXISTS meteors;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  zipcode INT NOT NULL DEFAULT 10010
);

CREATE TABLE meteors (
  meteor_id SERIAL PRIMARY KEY
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  meteor_id INTEGER REFERENCES meteors(meteor_id),
  user_id INTEGER REFERENCES users(user_id),
  comment TEXT
);

COMMIT;
