import { Button } from "./button";
import { startOfWeek, endOfWeek, eachDayOfInterval, format, isFuture , isSameDay} from "date-fns";


export type Habit = {
  id: number;
  name: string;
  completions: Date[];
};

export type HabitItemProps = {
  habit: Habit;
  deleteHabit: (id: number) => void;
  toggleHabit: (id: number, date: Date) => void;
};

export const HabitItem = ({ habit, deleteHabit, toggleHabit }: HabitItemProps) => {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-4 ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-yellow-400">2</span>
        </div>
        <Button variant="danger" onClick={() => deleteHabit(habit.id)}>
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button
            key={date.toISOString()}
            disabled={isFuture(date)}
            onClick={() => toggleHabit(habit.id, date)}
            className="flex flex-col flex-1 items-center gap-0.3 rounded-lg text-xs"
            variant={habit.completions.some(d => isSameDay(d, date)) ? "primary" : "secondary"}

          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
