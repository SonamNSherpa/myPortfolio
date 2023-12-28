import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";

const StyledNavbar = styled("nav")({
  position: "fixed",
  top: 10,
  right: 10,
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "10px",
  background: "#2196f3",
});

const StyledListItem = styled("li")({
  margin: "0 40px 10px",
  listStyle: "none",
  display: "inline-block",
});

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <StyledNavbar>
      <ul>
        <StyledListItem>
          <StyledLink
            to="/"
            style={{ color: location.pathname === "/" ? "red" : "white" }}
          >
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="/AboutMe"
            style={{
              color: location.pathname === "/AboutMe" ? "red" : "white",
            }}
          >
            About Me
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="/Projects"
            style={{
              color: location.pathname === "/Projects" ? "red" : "white",
            }}
          >
            Projects
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            to="/Contact"
            style={{
              color: location.pathname === "/Contact" ? "red" : "white",
            }}
          >
            Contact
          </StyledLink>
        </StyledListItem>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
