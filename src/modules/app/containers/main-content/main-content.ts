import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { MainContent } from "../../components/main-content/main-content";

const endomorphism = (state: TAppState) => state;
const mapStateToProps = createSelector(endomorphism, state => ({
  selectedUser: state.selectedUser,
  selectedInboxMenu: state.selectedInboxMenu
}));

export const MainContentContainer = connect(mapStateToProps)(MainContent);
