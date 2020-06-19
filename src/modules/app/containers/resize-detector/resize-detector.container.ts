import { Dispatch } from "redux";
import { resizeWindowAC } from "../../../../redux/actions/hamburger";
import { connect } from "react-redux";
import { ResizeDetector } from "../../components/resize-detector/resize-detector";
import { TAction } from "../../../../redux/actions";

const mapDispatchToProps = (dispatch: Dispatch<TAction>) => ({
  onWindowResize: (isSmallScreen: boolean) =>
    dispatch(resizeWindowAC(isSmallScreen))
});

export const ResizeDetectorContainer = connect(
  null,
  mapDispatchToProps
)(ResizeDetector);
