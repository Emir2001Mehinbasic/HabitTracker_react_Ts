import Button from './button';

export const HabitForm = () => {
  return (
    <form className="flex  gap-2 mt-4 w-full">
      <input
        type="text"
        placeholder="Habit name"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button>Save Habit</Button>
    </form>
  );
};
