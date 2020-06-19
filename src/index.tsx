import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./modules/app/components/app/app";

export class Root extends React.Component {
  render() {
    return <App />;
  }
}

const root = document.getElementById("root");
ReactDOM.render(<Root />, root);
