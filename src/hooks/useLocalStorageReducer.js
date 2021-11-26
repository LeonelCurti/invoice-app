import { useEffect, useReducer } from "react";

const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || defaultVal);
    } catch (e) {
      console.log(e);
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
};

export default useLocalStorageReducer;
