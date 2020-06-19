import * as React from "react";
import { Component, Fragment } from "react";
import { MessagesContainer } from "../../containers/messages/messages.container";
import { UserInfoContainer } from "../../containers/user-info/user-info.container";
import { Settings } from "../settings/settings";
import { Option } from "fp-ts/lib/Option";
import { TUser } from "../../../../models/User";
import { SettingsMenuItem, TInboxMenuItems } from "../../../../models/Inbox";
import { Help } from "../help/help";
import { Cap } from "../cap/cap";
import { UsersContainer } from "../../containers/users/users.container";

export type TMainContentProps = {
  selectedUser: Option<TUser>;
  selectedInboxMenu: TInboxMenuItems;
};

export class MainContent extends Component<TMainContentProps> {
  render() {
    const { selectedUser, selectedInboxMenu } = this.props;

    const shouldRenderSettings =
      selectedInboxMenu === SettingsMenuItem.Settings;
    const shouldRenderHelp = selectedInboxMenu === SettingsMenuItem.Help;
    const isSettingsDisabled = !shouldRenderSettings && !shouldRenderHelp;

    return (
      <Fragment>
        {shouldRenderSettings && <Settings />}

        {shouldRenderHelp && <Help />}

        {isSettingsDisabled && <UsersContainer />}
        {isSettingsDisabled &&
          selectedUser.map(this.renderMessages).getOrElse(<Cap />)}
      </Fragment>
    );
  }

  renderMessages = (selectedUser: TUser) => (
    <Fragment>
      <MessagesContainer selectedUser={selectedUser} />
      <UserInfoContainer user={selectedUser} />
    </Fragment>
  );
}
