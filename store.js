//configureStore allows to create the data layyer
import { configureStore } from "@reduxjs/toolkit";

//we can seperate the data layer as its own layer and we are creating a navigationSlice where the users navigatin data is stored
import navReducer from "./slices/navSlice";

export const store = configureStore({
  //Just sets up the data layer here
  reducer: {
    //connecting to store
    nav: navReducer,
  },
});
