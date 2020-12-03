import React from 'react';

interface Props {
  submitTeam: any,
  baseurl: string,
}

const NewTeamForm: React.FC<Props> = ({ submitTeam, baseurl }) => {
  const [teamName, setTeamName] = React.useState("");
  const [captainFirstName, setCaptainFirstName] = React.useState("");
  const [captainLastName, setCaptainLastName] = React.useState("");

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    submitTeam({
      url: baseurl + "/new-team",
      teamName: teamName,
      captainFirstName: captainFirstName,
      captainLastName: captainLastName,
    });
  }

  return (
    <div className="card">
      <h4>New Team</h4>
      <div>
        <label>Team Name:</label>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      </div>
      <h5>Team Captain</h5>
      <div>
        <label>First Name:</label>
        <input type="text" value={captainFirstName} onChange={(e) => setCaptainFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={captainLastName} onChange={(e) => setCaptainLastName(e.target.value)} />
      </div>
      <input type="submit" onClick={(e) => onSubmitHandler(e)} />
    </div>
  );
}

export default NewTeamForm;
