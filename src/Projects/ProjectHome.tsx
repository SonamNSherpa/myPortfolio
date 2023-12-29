import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  details: string;
  link: string;
}
const StyledContent = styled(CardContent)({
  height: "500px",
  width: "600px",
  marginTop: "110px",
  display: "flex",
  flexDirection: "column",
  marginLeft: "400px",
  border: "solid",
});

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  details,
  link,
}) => {
  return (
    <Card>
      <StyledContent style={{ alignItems: "center" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography>{description}</Typography>
        <a href={link} target="_blank">
          <img
            src={image}
            alt={title}
            style={{ height: "300px", width: "400px" }}
          />
        </a>

        <Typography>{details}</Typography>
      </StyledContent>
    </Card>
  );
};

export default Project;
