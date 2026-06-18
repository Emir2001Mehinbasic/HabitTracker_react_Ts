import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      if (item == null) return initialValue;

      return JSON.parse(item, dateReviver) as T;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue] as const;
};

const  dateReviver = (_key: string, value: unknown) => {
  // Provjerava da li je vrijednost tekst i da li odgovara ISO formatu datuma (RegEx)
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value); 
  }
  return value; 
}