import { useState, type ReactNode } from "react";
import { isSameDay } from "date-fns";
import { HabitContext, type Habit } from "./habitContext";

type HabitProviderProps = {
  children: ReactNode;
};

export const HabitProvider = ({ children }: HabitProviderProps) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    setHabits((prev) => [...prev, { id: Date.now(), name, completions: [] }]);
  };

  const deleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const toggleHabit = (id: number, date: Date) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;

        const alreadyCompleted = habit.completions.some((completedDate) =>
          isSameDay(completedDate, date)
        );

        const completions = alreadyCompleted
          ? habit.completions.filter(
              (completedDate) => !isSameDay(completedDate, date)
            )
          : [...habit.completions, date];

        return { ...habit, completions };
      })
    );
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, deleteHabit, toggleHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
