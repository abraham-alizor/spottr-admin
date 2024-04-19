/* eslint-disable react/jsx-no-constructed-context-values */

"use client";

import React, { createContext, useContext, useState } from "react";

interface Props {
  // i set params types for the context
  addDebitCard: boolean;
  setAddDebitCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const DebitContext = createContext<Props>({
  // i define the context state
  addDebitCard: false,
  setAddDebitCard: () => {},
});

export const DebitProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [addDebitCard, setAddDebitCard] = useState<boolean>(false);

  return (
    <DebitContext.Provider value={{ addDebitCard, setAddDebitCard }}>
      {children}
    </DebitContext.Provider>
  );
};

export const useDebitQuery = (): Props => useContext(DebitContext); // export useDebitQuery as hook to render the state
