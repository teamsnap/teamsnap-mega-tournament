import React from 'react';
import {
  Link
} from "react-router-dom";

interface Props {
  teamName: String,
}

const TeamCard: React.FC<Props> = ({teamName}) => {

  return (
    <div className="card">
      <h4>{teamName}</h4>
      <Link to="/join">Register your team</Link>
    </div>
  );
}

export default TeamCard;
