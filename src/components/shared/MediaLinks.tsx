import githubIcon from "../../thumbnails/github-icon.png";
import linkedInIcon from "../../thumbnails/linked-in-icon.png";
import resumeIcon from "../../thumbnails/resume.png";
import personalWebsite from "../../thumbnails/personalWebsiteIcon.png";
import { Container } from "@mui/material";
import { styled } from "@mui/material";

const StyledImage = styled("img")({
  height: "40px",
  width: "40px",
  cursor: "pointer",
});

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  backgroundColor: "#ff9800",
  height: "230px",
  width: "80px",
  justifyContent: "center",
  position: "fixed",
  top: "300px",
  left: "-20px",
});

const SocialMedia: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <a
          href="https://github.com/SonamNSherpa/portfolio"
          target="blank"
          rel="noopener noreferrer"
          title="GitHub Link"
        >
          <StyledImage src={githubIcon} />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/sonamnsherpa/"
          target="blank"
          rel="noopener noreferrer"
          title="LinkedIn Link"
        >
          <StyledImage src={linkedInIcon} />{" "}
        </a>

        <a
          href="https://drive.google.com/file/d/147NRer2qgQCvN3iabg286VYISDcklN3A/view?usp=drive_link"
          target="blank"
          rel="noopener noreferrer"
          title="Resume Link"
        >
          <StyledImage src={resumeIcon} />
        </a>
        <a
          href="https://sonamnsherpa.github.io/portfolio/website.html"
          target="blank"
          rel="noopener noreferrer"
          title="Personal Website"
        >
          <StyledImage src={personalWebsite} />{" "}
        </a>
      </StyledContainer>
    </>
  );
};

export { SocialMedia };
