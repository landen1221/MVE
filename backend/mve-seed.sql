INSERT INTO vaccines (name) VALUES ('pfizer'), ('moderna'), ('johnsonandjohnson'), ('astrazeneca'), ('covid');

INSERT INTO stories (username, vaccine, satisfied, age, gender, story) 
VALUES ('testUser1', 'Pfizer', 'true', 25, 'Male', 'I got the vaccine AND was s ick for a few days but now I feel great'),
('testUser2', 'Moderna', 'false', 64, 'Female', 'After the 2nd vaccine I was sick for a week. I never leave home so was not worth it'),
('testUser3', 'COVID', 4, 33, 'Other', 'I got COVID and it sucked!'),
('testUser4', 'Moderna', 'true', 55, 'Male', 'Did not feel well for a couple of days, but it was worth it to get my freedom back');

INSERT INTO vaccine_story (vaccine_id, story_id) VALUES (1, 1), (2,2); 