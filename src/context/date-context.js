import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initialState = {    //initial state
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};

const DateContext = createContext(initialState); //Creates a React Context with initialState.

//Uses useReducer(dateReducer, initialState), which:
//Stores the state values (destination, guests, etc.).
//Provides a dispatch function (dateDispatch) to update the state.

const DateProvider = ({ children }) => { 
  const [
    {
      destination,
      guests,
      checkInDate,
      checkOutDate,
      isSearchModalOpen,
      isSearchResultOpen,
    },
    dateDispatch,
  ] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{
        destination,
        guests,
        checkInDate,
        checkOutDate,
        isSearchModalOpen,
        isSearchResultOpen,
        dateDispatch,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
