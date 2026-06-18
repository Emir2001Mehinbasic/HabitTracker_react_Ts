import { HabitItem } from "./habitItem";
import { useHabits } from "../context/habitContext";

export const HabitList = () => {
  const { habits } = useHabits();


  if (habits.length === 0) {
    return (<p className="text-center text-gray-500 mt-4 py-12">No habits to display.</p>);
  }
  return (<div className="flex flex-col gap-2 mt-4"> 
    {habits.map((habit) => (<HabitItem key={habit.id} habit={habit} />))}
  </div>


    
  );
};
