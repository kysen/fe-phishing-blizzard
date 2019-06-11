import React, { Component } from "react";
import ReactDOM from "react-dom";
import TestComponent from "react-background-video-player";
import { faCentercode } from "@fortawesome/free-brands-svg-icons";

class Player extends Component {
  constructor(props) {
    super(props);

    this.setPage = props.setPage.bind(this);
  }

  render() {
    return (
      <div className="not-found-wrapper">
        <TestComponent
          className="background-vid"
          ref={p => (this.player = p)}
          containerWidth={100}
          containerHeight={100}
          src={[
            {
              src:
                "https://bnetcmsus-a.akamaihd.net/cms/gallery/c6/C6KLQ8BWWSKR1496179646097.webm",
              type: "video/webm"
            }
          ]}
        />

        <div className="not-found-content">
          <h1>404 - Page Not Found</h1>
          <p>We've dispatched a rescue murloc to guide you back to safety.</p>
          <button
            onClick={() => {
              this.setPage(true);
              // (window.location.href = "https://us.battle.net/login/en/")
            }}
          >
            Mmmrrgmgrrrgmmll!
          </button>
        </div>
      </div>
    );
  }
}

export default Player;
