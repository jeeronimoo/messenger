import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import { changeInboxMenuAC } from "../../../../redux/actions/inbox";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Inbox } from "../../components/inbox/inbox";
import { TInboxMenuItems } from "../../../../models/Inbox";
import { COUNTS } from "../../../../fixtures/inbox";
import { changeMenuVisibility } from "../../../../redux/actions/hamburger";
import { TAction } from "../../../../redux/actions";

const endomorphism = (state: TAppState) => state;

const mapStateToProps = createSelector(endomorphism, state => ({
  selectedItem: state.selectedInboxMenu,
  counts: COUNTS, // TODO: add middleware getCountsByIM
  isMenuHidden: state.isMenuHidden,
  isSmallScreen: state.isSmallScreen
}));

const mapDispatchToProps = (dispatch: Dispatch<TAction>) => ({
  onSelect: (selectedItem: TInboxMenuItems) =>
    dispatch(changeInboxMenuAC(selectedItem)(dispatch)),
  onHideTab: () => dispatch(changeMenuVisibility())
});

export const InboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
