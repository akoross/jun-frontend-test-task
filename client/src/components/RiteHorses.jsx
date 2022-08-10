import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Horse from "./Horse";

const server = "http://localhost:3002";
const socket = io.connect(server);

export default function RiteHorses() {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (data) => {
      setHorses(data);
    });
  }, []);

  return (
    <ul className="list-group">
      {horses.map((horse, idx) => (
        <Horse name={horse.name} distance={horse.distance} key={idx} />
      ))}
    </ul>
  );
}
