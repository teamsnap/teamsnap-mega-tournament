import React from 'react';
import TeamCard from '../components/TeamCard';


const Teams: React.FC<{ teams: any[] }> = ({ teams }) => {
  const [cards, setCards] = React.useState<any>([]);


  React.useEffect(() => {
    setCards(teams?.map((team) => {
      return <TeamCard teamName={team.teamName} captain={team.captain} key={team.teamName} />
    }));
  }, [teams]);

  return (
    <>
      {cards}
    </>
  );
}

export default Teams;
