import React, { useContext, useEffect } from "react";
const Context = React.createContext();
import { toast } from "react-toastify";
import { useSchema } from "../hooks/useSchema";
import _ from "lodash";

const ObjectWrapProvider = ({ observer, value, children }) => {
  const { state, dispatch } = useSchema(value);

  useEffect(() => {
    if (observer && Object.keys(state).length) {
      observer(state);
    }
  }, [state]);

  useEffect(() => {
    const parentsInstanceOfChild = Object.keys(value).length;
    const realChild = Object.keys(state).length;
    if (parentsInstanceOfChild > realChild) {
      // child is added by pressing parent property's '+' btn in his Context.
      // so update the state by parent's instance which is latest.
      dispatch({ type: "update_all", payload: value });
    }
  }, [value]);

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

  const readSchema = () => {
    dispatch({ type: "get" });
    toast("Logged the Schema in Console");
  };

  const contextValue = {
    state,
    dispatch,
    createNewProperty,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
      {!observer && (
        <section>
          <button onClick={readSchema}>SAVE</button>
        </section>
      )}
    </Context.Provider>
  );
};

export default ObjectWrapProvider;

export const useObjectWrapProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useObjectWrapProvider must be used within ObjectWrapProvider"
    );
  }
  return context;
};
