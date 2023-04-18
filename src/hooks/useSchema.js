import { useReducer } from "react";

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

    default:
      return state;
  }
};

export const useSchema = () => {
  const [state, dispatch] = useReducer(reducerFn, {});
  return {
    state,
    dispatch,
  };
};
