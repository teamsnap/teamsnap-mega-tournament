import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../types/types";

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
    return (
        <div className="card">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{team.teamName}</div>
            </div>
            <h3>{team.teamName}</h3>
            <Link to="/join">Register your team</Link>
        </div>
    );
};

export default TeamCard;
