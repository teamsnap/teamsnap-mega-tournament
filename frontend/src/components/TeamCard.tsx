import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  teamName: String,
  captainFirstName: String,
  captainLastName: String,
}

const TeamCard: React.FC<Props> = ({ teamName, captainFirstName, captainLastName }) => (
  <div className="card">
    <h4>{teamName}</h4>
    <h4>Captain: {captainFirstName} {captainLastName}</h4>
    <Link to="/join">Register your team</Link>
  </div>
);

export default TeamCard;
