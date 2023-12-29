import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BaseballPic from "../Images/Mets.jpg";
import ToDo from "../Images/TodoPic.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  link: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [
    {
      id: 1,
      title: "Mets Baseball Website",
      description:
        "This Website talks in brief about the Mets history. How they became the Mets we know today, their start and their journey. " +
        "It also highlights their achievements and key moments in their baseball journey.",
      image: BaseballPic,
      details:
        "This project uses HTML and CSS and focuses on the flex and grid property of CSS. " +
        "It includes responsive design techniques and showcases the use of modern styling features. ",
      link: "https://sonamnsherpa.github.io/portfolio/newyorkmets.html",
    },
    {
      id: 2,
      title: "Todo Project",
      description:
        "This is a ToDo Website that fetches todo list using API. Users can customize the list according to their needs. " +
        "It provides a user-friendly interface for managing tasks and offers various customization options.",
      image: ToDo,
      details:
        "Tools used are: React, TypeScript, HTML, CSS. API Fetching is done using Axiom. " +
        "The project follows best practices for state management and component architecture in React. ",
      link: "https://kaleidoscopic-creponne-ab716b.netlify.app/",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectsSlice.actions;
export const selectProjects = (state: { projects: ProjectsState }) =>
  state.projects.projects;
export default projectsSlice.reducer;
