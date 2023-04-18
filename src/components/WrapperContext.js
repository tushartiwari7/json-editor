import React, { useContext } from "react";
const Context = React.createContext();
import { toast } from "react-toastify";
import { useSchema } from "../hooks/useSchema";

const WrapperProvider = ({ children }) => {
  const { state, dispatch } = useSchema();

  const createNewProperty = () => {
    try {
      dispatch({
        type: "add",
        payload: {
          title: "addName",
          isRequired: false,
          type: "string",
          children: null,
        },
      });
    } catch (error) {
      console.log({ error });
      toast(error.message);
    }
  };

  const value = {
    state,
    dispatch,
    createNewProperty,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default WrapperProvider;

export const useWrapperProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useWrapperProvider must be used within WrapperProvider");
  }
  return context;
};
