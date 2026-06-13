import Button from './button';

export const HabitForm = () => {
  return (
    <form className="flex flex-col gap-4 mt-4">
      <input
        type="text"
        placeholder="Habit name"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button>Save Habit</Button>
    </form>
  );
};
