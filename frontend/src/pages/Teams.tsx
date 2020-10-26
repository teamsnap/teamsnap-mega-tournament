import React from "react";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

const Teams: React.FC<{ teams: any[] } & { getTeams: any }> = ({
  teams,
  getTeams,
}) => {
  const [cards, setCards] = React.useState<any>([]);
  React.useEffect(() => {
    setCards([]);
  }, [teams]);

  React.useEffect(() => {
    getTeams();
  }, []);
  console.log(teams);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        Don't see your team? <Link to="/join">Register here</Link>
      </h4>
      {teams.length > 0 ? (
        teams.map((team, index) => {
          console.log("team", team);
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
  // teams.length > 0 ? return (<p>TEAMS!</p>) : <p>ewww</p>;

  // React.useEffect(() => {
  //   teams?.map((team, index) => {
  //     console.log("team", team);
  //     setCards([
  //       ...cards,
  //       <TeamCard
  //         key={index}
  //         teamName={team.teamName}
  //         captain={team.captain}
  //       />,
  //     ]);
  //   });
  // }, [teams]);
  // console.log("cards", cards);
  // return <>{cards}</>;
};

export default Teams;
