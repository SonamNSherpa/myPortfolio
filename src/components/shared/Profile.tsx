import React from "react";
import buzz from "../../Images/buzz.webp";
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
          src={buzz}
          alt="Profile-Pic"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
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
