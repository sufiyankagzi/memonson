import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSidebarOpen: true,
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      state.collapsed = !state.collapsed;
      console.log("Sidebar State:", state.isSidebarOpen);
    },
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      console.log("Sidebar State:", state.isSidebarOpen);
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
      console.log("Sidebar State:", state.isSidebarOpen);
    },
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar, setCollapsed,toggleCollapsed } = sidebarSlice.actions;
export default sidebarSlice.reducer;
