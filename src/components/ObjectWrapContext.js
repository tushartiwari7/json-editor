import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { schemaOperationsEnum, useSchema } from "hooks/useSchema";
import { defaultSchemaProperty } from "utils";

const Context = React.createContext();

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
      dispatch({ type: schemaOperationsEnum.UPDATE_ALL, payload: value });
    }
  }, [value]);

  const createNewProperty = () => {
    try {
      dispatch({
        type: schemaOperationsEnum.ADD,
        payload: defaultSchemaProperty,
      });
    } catch (error) {
      console.error({ error });
      toast(error.message);
    }
  };

  const contextValue = {
    state,
    dispatch,
    createNewProperty,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
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
