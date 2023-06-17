import { createContext, useContext, useReducer } from "react";

const LoadingContext = createContext(null);
const LoadingDispatchContext = createContext(null);
const initialLoading = false;

export function LoadingProvider({ children }) {
  const [loading, dispatch] = useReducer(loadingReducer, initialLoading);

  return (
    <LoadingContext.Provider value={loading}>
      <LoadingDispatchContext.Provider value={dispatch}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

export function useLoadingDispatch() {
  return useContext(LoadingDispatchContext);
}

function loadingReducer(state, action) {
  switch (action.type) {
    case "update":
      return action.payload;
    default: 
      return state;
  }
}
