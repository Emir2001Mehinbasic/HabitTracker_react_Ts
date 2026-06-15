import { Header } from "./components/header";
import { HabitForm } from "./components/form";
import { HabitList } from "./components/habitList";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  )
}


