import React, { useContext, useEffect } from "react";
const Context = React.createContext();
import { toast } from "react-toastify";
import { useSchema } from "../hooks/useSchema";

const WrapperProvider = ({ observer, defaultValue, children }) => {
  const { state, dispatch } = useSchema(defaultValue);

  useEffect(() => {
    if (observer && Object.keys(state).length) {
      observer(state);
    }
  }, [state]);

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
      console.error({ error });
      toast(error.message);
    }
  };

  const readSchema = () => dispatch({ type: "get" });

  const value = {
    state,
    dispatch,
    createNewProperty,
  };

  return (
    <Context.Provider value={value}>
      {children}
      {!observer && (
        <section>
          <button onClick={readSchema}>SAVE</button>
        </section>
      )}
    </Context.Provider>
  );
};

export default WrapperProvider;

export const useWrapperProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useWrapperProvider must be used within WrapperProvider");
  }
  return context;
};
