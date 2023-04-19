import { useReducer } from "react";

const formatSchema = (raw) => {
  const formatted = {};
  for (const key in raw) {
    if (Object.hasOwnProperty.call(raw, key)) {
      const element = raw[key];
      formatted[element.title] = {
        isRequired: element.isRequired,
        value:
          element.type === "object"
            ? formatSchema(element.children)
            : element.type,
      };
    }
  }
  return formatted;
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "add": {
      let uuid = self.crypto.randomUUID();
      return { ...state, [uuid]: { ...action.payload, id: uuid } };
    }

    case "delete": {
      const stateClone = structuredClone(state);
      delete stateClone[action.payload];
      return stateClone;
    }

    case "update": {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          ...action.payload.value,
        },
      };
    }

    case "get": {
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
