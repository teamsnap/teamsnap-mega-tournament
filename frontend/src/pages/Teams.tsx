import React from "react";
import TeamCard from "../components/TeamCard";

const Teams: React.FC<{ teams: any[] } & { getTeams: any }> = ({
    teams,
    getTeams,
}) => {
    const [cards, setCards] = React.useState<any>([]);

    React.useEffect(() => {
        getTeams();
    }, []);

    React.useEffect(() => {
        setCards((prevState: any) => {
            return [
                ...prevState,
                teams?.map((team, index) => {
                    return (
                        <TeamCard
                            key={`${team.teamName}-${index}`}
                            team={team}
                        />
                    );
                }),
            ];
        });
    }, [teams]);

    return <>{cards}</>;
};

export default Teams;
