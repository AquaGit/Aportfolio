import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [btn_line, setBtnLine] = useState(".mobile-btn unclicked");
  const [menu_list, setMenuList] = useState(".mobile-menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBtnLine(".mobile-btn clicked");
      setMenuList(".mobile-menu visible");
    } else {
      setBtnLine(".mobile-btn unclicked");
      setMenuList(".mobile-menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="menu">
          <div className="mobile-menu">
            <button onClick={updateMenu} className="mobile-btn" type="button">
              <span className={btn_line}></span>
              <span className={btn_line}></span>
              <span className={btn_line}></span>
              <span className={btn_line}></span>
            </button>
          </div>
          <ul className={menu_list}>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Works
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
