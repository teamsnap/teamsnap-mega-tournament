import React from 'react';
import TeamCard from '../components/TeamCard';


const Teams: React.FC<{ teams: any[], getTeams: any }> = ({ teams, getTeams }) => {
  const [cards, setCards] = React.useState<any>([]);

  React.useEffect(() => {
    getTeams();
  }, []);

  React.useEffect(() => {
    teams?.forEach((team, index) => {
      setCards([
        ...cards,
        <TeamCard
          teamName={team.teamName}
          captainFirstName={team.captainFirstName}
          captainLastName={team.captainLastName}
          key={index}
        />
      ]);
    });
  }, [teams]);

  return (
    <>
      {cards}
    </>
  );
}

export default Teams;
