import * as React from "react";
import * as css from "./theme/messages.css";
import * as favoriteIcon from "./../../../../assets/icons/favorite-icon.svg";
const sendIcon = require("./../../../../assets/icons/send-icon.png");
const attachIcon = require("./../../../../assets/icons/attach-icon.png");
const emojiIcon = require("./../../../../assets/icons/emojis-icon.png");
const callIcon = require("./../../../../assets/icons/call-icon.png");
const videoIcon = require("./../../../../assets/icons/video-icon.png");
import * as genericAvatar from "./../../../../assets/icons/generic-avatar.svg";
import * as favoriteCss from "./theme/favorite.child.css";
import * as sendCss from "./theme/send.child.css";
import * as attachCss from "./theme/attach.child.css";
import * as emojiCss from "./theme/emoji.child.css";
import * as callCss from "./theme/call.child.css";
import * as videoCss from "./theme/video.child.css";
import { Component } from "react";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { TMessage } from "../../../../models/Message";
import { IncomeMessage } from "../income-message/income-message";
import { OutcomeMessage } from "../outcome-message/outcome-message";
import { TUser } from "../../../../models/User";

export type TMessagesProps = {
  messages: TMessage[];
  currentUser: TUser;
  selectedUser: TUser;
};

export class Messages extends Component<TMessagesProps> {
  scrollContainer: HTMLDivElement | null;

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages, selectedUser } = this.props;

    const username = selectedUser.name;

    return (
      <div className={css.container}>
        <div className={css.flexContainer}>
          <div className={css.header}>
            <div className={css.userInfo}>
              <div className={css.username}>{username}</div>
              <div className={css.isTyping}>is typing...</div>
            </div>
            <div className={css.icons}>
              <Icon source={favoriteIcon} theme={favoriteCss} />
              <Icon source={callIcon} theme={callCss} />
              <Icon source={videoIcon} theme={videoCss} />
            </div>
          </div>
          <div className={css.content} ref={el => (this.scrollContainer = el)}>
            {messages.map(this.renderMessage)}
          </div>
          <div className={css.footer}>
            <Icon source={attachIcon} theme={attachCss} />
            <input
              type="text"
              placeholder={"Type your message..."}
              className={css.textInput}
            />
            <Icon source={emojiIcon} theme={emojiCss} />
            <Icon source={sendIcon} theme={sendCss} />
          </div>
        </div>
      </div>
    );
  }

  renderMessage = (message: TMessage) => {
    const { currentUser, selectedUser } = this.props;

    const isCurrentUserMessage = message.userId === currentUser.id;

    if (isCurrentUserMessage) {
      return (
        <OutcomeMessage
          message={message}
          key={message.id}
          avatar={currentUser.avatar}
        />
      );
    }

    const avatar = selectedUser.avatar || genericAvatar;

    return <IncomeMessage message={message} key={message.id} avatar={avatar} />;
  };

  scrollToBottom = () => {
    if (this.scrollContainer) {
      const scrollHeight = this.scrollContainer.scrollHeight;
      const height = this.scrollContainer.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.scrollContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };
}
