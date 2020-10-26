import React from 'react';
import '../App.css';

interface Props {
  submitTeam: any,
  baseurl: string,
}

const NewTeamForm: React.FC<Props> = ({ submitTeam, baseurl }) => {
  const [teamName, setTeamName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  return (
    <div className="card">
      <h4>New Team</h4>
      <label>
        Name:
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      </label>
      <h5>Team Captain</h5>
      <div className="u-flexColumn">
        <label className="u-marginBottom-small">
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label className="u-marginBottom-small">
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
      </div>
      <input type="submit" onClick={(e) => {
        e.preventDefault();
        submitTeam({ url: baseurl + "/teams", team: teamName, firstName: firstName, lastName: lastName });
      }} />
    </div>
  );
}

export default NewTeamForm;
