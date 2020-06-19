import { connect } from "react-redux";
import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import { Messages } from "../../components/messages/messages";
import { MESSAGES } from "../../../../fixtures/messages";

const endomorphism = (state: TAppState) => state;
const mapStateToProps = createSelector(endomorphism, state => ({
  messages: MESSAGES,
  currentUser: state.currentUser
}));

export const MessagesContainer = connect(mapStateToProps)(Messages);
