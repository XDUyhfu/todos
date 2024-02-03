import { useState } from "react";

export const useTest = () => {
  const [state, setState] = useState(0);
  return { state, setState };
};
