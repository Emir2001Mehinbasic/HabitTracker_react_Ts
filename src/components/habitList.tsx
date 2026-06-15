import { HabitItem } from "./habitItem";

export const HabitList = () => {
  const habits = [{ id: 1, name: "Drink water" }, { id: 2, name: "Exercise" }];

  if (habits.length === 0) {
    return (<p className="text-center text-gray-500 mt-4 py-12">No habits to display.</p>);
  }
  return (<div className="flex flex-col gap-2 mt-4"> 
    {habits.map((habit) => (<HabitItem key={habit.id} habit={habit} />))}
  </div>


    
  );
};
