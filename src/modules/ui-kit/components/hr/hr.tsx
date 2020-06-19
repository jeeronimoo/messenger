import * as React from "react";
import * as css from "./theme/hr.css";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";

export type TRawHrProps = {
  theme: MakeTheme<"container">;
};

export class RawHr extends Component<TRawHrProps> {
  render() {
    const { theme } = this.props;

    return <div className={theme.container} />;
  }
}

const defaultTheme = {
  ...css
};

export type THrProps = ObjectOptional<TRawHrProps, "theme">;

export const Hr: ComponentClass<THrProps> = themr("Hr", defaultTheme)(RawHr);
