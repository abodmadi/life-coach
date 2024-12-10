import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseId: null,
};
export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },

    deleteCourseId: (state) => {
      state.courseId = null;
    },
  },
});
export default  courseSlice.reducer;
export const {setCourseId,deleteCourseId}=courseSlice.actions;
