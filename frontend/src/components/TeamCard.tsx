import React from "react";
import { Team } from "../types/types";

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
    function getTeamInitials(teamName: string) {
        if (!teamName) return "NA";
        let words = teamName.split(" ");
        if (words.length > 1) {
            return `${words[0][0].toUpperCase()}${words[1][0].toUpperCase()}`;
        } else {
            return words[0].substr(0, 2).toUpperCase();
        }
    }
    return (
        <div className="card">
            <div className="card-row">
                <div className="avatar">{getTeamInitials(team.teamName)}</div>
                <h2 className="card-title">{team.teamName}</h2>
            </div>
            <div className="card-content">
                <h4>Captain:&nbsp;&nbsp;</h4>
                <h4>
                    {team.captainFirstName && team.captainLastName
                        ? `${team.captainFirstName} ${team.captainLastName}`
                        : "No Designated Captain. Please Contact Tournament Organizer."}
                </h4>
            </div>
        </div>
    );
};

export default TeamCard;
