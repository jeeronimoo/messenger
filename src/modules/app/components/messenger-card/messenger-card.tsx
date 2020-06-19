import * as React from "react";
import * as css from "./theme/messenger-card.css";
import * as iconTheme from "./theme/icon.child.css";
import * as whatsappLogo from "../../../../assets/icons/W.svg";
import * as viberLogo from "../../../../assets/icons/V.svg";
import * as skypeLogo from "../../../../assets/icons/S.svg";
import * as facebookLogo from "../../../../assets/icons/FB.svg";
import * as cn from "classnames";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { Messenger } from "../../../../models/Messenger";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";

export type TRawMessengerCardProps = {
  theme: MakeTheme<"container" | "active">;
  type: Messenger;
  onSelect?: (im: Messenger) => void;
  isSelected?: boolean;
};

export class RawMessengerCard extends Component<TRawMessengerCardProps> {
  render() {
    const { theme, type, isSelected = false } = this.props;

    const cardStyle = cn(theme.container, {
      [theme.active as string]: isSelected
    });

    switch (type) {
      case Messenger.Whatsapp:
        return (
          <div
            className={cardStyle}
            onClick={this.handleClick(Messenger.Whatsapp)}
          >
            <Icon theme={iconTheme} source={whatsappLogo} />
          </div>
        );
      case Messenger.Viber:
        return (
          <div
            className={cardStyle}
            onClick={this.handleClick(Messenger.Viber)}
          >
            <Icon theme={iconTheme} source={viberLogo} />
          </div>
        );

      case Messenger.Facebook:
        return (
          <div
            className={cardStyle}
            onClick={this.handleClick(Messenger.Facebook)}
          >
            <Icon theme={iconTheme} source={facebookLogo} />
          </div>
        );

      case Messenger.Skype:
        return (
          <div
            className={cardStyle}
            onClick={this.handleClick(Messenger.Skype)}
          >
            <Icon theme={iconTheme} source={skypeLogo} />
          </div>
        );
    }
  }

  handleClick = (im: Messenger) => () => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(im);
    }
  };
}

const defaultTheme = {
  ...css
};

export type TMessengerCard = ObjectOptional<TRawMessengerCardProps, "theme">;
export const MessengerCard: ComponentClass<TMessengerCard> = themr(
  "messenger-card",
  defaultTheme
)(RawMessengerCard);
