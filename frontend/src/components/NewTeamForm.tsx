import React from 'react';

interface Props {
  submitTeam: any,
  baseurl: string,
}

const NewTeamForm: React.FC<Props> = ({submitTeam, baseurl}) => {
  const [teamName, setTeamName] = React.useState('');
  const [teamCaptain, setTeamCaptain] = React.useState('');

  return (
    <div className="card">
      <h1>Registration</h1>

      <div className="card__row">
        <label htmlFor="cName">Captain Name</label>
        <input
          id="cName"
          name="cName"
          type="text"
          value={teamCaptain}
          onChange={(e) => setTeamCaptain(e.target.value)}
        />
      </div>

      <div className="card__row">
        <label htmlFor="tName">Team Name</label>
        <input
          id="tName"
          name="tName"
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>

      <button
        className="button--primary"
        onClick={(e) => submitTeam({ url: baseurl + "/new-team", teamCaptain, teamName })}
      >
        Register
      </button>
    </div>
  );
}

export default NewTeamForm;
