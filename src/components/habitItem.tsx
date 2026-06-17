import { Button } from "./button";
import { startOfWeek, endOfWeek, eachDayOfInterval, format, endOfDay } from "date-fns";


export type Habit = {
  id: number;
  name: string;
};

export type HabitItemProps = {
  habit: Habit;
  deleteHabit: (id: number) => void;
};

export const HabitItem = ({ habit, deleteHabit }: HabitItemProps) => {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const todayEnd = endOfDay(new Date());
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
            disabled={date > todayEnd}
            className="flex flex-col flex-1 items-center gap-0.3 rounded-lg text-xs"
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
