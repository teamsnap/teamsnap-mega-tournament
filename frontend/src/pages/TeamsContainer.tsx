import { connect } from "react-redux";
import { selectTeams } from "../redux-cruft/selectors/teams";
import Teams from "./Teams";

const mapStateToProps = (state: any) => ({
    teams: selectTeams(state),
});

export default connect(mapStateToProps)(Teams);
