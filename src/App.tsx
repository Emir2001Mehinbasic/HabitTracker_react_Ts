import { Header } from "./components/header";
import { HabitForm } from "./components/form";
import { HabitList } from "./components/habitList";
import { useState } from "react";
import { isSameDay } from "date-fns";
import type { Habit } from "./components/habitItem";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const addHabit = (name: string) => {
    setHabits((prev) => [...prev, { id: Date.now(), name , completions: [] }]);
  }

  const deleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

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
  }


  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
      <Header />
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
    </div>
  )
}
