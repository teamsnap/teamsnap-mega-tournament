import React, { useEffect } from "react";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

const Teams: React.FC<{ teams: any[] } & { getTeams: any }> = ({
  teams,
  getTeams,
}) => {
  useEffect(() => {
    getTeams(teams);
  }, []);

  return (
    <div>
      {teams.length > 0 && (
        <h4 style={{ textAlign: "center" }}>
          Don't see your team? <Link to="/join">Register here</Link>
        </h4>
      )}
      {teams.length > 0 ? (
        teams.map((team, index) => {
          return (
            <TeamCard
              key={index}
              teamName={team.teamName}
              captain={team.captain}
            />
          );
        })
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>No teams currently registered. </p>
          <p>
            <Link to="/join">Register your team</Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Teams;
