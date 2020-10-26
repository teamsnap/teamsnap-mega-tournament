import { connect } from "react-redux";
import { selectTeams } from "../redux-cruft/selectors/teams";
import { getTeams } from "../redux-cruft/actions/getTeams";
import Teams from "./Teams";

const mapDispatchToProps = {
  getTeams,
};

const mapStateToProps = (state: any) => ({
  teams: selectTeams(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
