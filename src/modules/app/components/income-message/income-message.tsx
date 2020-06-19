import * as React from "react";
import * as css from "./theme/income-message.css";
import * as avatarCss from "./theme/avatar.child.css";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { TMessage } from "../../../../models/Message";
import { format } from "date-fns";
import { Icon } from "../../../ui-kit/components/icon/icon";

export type TRawIncomeMessageProps = {
  message: TMessage;
  avatar: string;
  theme: MakeTheme<"container">;
};

export class RawIncomeMessage extends Component<TRawIncomeMessageProps> {
  render() {
    const { theme, message, avatar } = this.props;

    return (
      <div className={theme.container}>
        <div className={css.info}>
          <Icon source={avatar} theme={avatarCss} />
          <div className={css.time}>{format(message.date, "HH:mm")}</div>
        </div>
        <div className={css.content}>
          <div className={css.triangle} />
          <div className={css.text}>{message.content}</div>
        </div>
      </div>
    );
  }
}

const defaultTheme = {
  ...css
};

export type TIncomeMessageProps = ObjectOptional<
  TRawIncomeMessageProps,
  "theme"
>;

export const IncomeMessage: ComponentClass<TIncomeMessageProps> = themr(
  "Message",
  defaultTheme
)(RawIncomeMessage);
