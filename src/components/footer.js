import React from "react";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCopyright);

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a onClick={() => props.setPage(false)}>BATTLE.NET EULA</a>
        <p>|</p>
        <a onClick={() => props.setPage(false)}>PRIVACY</a>
        <p>|</p>
        <a onClick={() => props.setPage(false)}>TERMS</a>
        <p>|</p>
        <a onClick={() => props.setPage(false)}>COPYRIGHT INFRINGEMENT</a>
        <p>|</p>
        <a onClick={() => props.setPage(false)}>COOKIES</a>
      </div>
      <div className="copyright">
        <FontAwesomeIcon
          className="copyright-logo"
          icon={["far", "copyright"]}
        />{" "}
        2019 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
