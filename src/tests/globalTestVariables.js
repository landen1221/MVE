const vaccines = {
  johnsonandjohnson: "Johnson & Johnson",
  astrazeneca: "AstraZeneca",
  pfizer: "Pfizer",
  moderna: "Moderna",
};

const stats = {
  pfizer: 100,
  astrazeneca: 100,
  moderna: 50,
  johnsonandjohnson: 100,
  vaccineCount: "5",
  covid: [
    {
      satisfied: "Mild",
      count: "1",
    },
    {
      satisfied: "No Big Deal",
      count: "1",
    },
    {
      satisfied: "Severe",
      count: "3",
    },
  ],
};

const storyList = {
  stories: [
    {
      story_id: 2,
      username: "testUser2",
      vaccine: "moderna",
      satisfied: "No",
      age: 64,
      gender: "Female",
      story:
        "After the 2nd vaccine I was sick for a week. I never leave home so was not worth it",
    },
    {
      story_id: 5,
      username: "testUser4",
      vaccine: "moderna",
      satisfied: "Yes",
      age: 55,
      gender: "Male",
      story:
        "Did not feel well for a couple of days, but it was worth it to get my freedom back",
    },
  ],
};

export { vaccines, stats, storyList };
