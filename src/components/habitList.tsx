import Button from "./button";

export const HabitList = () => {
  const habits = [{ id: 1, name: "Drink water" }, { id: 2, name: "Exercise" }];

  if (habits.length === 0) {
    return (<p className="text-center text-gray-500 mt-4 py-12">No habits to display.</p>);
  }
  return (<div className="flex flex-col gap-2 ">
    {habits.map((habit) => (<h1>{habit.name}</h1>))}
  </div>


    
  );
};
