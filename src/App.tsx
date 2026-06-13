import { Header } from "./components/header";
import { HabitForm } from "./components/form";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto px-4 flex-col gap-4">
      <Header />
      <HabitForm />
    </div>
  )
}



