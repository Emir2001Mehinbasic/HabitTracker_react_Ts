import { Header } from "./components/header";
import { HabitForm } from "./components/form";
import { HabitList } from "./components/habitList";
import { useState } from "react";
import type { Habit } from "./components/habitItem";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const addHabit = (name: string) => {
    setHabits((prev) => [...prev, { id: Date.now(), name }]);
  }

  const deleteHabit = (id: number) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }
  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
      <Header />
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} deleteHabit={deleteHabit} />
    </div>
  )
}
