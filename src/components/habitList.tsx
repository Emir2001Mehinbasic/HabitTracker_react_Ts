import { HabitItem } from "./habitItem";
import type { Habit } from "./habitItem";

type HabitListProps = {
  habits: Habit[]
  deleteHabit: (id: number) => void;
  toggleHabit: (id: number, date: Date) => void;
};

export const HabitList = ({habits, deleteHabit, toggleHabit} : HabitListProps) => {


  if (habits.length === 0) {
    return (<p className="text-center text-gray-500 mt-4 py-12">No habits to display.</p>);
  }
  return (<div className="flex flex-col gap-2 mt-4"> 
    {habits.map((habit) => (<HabitItem key={habit.id} habit={habit} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />))}
  </div>


    
  );
};
