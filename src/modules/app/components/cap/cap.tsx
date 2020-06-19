import * as React from "react";
import * as css from "./theme/cap.css";
import { Component } from "react";

export class Cap extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.qwe}>Select a user to view messages</div>
        </div>
      </div>
    );
  }
}
