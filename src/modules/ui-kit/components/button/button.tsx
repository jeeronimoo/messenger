import * as React from "react";
import * as css from "./theme/button.css";
import { themr } from "react-css-themr";
import { MakeTheme } from "../../../../utils/make-theme";
import { Component, ComponentClass } from "react";
import { ObjectOptional } from "../../../../utils/object-optional";

type TRawButtonProps = {
  theme: MakeTheme<"container">;
  onClick?: () => void;
};

class RawButton extends Component<TRawButtonProps> {
  render() {
    const { theme, children } = this.props;

    return <button className={theme.container}>{children}</button>;
  }
}

const defaultTheme = {
  ...css
};

export type TButtonProps = ObjectOptional<TRawButtonProps, "theme">;
export const Button: ComponentClass<TButtonProps> = themr(
  "Button",
  defaultTheme
)(RawButton);
