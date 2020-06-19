import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TUser } from "../../../../models/User";
import { changeUserAC, TChangeUser } from "../../../../redux/actions/user";
import { Users } from "../../components/users/users";
import { Option } from "fp-ts/lib/Option";
import { USERS } from "../../../../fixtures/users";

const endomorphism = (state: TAppState) => state;

const mapStateToProps = createSelector(endomorphism, state => ({
  selectedUser: state.selectedUser,
  data: USERS,
  isSmallScreen: state.isSmallScreen,
  isMenuHidden: state.isMenuHidden
}));

const mapDispatchToProps = (dispatch: Dispatch<TChangeUser>) => ({
  onSelect: (user: Option<TUser>) => dispatch(changeUserAC(user))
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
