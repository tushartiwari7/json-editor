import { useReducer } from "react";
import { validPropertyTypes } from "utils";

const formatSchema = (raw) => {
  const formatted = {};
  for (const key in raw) {
    if (Object.hasOwnProperty.call(raw, key)) {
      const element = raw[key];
      formatted[element.title] = {
        isRequired: element.isRequired,
        value:
          element.type === validPropertyTypes.OBJECT
            ? formatSchema(element.children)
            : element.type,
      };
    }
  }
  return formatted;
};

export const schemaOperationsEnum = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE: "UPDATE",
  UPDATE_ALL: "UPDATE_ALL",
  GET: "GET",
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case schemaOperationsEnum.ADD: {
      let uuid = self.crypto.randomUUID();
      return { ...state, [uuid]: { ...action.payload, id: uuid } };
    }

    case schemaOperationsEnum.REMOVE: {
      const stateClone = structuredClone(state);
      delete stateClone[action.payload];
      return stateClone;
    }

    case schemaOperationsEnum.UPDATE: {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          ...action.payload.value,
        },
      };
    }

    case schemaOperationsEnum.UPDATE_ALL: {
      return action.payload;
    }

    case schemaOperationsEnum.GET: {
      const formatted = formatSchema(state);
      console.log(formatted);
      return state;
    }

    default:
      return state;
  }
};

export const useSchema = (defaultState = {}) => {
  const [state, dispatch] = useReducer(reducerFn, defaultState);
  return {
    state,
    dispatch,
  };
};
