// import Image from "next/image";
import css from "../styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={css.sticky}>
        <div className={`${css.header_parent} `}>
          <div className="flex gap-20">
            <div>
              {/* <Image /> */}
              <span className="font-18">
                <b>Latest</b> News
              </span>
            </div>
            <div className="flex gap-5 font-18">
              <span>About</span>
              <span>Channels</span>
            </div>
          </div>
          <div className={css.hamburger}>
            <span className={css.burger_child}></span>
            <span className={css.burger_child}></span>
            <span className={css.burger_child}></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
