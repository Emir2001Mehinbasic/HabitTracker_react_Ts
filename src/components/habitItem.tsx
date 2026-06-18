import { Button } from "./button";
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isFuture,
  isSameDay,
  subDays,
} from "date-fns";
import type { Habit } from "../context/habitContext";
import { useHabits } from "../context/habitContext";

export type HabitItemProps = {
  habit: Habit;
};

export const HabitItem = ({ habit }: HabitItemProps) => {
  const { deleteHabit, toggleHabit } = useHabits();
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  const streak = getStreak(habit.completions);

  return (
    <div className="rounded-xl bg-zinc-800 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium">{habit.name}</span>
          {streak !== 0 && <span className="text-sm text-yellow-400">{streak}</span>}
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
            variant={habit.completions.some((completion) => isSameDay(completion, date)) ? "primary" : "secondary"}
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

const getStreak = (completions: Date[]) => {
  if (completions.length === 0) return 0;

  const sortedCompletions = [...completions].sort(
    (firstDate, secondDate) => secondDate.getTime() - firstDate.getTime()
  );

  let streak = 1;
  let cursor = sortedCompletions[0];

  for (let index = 1; index < sortedCompletions.length; index += 1) {
    const expectedPreviousDate = subDays(cursor, 1);
    const currentDate = sortedCompletions[index];

    if (!isSameDay(currentDate, expectedPreviousDate)) break;

    streak += 1;
    cursor = currentDate;
  }

  return streak;
};
