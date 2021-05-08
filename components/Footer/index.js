import Link from "next/link";
import React from "react";

import dribbbleLogo from "./dribble.svg";
import styles from "./Footer.module.css";
import githubLogo from "./github.svg";
import logomark from "./logo.png";
import twitterLogo from "./twitter.svg";
import linkedinLogo from "./linkedin.svg";
import MediumLogo from "./medium.svg";

const Footer = ({ noBorder }) => (
  <footer>
    <div className={noBorder ? styles.containerNoBorder : styles.container}>
      <Link href="/">
        <img src={logomark} width="70px" alt="siddharth logo" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sidx8"
            >
              <img src={githubLogo} alt="sidx8 on github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://siddharth0sinha.medium.com/"
            >
              <img src={MediumLogo} alt="siddharth on medium" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/siddhar45750060"
            >
              <img src={linkedinLogo} alt="siddharth on linkedin" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/siddhar45750060"
            >
              <img src={twitterLogo} alt="sid on twitter" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/sidx9"
            >
              <img src={dribbbleLogo} alt="sidx9 on dribbble" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
