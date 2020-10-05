import { connect } from 'react-redux';
import { submitTeam } from '../redux-cruft/actions/submitTeam';
import NewTeamForm from './NewTeamForm';

const mapDispatchToProps = {
  submitTeam,
};

export default connect(null, mapDispatchToProps)(NewTeamForm);
