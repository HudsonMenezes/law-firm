import React, { useState } from "react";

// import icons
import BarsIcon from "../assets/img/bars.png";
import CloseIcon from "../assets/img/close.png";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden relative z-20">
      {/* Menu icon */}
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt="Icon Hamburger" />
      </button>
    </nav>
  );
};

export default NavMobile;
