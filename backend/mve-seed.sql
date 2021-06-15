INSERT INTO vaccines (name) VALUES ('Pfizer'), ('Moderna'), ('Johnson & Johnson'), ('AstraZeneca'), ('COVID');

INSERT INTO stories (username, vaccine, satisfied, age, gender, story) 
VALUES ('testUser1', 'Pfizer', 'true', 25, 'm', 'I got the vaccine AND was s ick for a few days but now I feel great'),
('testUser2', 'Moderna', 'false', 64, 'fm', 'After the 2nd vaccine I was sick for a week. I never leave home so was not worth it');

INSERT INTO vaccine_story (vaccine_id, story_id) VALUES (1, 1), (2,2); 