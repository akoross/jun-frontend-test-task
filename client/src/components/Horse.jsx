import React from "react";

export default function Horse({ name, distance }) {
  return (
    <li className="list-group-item">
      <p>Name: {name} </p>
      <p>Distance: {distance} </p>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          aria-label="Success example"
          style={{ width: `${distance / 10}%` }}
          aria-valuenow={distance}
          aria-valuemin="0"
          aria-valuemax="1000"
        ></div>
      </div>
    </li>
  );
}
