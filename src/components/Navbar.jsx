import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowAccounts(!showAccounts);
  };

  return (
    <React.Fragment>
      {/* Dynamic class name based on scroll */}
      <nav className={`mainheaderContainer ${isScrolled ? "scrolled" : ""}`}>
        <div className="content">
          <div className="section">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="Netflix-logo"
                width={70}
              />
            </div>
            <div className="headerlinks">
              <a>Home</a>
              <a>Series</a>
              <a>Movies</a>
              <a>New and Popular</a>
              <a>My List</a>
              <a>Browse by Languages</a>
            </div>
          </div>
          <div className="rightcontent">
            <GoSearch size={25} color="white" />
            <p>user</p>
            <IoMdNotificationsOutline size={25} color="white" />
            <Box>
              <Box display="flex">
                <img
                  src="https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbwdSFv3QFDRDc0BknR3lQSOf7GFR9V54jw7TWVBwmyoYbTSbFRAi95ZEYeYPr1_7ZBXM4aGr0gv0r4HY4Ma2IEmL9bsUWE.png?r=a16"
                  alt="account-logo"
                  width={30}
                  className="rightlogo"
                  onClick={handleClick}
                  style={{ cursor: "pointer", marginRight: 8 }}
                />
                <div onClick={handleClick} className="dropdowniocn">
                  {showAccounts ? (
                    <MdArrowDropUp color="white" size={22} />
                  ) : (
                    <MdArrowDropDown color="white" size={22} />
                  )}
                </div>
              </Box>

              {showAccounts && (
                <Box className="rigthusercontent">
                  <Typography>Account</Typography>
                  <Typography>Manage Profile</Typography>
                  <Typography>Transfer Profile</Typography>
                  <Typography>Help Center</Typography>
                </Box>
              )}
            </Box>
          </div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
