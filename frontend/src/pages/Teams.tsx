import React from 'react';
import TeamCard from '../components/TeamCard';


const Teams: React.FC<{teams: any[]} & {getTeams: any}> = ({teams, getTeams}) => {
  const [cards, setCards] = React.useState<any>([]);
  React.useEffect(() => {
    setCards([]);
  }, [teams]);

  React.useEffect(() => {
    getTeams();
  }, []);

  React.useEffect(() => {
    teams?.forEach((team) => {
      setCards([...cards, <TeamCard teamName={team.teamName} />]);
    });
  }, [teams]);

  return (
    <>
      {cards}
    </>
  );
}

export default Teams;
