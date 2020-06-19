import * as React from "react";
import * as cn from "classnames";
import * as format from "date-fns/format";
import * as css from "./theme/user-card.css";
import * as iconCss from "./theme/icon.child.css";
import * as dotsCss from "./theme/dots.child.css";
import * as dots from "../../../../assets/icons/additional.svg";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { TUser } from "../../../../models/User";

export type TRawUserCardProps = {
  theme: MakeTheme<
    | "container"
    | "container__active"
    | "avatar"
    | "content"
    | "name"
    | "message"
    | "additional"
    | "time"
  >;
  user: TUser;
  isSelected?: boolean;
  onSelect: (user: TUser) => void;
};

export class RawUserCard extends Component<TRawUserCardProps> {
  render() {
    const { theme, user, isSelected } = this.props;

    const containerTheme = cn(theme.container, {
      [theme.container__active as string]: isSelected
    });

    const date = user.lastMessage && format(user.lastMessage.date, "DD.MM.YY");

    const message = user.lastMessage && user.lastMessage.content;
    // const date = user.lastMessage && user.lastMessage.date;

    return (
      <div className={containerTheme} onClick={this.handleClick}>
        <div className={theme.avatar}>
          <Icon source={user.avatar} theme={iconCss} />
        </div>
        <div className={theme.content}>
          <div className={theme.name}>{user.name}</div>
          {message && <div className={theme.message}>{message}</div>}
        </div>
        <div className={theme.additional}>
          <Icon source={dots} theme={dotsCss} />
          {date && <div className={theme.time}>{date}</div>}
        </div>
      </div>
    );
  }

  handleClick = () => {
    const { onSelect, user } = this.props;

    onSelect(user);
  };
}

const defaultTheme = {
  ...css
};

export type TUserCardProps = ObjectOptional<TRawUserCardProps, "theme">;

export const UserCard: ComponentClass<TUserCardProps> = themr(
  "UserCard",
  defaultTheme
)(RawUserCard);
