# My Vaccine Experience

With vaccines you can share negative stories on VAERS, but there's no place to share positive experiences or to share experiences with COVID. MVE is designed to allow users to share all experinces on both COVID and the vaccines and to collect stats on the cummulative stories.

This project was created to fill the need for those looking for firsthand accounts on people's experience with either COVID or a given vaccine. Right now most tend to only hear the extreme stories on the news or social media. The problem with those options is you really only hear the good or the bad based on which news stations you follow or what the social media algorithm is feeding you.

MyVaccineExperience.org is an unbiased platform for all users to share their stories. Here people can compare the stories and statistics of COVID vs those of the vaccines and make an informed decision on which option is best for them.

## Run This App

\*The express API for this project can be found at (https://github.com/landen1221/mve-backend). This overview will explain how to setup both the front and back-end.

\*This project is currently in production at (https://myvaccineexperience.herokuapp.com/)

To run this app locally:

- Clone this and the backend directory
- Run 'npm install' on both directories
- Inside of your backend directory, create and seed the appropriate database
  - Assure you have postgres installed
  - Run: 'psql < mve.sql'
- Run 'npm start' on both files
- The site should be live at http://localhost:3000 (Backend visible at http://localhost:3001)

## Technologies Utilized

Backend:

- Express
- PostgreSQL
- Jest

Frontend:

- React
  - Formik
  - Yup
  - Material-UI
- Javascript
- Axios
- CSS

## Additional Notes

MVE also utilizes a robust admin panel to handle inappropriate message. If a story is flagged more than 5 times than it will be reviewed by an admin. If it breaks the "site rules" then it will be hidden.

![Admin Panel](/public/admin-panel.png)
