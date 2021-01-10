import React from 'react';
import {
  Link
} from "react-router-dom";

interface Props {
  captainName: String,
  teamName: String
}

const TeamCard: React.FC<Props> = ({ captainName, teamName }) => {
  return (
    <div className="card">
      <h4>{teamName}</h4>
      <h5>{captainName}</h5>
      <Link to="/join">Register your team</Link>
    </div>
  );
}

export default TeamCard;
