import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { UserInfo } from "../../components/user-info/user-info";

const endomorphism = (state: TAppState) => state;

const mapStateToProps = createSelector(endomorphism, state => ({
  selectedMessenger: state.selectedMessenger
}));

export const UserInfoContainer = connect(mapStateToProps)(UserInfo);
