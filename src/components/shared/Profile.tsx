import React from "react";
import profilePic from "../../Images/mypic1.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Profile: React.FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        position: "fixed",
        top: 10,
        left: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={profilePic}
          alt="Profile-Pic"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "70%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Typography variant="h5" style={{ display: "inline-block" }}>
          Sonam N Sherpa
        </Typography>
      </div>
    </Box>
  );
};

export default Profile;
