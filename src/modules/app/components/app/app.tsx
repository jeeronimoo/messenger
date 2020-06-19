import * as React from "react";
import * as css from "./theme/app.css";
import { Provider } from "react-redux";
import { Component } from "react";
import { store } from "../../../../redux/state";
import { NavigationContainer } from "../../containers/navigation/navigation.container";
import { InboxContainer } from "../../containers/inbox/inbox.container";
import { ResizeDetectorContainer } from "../../containers/resize-detector/resize-detector.container";
import { MainContentContainer } from "../../containers/main-content/main-content";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={css.container}>
          <ResizeDetectorContainer />
          <NavigationContainer />
          <InboxContainer />
          <MainContentContainer />
        </div>
      </Provider>
    );
  }
}
