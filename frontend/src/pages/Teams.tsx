import React from 'react';
import { useSelector } from 'react-redux';
import TeamCard from '../components/TeamCard';

const Teams: React.FC<{teams: any[]} & {getTeams: any}> = () => {
  const [cards, setCards] = React.useState<any>([]);

  const teams = useSelector(state => state.teams);

  React.useEffect(() => {
    const newArr = [...teams];
    teams.map((team: {}, index: number) => {
      newArr[index] = team;
      setCards(newArr);
    })
  }, [teams]);

  return (
    <>
      {cards.map(card => <TeamCard captainName={card.captainName} teamName={card.teamName} />)}
    </>
  );
}

export default Teams;
