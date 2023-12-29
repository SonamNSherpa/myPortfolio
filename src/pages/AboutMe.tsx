import { Container, Typography } from "@mui/material";
import profilePic from "../Images/mypic1.jpg";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import htmlIcon from "../thumbnails/html-icon.png";
import cssIcon from "../thumbnails/css-icon.png";
import jsIcon from "../thumbnails/js-icon.png";
import javaIcon from "../thumbnails/java-icon.png";
import reactIcon from "../thumbnails/react-node-icon.png";
import { SocialMedia } from "./Contact";

const StyledImage = styled("img")({
  width: "50px",
  height: "50px",
  margin: "5px",
  borderRadius: "8px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
});

const AboutMe: React.FC = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          position: "fixed",
          top: "200px",
          left: "280px",
        }}
      >
        <Box
          style={{
            width: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={profilePic}
              style={{ height: "320px", width: "320px", borderRadius: "60px" }}
            />
            <Typography>Sonam N Sherpa</Typography>
            <Typography>Sonamsherpa16@gmail.com</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "320px",
            }}
          >
            <StyledImage src={htmlIcon} alt="htmlIcon" />
            <StyledImage src={cssIcon} alt="htmlIcon" />
            <StyledImage src={jsIcon} alt="htmlIcon" />
            <StyledImage src={javaIcon} alt="htmlIcon" />
            <StyledImage src={reactIcon} alt="htmlIcon" />
          </Box>
        </Box>
        <Box>
          <Box></Box>
          <Typography variant="h4">Hey, I'm Sonam N Sherpa!</Typography>
          <Typography variant="body1" style={{ marginTop: "15px" }}>
            I am a developer currently based in Queens, NY.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "15px" }}>
            I am a Computer Science student from Queens College(Bachelor of Arts
            Feb 2022).
          </Typography>
          <Typography variant="body1" style={{ marginTop: "25px" }}>
            Please feel free to wander through my website.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "25px" }}>
            Hit me a message or an email if you have any questions and if any
            suggestions for me. Thank you for visiting my portfolio!!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginTop: "15px" }}
          >
            Please hit that like and subscribe button too if you find it.
          </Typography>
        </Box>
      </Container>
      <SocialMedia />
    </>
  );
};

export default AboutMe;
