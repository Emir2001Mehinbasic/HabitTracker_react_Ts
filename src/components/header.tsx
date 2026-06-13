import Button from "./button";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-gray-400 text-sm">1/1 done</span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span className="text-2xl  font-bold">29/01</span>
        <div className="flex items-center gap-3">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  );
}
