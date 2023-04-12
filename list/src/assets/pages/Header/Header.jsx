import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <>
      <div className="companents">
        <div className="companents__inner">
          <img src="../../../../public/carusel.svg" alt="carusel" />
          <div className="companents__search">
            <form action="#">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="companents__search_input"
              />
            </form>
            <img src="../../../../public/qong'iroqcha.svg" alt="qong" className="companents__search_img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
