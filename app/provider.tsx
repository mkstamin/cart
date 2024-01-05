"use client";
import { persistor, store } from "@/store/Store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const AppProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
