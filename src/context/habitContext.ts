import { createContext, useContext } from "react";

export type Habit = {
  id: number;
  name: string;
  completions: Date[];
};

export type HabitContextValue = {
  habits: Habit[];
  addHabit: (name: string) => void;
  deleteHabit: (id: number) => void;
  toggleHabit: (id: number, date: Date) => void;
};

export const HabitContext = createContext<HabitContextValue | null>(null);

export const useHabits = () => {
  const context = useContext(HabitContext);

  if (context === null) {
    throw new Error("useHabits must be used within a HabitProvider");
  }

  return context;
};
