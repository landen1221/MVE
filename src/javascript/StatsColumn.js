import "../css/StatsColumn.css";

// Example of data provided w/ 'stats'
// {
//   "stats": {
//     "pfizer": 98,
//     "astrazeneca": 84,
//     "moderna": 66.66666666666666,
//     "johnsonandjohnson": 80,
//     "covid": [
//       {
//         "satisfied": "1",
//         "count": "45"
//       },
//       {
//         "satisfied": "2",
//         "count": "40"
//       },
//         "satisfied": "3",
//         "count": "35"
//       },
//       {
//         "satisfied": "4",
//         "count": "30"
//       },
//     ]
//   }
// }

const StatsColumn = ({ stats, vaccines }) => {
  // let totalCovid = 0;
  // for (let val of stats["covid"]) {
  //   totalCovid += parseInt(val["count"]);
  // }

  return (
    <>
      <div className="Stats">
        <h4>Satified w/ Vaccine:</h4>
        <hr />
        {Object.entries(vaccines).map(([dbName, siteName]) => (
          <p key={dbName}>
            <b>{siteName === "Johnson & Johnson" ? "J&J" : siteName}: </b>
            {stats[dbName]}%
          </p>
        ))}
      </div>
      <br />
      <br />
      {/* <div className="Stats">
        <h4>COVID Intensity</h4>
        <p id="intensity-helper">(Out of {totalCovid} cases)</p>
        <hr />
        {stats["covid"].map((intensity) => (
          <p key={intensity["satisfied"]} className="intensity">
            <b>{intensity["satisfied"]}: </b>{" "}
            {(intensity["count"] / totalCovid) * 100}%
          </p>
        ))}
      </div> */}
    </>
  );
};

export default StatsColumn;
