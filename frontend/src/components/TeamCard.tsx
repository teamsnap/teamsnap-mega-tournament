import React from "react";
import { Link } from "react-router-dom";

interface Props {
  teamName: String;
  captain: {
    firstName: string;
    lastName: string;
  };
}

const TeamCard: React.FC<Props> = ({ teamName, captain }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="view-team">
        <h4 style={{ marginTop: "0" }}>{teamName}</h4>
        <p style={{ marginBottom: "0" }}>
          Captain: {captain.firstName} {captain.lastName}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
