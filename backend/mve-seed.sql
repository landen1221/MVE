INSERT INTO vaccines (name) VALUES ('pfizer'), ('moderna'), ('johnsonandjohnson'), ('astrazeneca'), ('covid');

INSERT INTO stories (username, vaccine, satisfied, age, gender, story) 
VALUES ('testUser1', 'pfizer', 'true', 25, 'm', 'I got the vaccine AND was s ick for a few days but now I feel great'),
('testUser2', 'moderna', 'false', 64, 'fm', 'After the 2nd vaccine I was sick for a week. I never leave home so was not worth it'),
('testUser3', 'covid', 4, 33, 'm', 'I got COVID and it sucked!'),
('testUser4', 'moderna', 'true', 55, 'm', 'Did not feel well for a couple of days, but it was worth it to get my freedom back');

INSERT INTO vaccine_story (vaccine_id, story_id) VALUES (1, 1), (2,2); 