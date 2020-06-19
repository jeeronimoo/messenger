import * as React from "react";
import * as css from "./theme/search.css";
import { themr } from "react-css-themr";
import { ChangeEvent, Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";

export type TRawSearchProps = {
  theme: MakeTheme<"container">;
  value?: string;
  onChange?: (value: string) => void;
};

export class RawSearch extends Component<TRawSearchProps> {
  render() {
    const { theme, value } = this.props;

    return (
      <input
        value={value}
        type="text"
        className={theme.container}
        placeholder={"Search"}
        onChange={this.handleChange}
      />
    );
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };
}

const defaultTheme = {
  ...css
};

export type TSearchProps = ObjectOptional<TRawSearchProps, "theme">;

export const Search: ComponentClass<TSearchProps> = themr(
  "Search",
  defaultTheme
)(RawSearch);
