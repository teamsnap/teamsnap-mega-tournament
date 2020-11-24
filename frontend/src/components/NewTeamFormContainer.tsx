import React from 'react';
import { connect } from 'react-redux';
import { submitTeam } from '../redux-cruft/actions/submitTeam';
import NewTeamForm from './NewTeamForm';

const mapDispatchToProps = {
  submitTeam,
};

const NewTeamFormContainer: React.FC<{ baseurl: string, submitTeam: any }> = ({ baseurl, submitTeam }) =>
  <NewTeamForm submitTeam={submitTeam} baseurl={baseurl} />;

export default connect(null, mapDispatchToProps)(NewTeamFormContainer);
