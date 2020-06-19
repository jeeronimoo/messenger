import * as React from "react";
import * as css from "./theme/icon.css";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { themr } from "react-css-themr";
import { ObjectOptional } from "../../../../utils/object-optional";

type TRawIconProps = {
  theme: MakeTheme<"container" | "content">;
  source: string;
  alt?: string;
  onClick?: () => void;
};

class RawIcon extends Component<TRawIconProps> {
  render() {
    const { theme, source, alt, onClick } = this.props;

    return (
      <div className={theme.container} onClick={onClick}>
        <img src={source} alt={alt} className={theme.content} />
      </div>
    );
  }
}

const defaultTheme = {
  ...css
};

export type TIconProps = ObjectOptional<TRawIconProps, "theme">;
export const Icon: ComponentClass<TIconProps> = themr("kitIcon", defaultTheme)(
  RawIcon
);
