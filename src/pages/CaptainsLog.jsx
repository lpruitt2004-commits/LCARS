import React from "react";

// Picard's Captain's Log entries (sample, can be expanded)
const picardLogs = [
  {
    stardate: "41153.7",
    entry:
      "Captain's Log, Stardate 41153.7. The USS Enterprise-D is en route to the planet Deneb IV for its first mission as the new flagship of the Federation.",
  },
  {
    stardate: "41209.2",
    entry:
      "Captain's Log, Stardate 41209.2. We have encountered a mysterious entity known as Q, who has put humanity on trial.",
  },
  {
    stardate: "41235.25",
    entry:
      "Captain's Log, Stardate 41235.25. The Enterprise is investigating the disappearance of the USS Tsiolkovsky near the Psi 2000 star.",
  },
  {
    stardate: "41386.4",
    entry:
      "Captain's Log, Stardate 41386.4. We are responding to a distress call from the planet Dytallix B.",
  },
  {
    stardate: "41416.2",
    entry:
      "Captain's Log, Stardate 41416.2. The Enterprise is on a diplomatic mission to the planet Haven.",
  },
  // ... add more logs in order ...
];

const CaptainsLog = () => (
  <div className="lcars-captains-log">
    <h1>Captain Jean-Luc Picard's Log</h1>
    <ul className="lcars-log-list">
      {picardLogs.map((log, idx) => (
        <li key={idx} className="lcars-log-entry">
          <strong>Stardate {log.stardate}:</strong> {log.entry}
        </li>
      ))}
    </ul>
  </div>
);

export default CaptainsLog;
