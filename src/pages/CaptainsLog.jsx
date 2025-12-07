import React from "react";

// Picard's Captain's Log entries (sample, can be expanded)
// Next batch will be added after approval
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
  {
    stardate: "41503.7",
    entry:
      "Captain's Log, Stardate 41503.7. The Enterprise is investigating the mysterious Farpoint Station at the request of Starfleet Command.",
  },
  {
    stardate: "41636.9",
    entry:
      "Captain's Log, Stardate 41636.9. We are transporting delegates to the planet Parliament for a peace conference.",
  },
  {
    stardate: "41723.9",
    entry:
      "Captain's Log, Stardate 41723.9. The Enterprise is responding to a distress signal from the USS Yamato in the Neutral Zone.",
  },
  {
    stardate: "41800.0",
    entry:
      "Captain's Log, Stardate 41800.0. We are investigating a temporal anomaly near the planet Galorndon Core.",
  },
  {
    stardate: "41986.0",
    entry:
      "Captain's Log, Stardate 41986.0. The Enterprise is on a mission to deliver medical supplies to the planet Nahmi IV.",
  },
  {
    stardate: "42073.1",
    entry:
      "Captain's Log, Stardate 42073.1. The Enterprise is investigating the disappearance of the USS Drake on Minos.",
  },
  {
    stardate: "42193.6",
    entry:
      "Captain's Log, Stardate 42193.6. We are escorting a group of scientists to the planet Velara III to study terraforming technology.",
  },
  {
    stardate: "42286.3",
    entry:
      "Captain's Log, Stardate 42286.3. The Enterprise is responding to a distress call from the planet Rubicun III.",
  },
  {
    stardate: "42354.2",
    entry:
      "Captain's Log, Stardate 42354.2. We are investigating a mysterious energy field near the planet Aldea.",
  },
  {
    stardate: "42402.7",
    entry:
      "Captain's Log, Stardate 42402.7. The Enterprise is on a diplomatic mission to the planet Antica.",
  },
  {
    stardate: "42437.5",
    entry:
      "Captain's Log, Stardate 42437.5. We are investigating a series of unexplained malfunctions aboard the Enterprise.",
  },
  {
    stardate: "42506.5",
    entry:
      "Captain's Log, Stardate 42506.5. The Enterprise is responding to a distress call from the planet Tau Cygna V.",
  },
  {
    stardate: "42609.1",
    entry:
      "Captain's Log, Stardate 42609.1. We are investigating a mysterious probe found near the planet Dytallix B.",
  },
  {
    stardate: "42761.3",
    entry:
      "Captain's Log, Stardate 42761.3. The Enterprise is on a mission to deliver supplies to the planet Bre'el IV.",
  },
  {
    stardate: "42823.2",
    entry:
      "Captain's Log, Stardate 42823.2. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "42901.3",
    entry:
      "Captain's Log, Stardate 42901.3. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "42976.1",
    entry:
      "Captain's Log, Stardate 42976.1. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "43018.4",
    entry:
      "Captain's Log, Stardate 43018.4. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "43125.8",
    entry:
      "Captain's Log, Stardate 43125.8. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "43205.6",
    entry:
      "Captain's Log, Stardate 43205.6. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "43349.2",
    entry:
      "Captain's Log, Stardate 43349.2. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "43421.9",
    entry:
      "Captain's Log, Stardate 43421.9. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "43539.1",
    entry:
      "Captain's Log, Stardate 43539.1. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "43610.4",
    entry:
      "Captain's Log, Stardate 43610.4. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "43745.2",
    entry:
      "Captain's Log, Stardate 43745.2. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "43807.4",
    entry:
      "Captain's Log, Stardate 43807.4. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "43917.4",
    entry:
      "Captain's Log, Stardate 43917.4. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "44012.3",
    entry:
      "Captain's Log, Stardate 44012.3. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "44123.7",
    entry:
      "Captain's Log, Stardate 44123.7. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "44215.2",
    entry:
      "Captain's Log, Stardate 44215.2. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "44307.6",
    entry:
      "Captain's Log, Stardate 44307.6. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "44400.1",
    entry:
      "Captain's Log, Stardate 44400.1. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "44512.5",
    entry:
      "Captain's Log, Stardate 44512.5. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "44604.9",
    entry:
      "Captain's Log, Stardate 44604.9. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "44717.3",
    entry:
      "Captain's Log, Stardate 44717.3. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "44809.7",
    entry:
      "Captain's Log, Stardate 44809.7. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "44902.1",
    entry:
      "Captain's Log, Stardate 44902.1. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "45014.5",
    entry:
      "Captain's Log, Stardate 45014.5. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "45106.9",
    entry:
      "Captain's Log, Stardate 45106.9. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "45219.3",
    entry:
      "Captain's Log, Stardate 45219.3. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "45311.7",
    entry:
      "Captain's Log, Stardate 45311.7. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "45424.1",
    entry:
      "Captain's Log, Stardate 45424.1. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "45516.5",
    entry:
      "Captain's Log, Stardate 45516.5. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "45608.9",
    entry:
      "Captain's Log, Stardate 45608.9. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "45721.3",
    entry:
      "Captain's Log, Stardate 45721.3. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "45813.7",
    entry:
      "Captain's Log, Stardate 45813.7. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "45906.1",
    entry:
      "Captain's Log, Stardate 45906.1. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "46018.5",
    entry:
      "Captain's Log, Stardate 46018.5. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "46110.9",
    entry:
      "Captain's Log, Stardate 46110.9. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "46223.3",
    entry:
      "Captain's Log, Stardate 46223.3. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "46315.7",
    entry:
      "Captain's Log, Stardate 46315.7. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "46408.1",
    entry:
      "Captain's Log, Stardate 46408.1. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "46520.5",
    entry:
      "Captain's Log, Stardate 46520.5. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "46612.9",
    entry:
      "Captain's Log, Stardate 46612.9. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "46705.3",
    entry:
      "Captain's Log, Stardate 46705.3. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "46817.7",
    entry:
      "Captain's Log, Stardate 46817.7. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "46910.1",
    entry:
      "Captain's Log, Stardate 46910.1. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "47022.5",
    entry:
      "Captain's Log, Stardate 47022.5. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "47114.9",
    entry:
      "Captain's Log, Stardate 47114.9. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
  {
    stardate: "47207.3",
    entry:
      "Captain's Log, Stardate 47207.3. The Enterprise is responding to a distress call from the planet Nahmi IV.",
  },
  {
    stardate: "47319.7",
    entry:
      "Captain's Log, Stardate 47319.7. We are investigating a mysterious energy field near the planet Galorndon Core.",
  },
  {
    stardate: "47412.1",
    entry:
      "Captain's Log, Stardate 47412.1. The Enterprise is on a mission to deliver medical supplies to the planet Bre'el IV.",
  },
  {
    stardate: "47504.5",
    entry:
      "Captain's Log, Stardate 47504.5. We are investigating a series of attacks on Federation outposts near the Neutral Zone.",
  },
  {
    stardate: "47616.9",
    entry:
      "Captain's Log, Stardate 47616.9. The Enterprise is responding to a distress call from the planet Torma IV.",
  },
  {
    stardate: "47709.3",
    entry:
      "Captain's Log, Stardate 47709.3. We are investigating a mysterious signal from the planet Dytallix B.",
  },
  {
    stardate: "47821.7",
    entry:
      "Captain's Log, Stardate 47821.7. The Enterprise is on a diplomatic mission to the planet Legara IV.",
  },
  {
    stardate: "47914.1",
    entry:
      "Captain's Log, Stardate 47914.1. We are investigating a series of unexplained disappearances aboard the Enterprise.",
  },
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
