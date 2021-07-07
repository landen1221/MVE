# My Vaccine Experience

This project was created to fill the need for those looking for more firsthand accounts on people's experience with either COVID or a given vaccine. Right now the only place people are receiving this information is on social media or from a single experience shared from any given news source.

The problem with those options is you really only hear the good or the bad based on which news stations you follow or what the facebook algorithm is feeding you.

MyVaccineExperience.org is an unbiased platform for users to share their stories. Here people can compare the devastating stories of COVID vs those of the vaccines and realize that one is far worse than the other! -- Simultaneously it may be true that those of a certain age may be better off not worrying about a vaccine.

## Run This App

\*The express API for this project can be found at (https://github.com/landen1221/mve-backend). This overview will explain how to setup both the front and back-end\_.

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
