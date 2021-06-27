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
//         "satisfied": "no big deal",
//         "count": "45"
//       },
//       {
//         "satisfied": "mild",
//         "count": "40"
//       },
//         "satisfied": "moderate",
//         "count": "35"
//       },
//       {
//         "satisfied": "severe",
//         "count": "30"
//       },
//     ]
//   }
// }

const StatsColumn = ({ stats, vaccines }) => {
  let totalCovid = 0;
  const intensityOrder = ["No Big Deal", "Mild", "Moderate", "Severe"];

  for (let val of stats["covid"]) {
    totalCovid += parseInt(val["count"]);
  }

  const covidStats = (intensity) => {
    for (let val of stats["covid"]) {
      if (val.satisfied === intensity) {
        return (
          <p key={intensity} className="intensity">
            <b>{intensity}: </b>
            {Math.round((val["count"] / totalCovid) * 100 * 10) / 10}%
          </p>
        );
      }
    }
  };

  return (
    <>
      <div className="Stats">
        <h4>Satified w/ Vaccine:</h4>
        <hr />
        <p id="intensity-helper">
          (From <u>{stats.vaccineCount}</u> users)
        </p>
        {Object.entries(vaccines).map(([dbName, siteName]) => (
          <p key={dbName} className="satisfied">
            <b>{siteName === "Johnson & Johnson" ? "J&J" : siteName}: </b>
            {stats[dbName]}%
          </p>
        ))}
      </div>
      <br />
      <div className="Stats">
        <h4>COVID Intensity</h4>
        <hr />
        <p id="intensity-helper">
          (Out of <u>{totalCovid}</u> cases)
        </p>
        {intensityOrder.map((intensity) => covidStats(intensity))}
      </div>
    </>
  );
};

export default StatsColumn;
