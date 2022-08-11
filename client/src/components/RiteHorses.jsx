import React, { useEffect } from "react";
import io from "socket.io-client";
import Horse from "./Horse";

import { connect } from "react-redux";
import { updateDistance } from "../redux/actions";

const server = "http://localhost:3002";
const socket = io.connect(server);

function RiteHorses(props) {
    const { horses, updateDistance } = props;
    useEffect(() => {
        socket.emit("start");
        socket.on("ticker", (horses) => {
            updateDistance(horses);
        });
        return () => {
            socket.off("ticker");
        };
    }, [updateDistance]);

    return (
        <ul className="list-group">
            {horses.map((horse, idx) => (
                <Horse name={horse.name} distance={horse.distance} key={idx} />
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => {
    const { horsesReducer } = state;
    return {
        horses: horsesReducer.horses,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateDistance: (horses) => dispatch(updateDistance(horses)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RiteHorses);
