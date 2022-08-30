import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <>
      <div className="headers">
        <h1>This is the headers</h1>
        <div className="header__left">
          <LinkedInIcon color="primary" fontSize="large" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right"></div>
      </div>
    </>
  );
};

export default Header;
