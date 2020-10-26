import React from 'react';
import {
  Link
} from "react-router-dom";

interface Props {
  teamName: String,
  captain: {
    firstName: String,
    lastName: String
  }
}

const TeamCard: React.FC<Props> = ({ teamName, captain }) => {

  return (
    <div className="card">
      <h4>{teamName}</h4>
      {captain && captain.firstName && captain.lastName &&
        <h5>Captain: {`${captain.firstName} ${captain.lastName}`}</h5>
      }
      <Link to="/join">Register your team</Link>
    </div>
  );
}

export default TeamCard;
