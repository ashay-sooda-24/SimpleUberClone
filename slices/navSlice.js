import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

//dispaticing set state (action) to the store this happens in reducer which is the 3rd argument below

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload; //value will come through the action as payload and is then dispatched
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.setTravelTimeInformation = action.payload;
    },
  },
});

// now we have to able to use these information

//destructuring. extracting the setOrigin, setDesitnation , settti from the actions available.
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//When we push to the data layer we need to pull it back too. We pushed above but now we have to pull it with the help of selectors
//Selectors
export const selectOrigin = (state) => state.nav.origin; //returning the current value.
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
