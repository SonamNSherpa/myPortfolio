import React from "react";
import { Provider } from "react-redux";
import { Container } from "@mui/material";
import ProjectList from "./ProjectList";
import store from "../redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <ProjectList />
      </Container>
    </Provider>
  );
};

export default App;
