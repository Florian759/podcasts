import { addDays, addMinutes } from "date-fns";
import { useState } from "react";

function getStorageValue(key) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved) || {};
  const { expire, value } = initial;

  return expire && new Date(expire) > Date.now() ? value : undefined;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  const changeValue = (data) => {
    const expire = addDays(new Date(Date.now()), 1);
    //const expire = addMinutes(new Date(Date.now()), 1); //Test one minute
    const strValue = JSON.stringify({ value: data, expire });

    localStorage.setItem(key, strValue);
    setValue(data);
  };

  return [value, changeValue];
};
