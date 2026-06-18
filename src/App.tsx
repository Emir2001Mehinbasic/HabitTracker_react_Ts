import { Header } from "./components/header";
import { HabitForm } from "./components/form";
import { HabitList } from "./components/habitList";
import { HabitProvider } from "./context/HabitProvider";
import { useState } from "react";
import { addWeeks, eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";

export default function App() {
  const [weekOffset,setWeekOffset] = useState(0);
  const week = addWeeks(new Date(),weekOffset )

const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
      <HabitProvider>
        <Header visibleDates={visibleDates} 
          onNext={()=>setWeekOffset(o => o + 1)} 
          onPrev={()=> setWeekOffset(o => o - 1)}
          />
        <HabitForm />
        <HabitList />
      </HabitProvider>
    </div>
  );
}
