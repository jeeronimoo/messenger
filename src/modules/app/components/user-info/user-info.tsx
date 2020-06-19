import * as React from "react";
import * as css from "./theme/user-info.css";
import * as dropDownCss from "./theme/drop-down-icon.child.css";
import * as notifIconCss from "./theme/notification-icon.child.css";
import * as userPhotoCss from "./theme/user-photo.child.css";
import * as messengerIconCss from "./theme/messenger-icon.child.css";
import * as additionalIconCss from "./theme/additional-icon.child.css";
import * as dropDownIcon from "./../../../../assets/icons/drop-down-icon.svg";
import * as whatsappLogo from "../../../../assets/icons/W.svg";
import * as viberLogo from "../../../../assets/icons/V.svg";
import * as skypeLogo from "../../../../assets/icons/S.svg";
import * as facebookLogo from "../../../../assets/icons/FB.svg";
import * as additionalIcon from "../../../../assets/icons/additional-black.svg";
import * as format from "date-fns/format";
import { Component } from "react";
import { TUser } from "../../../../models/User";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { Messenger } from "../../../../models/Messenger";
const notificationIcon = require("./../../../../assets/icons/notifications-icon.png");

export type TUserInfoProps = {
  user: TUser;
  selectedMessenger: Messenger;
};

export class UserInfo extends Component<TUserInfoProps> {
  render() {
    const { user } = this.props;

    return (
      <div className={css.container}>
        <div className={css.flexContainer}>
          <div className={css.header}>
            <Icon source={notificationIcon} theme={notifIconCss} />
            <div className={css.headerContent}>
              <div className={css.username}>{user.name}</div>
              <Icon source={dropDownIcon} theme={dropDownCss} />
            </div>
          </div>
          <div className={css.mainInfo}>
            <div className={css.mainInfoTitle}>
              <Icon source={this.getMessengerIcon()} theme={messengerIconCss} />
              <Icon source={user.avatar} theme={userPhotoCss} />
              <Icon source={additionalIcon} theme={additionalIconCss} />
            </div>
            <div className={css.mainInfoAdditional}>
              <div className={css.mainUsername}>{user.name}</div>
              <div className={css.mainLocation}>{user.location}</div>
            </div>
          </div>
          <div className={css.additionalInfo}>
            <div className={css.additionalItem}>
              <div className={css.itemTitle}>Nickname</div>
              <div className={css.itemContent}>{user.name}</div>
            </div>
            <div className={css.additionalItem}>
              <div className={css.itemTitle}>Tel:</div>
              <div className={css.itemContent}>{user.phone}</div>
            </div>
            <div className={css.additionalItem}>
              <div className={css.itemTitle}>Date of Birth:</div>
              <div className={css.itemContent}>
                {format(user.birthday, "DD MMM YYYY")}
              </div>
            </div>
            <div className={css.additionalItem}>
              <div className={css.itemTitle}>Gender</div>
              <div className={css.itemContent}>{user.gender}</div>
            </div>
            <div className={css.additionalItem}>
              <div className={css.itemTitle}>Language</div>
              <div className={css.itemContent}>{user.language}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getMessengerIcon = (): string => {
    const { selectedMessenger } = this.props;

    switch (selectedMessenger) {
      case Messenger.Facebook:
        return facebookLogo;

      case Messenger.Whatsapp:
        return whatsappLogo;

      case Messenger.Skype:
        return skypeLogo;

      case Messenger.Viber:
        return viberLogo;
    }
  };
}
