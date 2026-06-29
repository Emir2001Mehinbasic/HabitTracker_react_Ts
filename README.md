# Habit Tracker

Habit Tracker is a small React + TypeScript app for building and tracking daily habits. You can add habits, mark individual days as completed, remove habits, and view a simple streak count for each habit.

## Features

- Add new habits with a form
- Mark days as completed for each habit
- Delete habits you no longer want
- View a current streak for each habit
- Navigate habits week by week with `Prev` and `Next`
- Persist habits in `localStorage`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- date-fns

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Build a Docker image

This project now includes a `Dockerfile` and `nginx.conf` so the app can be built and served in a container.

```bash
docker build -t habittracker .
```

Run the container locally on port 8080:

```bash
docker run -p 8080:80 habittracker
```

Open the app in your browser at `http://localhost:8080`.

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and build the app
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## How It Works

- The app stores habits in a shared React context.
- `HabitForm` adds new habits.
- `HabitList` renders all habits from context.
- `HabitItem` handles day toggles, deletion, and streak display.
- `localStorage` keeps your habits saved between page reloads.

## Notes

- Completion dates are stored as dates in the UI state and persisted through `localStorage`.
- If you refresh the page, your habits should remain available.
