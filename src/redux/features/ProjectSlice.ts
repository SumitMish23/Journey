import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the structure of each project
export interface Project {
  name: string;
  theme: string;
  id: number;
}

// Define the initial state as an array of Project objects
const initialState: Project[] = [
  {
    name: "My Journal",
    theme: "Minimalistic",
    id: 1,
  },
];

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // Add a new folder (project) to the state
    addFolder: (state, action: PayloadAction<Project>) => {
      return [...state, action.payload];
    },
    // Remove a folder (project) from the state by its ID
    removeFolder: (state, action: PayloadAction<number>) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFolder, removeFolder } = ProjectSlice.actions;

export default ProjectSlice.reducer;
