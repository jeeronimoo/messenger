import * as React from "react";
import { Component } from "react";

export type TResizeDetectorProps = {
  onWindowResize: (isSmallScreen: boolean) => void;
};

export class ResizeDetector extends Component<TResizeDetectorProps> {
  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth.bind(this));
  }

  updateWindowWidth() {
    const { onWindowResize } = this.props;

    onWindowResize(window.innerWidth < 1513);
  }

  render() {
    return <div />;
  }
}
