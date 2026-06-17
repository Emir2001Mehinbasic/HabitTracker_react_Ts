import { useState, type FormEvent } from 'react';
import { Button } from './button';


type HabitFormProps = {
  onAddHabit: (name: string) => void;
};

export const HabitForm = ({ onAddHabit }: HabitFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if(!name.trim()) return;
     onAddHabit(name);
     setName("");
    }   

  return (
    <form className="flex  gap-2 mt-4 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit name"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button disabled={!name.trim()} className="rounded-2xl">
        Save Habit
      </Button>
    </form>
  );
};
