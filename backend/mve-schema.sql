CREATE TABLE stories (
    story_id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    vaccine VARCHAR(20) NOT NULL,
    satisfied VARCHAR(20) NOT NULL,
    age INTEGER NULL,
    gender VARCHAR(7) NULL,
    story VARCHAR(1500) NOT NULL
    fingerprint VARCHAR(50) NOT NULL
);

-- FIXME: Potentially Remove
CREATE TABLE vaccines (
    vaccine_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- FIXME: Potentially Remove
CREATE TABLE vaccine_story (
    vs_id SERIAL PRIMARY KEY,
    vaccine_id INTEGER REFERENCES vaccines ON DELETE CASCADE,
    story_id INTEGER REFERENCES stories ON DELETE CASCADE   
);