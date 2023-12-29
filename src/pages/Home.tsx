import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "100px",
          backgroundColor: "#ed6c02",
          height: "500px",
          marginTop: "30px",
        }}
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          HELLO WORLD!!! I’M SONAM N.
        </Typography>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Queens based full stack developer. Feel free to wander through my
          website. Hope you like my ideas interesting!!!
        </Typography>
      </Container>
    </>
  );
};
export default Home;
