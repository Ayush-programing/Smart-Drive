import React, { createContext, useReducer, useState } from "react";

const AppContext = createContext<ContextProps | undefined>(undefined);
interface Children {
  children: React.ReactNode;
}

interface State {
  email: string;
  password: string;
}

interface Action {
  type: "setEmail" | "setPassword";
  payload: string;
}

interface ContextProps {
  dispatch: React.Dispatch<Action>;
  email: "";
  password: "";
}

const initState = {
  email: "",
  password: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      throw new Error("Reducer Error");
  }
};

function AppContextProvider({ children }: Children) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [state, dispatch] = useReducer(reducer, initState);

  const { email, password } = state;

  return (
    <AppContext.Provider value={{ email, password, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
